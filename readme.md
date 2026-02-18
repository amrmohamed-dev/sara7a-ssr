<p align="center">
  <img src="public/img/logo.png" alt="Sara7a Logo" width="100" /><br>
</p>

<h3 align="center">
  A production-oriented anonymous messaging web application built with Node.js, Express, MongoDB (Mongoose), and EJS (SSR), featuring secure JWT authentication, OTP workflows, and a Bootstrap-styled UI.
</h3>

## Table of Contents

- [Project Overview](#project-overview)
- [Code Analysis Snapshot](#code-analysis-snapshot)
- [Features](#features-implemented)
- [Architecture Highlights](#architecture-highlights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation-swagger)
- [Database Models](#database-models)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage Instructions](#usage-instructions)
- [Security Considerations](#security-considerations)
- [Data Consistency and Model Hooks](#data-consistency-and-model-hooks)
- [Scripts](#scripts)
- [Testing](#testing-strategy)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Sara7a is a hybrid SSR + API application:

- SSR pages (`EJS`) for home, auth, public profile, messages, and settings.
- JSON APIs for auth, message operations, and account/settings updates.
- Cookie-based JWT auth with OTP flows for email confirmation and password recovery.
- Data consistency handled by Mongoose hooks and controller-level cleanup.

## Code Analysis Snapshot

| Module                 | Key Files                                                                                                                                        | What It Handles                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| App initialization     | `server.js`, `app.js`, `config/db.js`                                                                                                            | Env loading, DB connection, Express setup, middleware registration, routes, global error handler             |
| Auth                   | `routes/auth.route.js`, `controllers/auth.controller.js`, `services/auth.service.js`                                                             | Register/login/logout, JWT cookie issuing, OTP send/verify, email verification, password reset/update        |
| Messaging              | `routes/message.route.js`, `controllers/message.controller.js`, `models/message.model.js`                                                        | Public message creation, inbox fetch, favourite messages, single/all delete, image support, ownership checks |
| Users/Settings         | `routes/user.route.js`, `controllers/user.controller.js`, `models/user.model.js`                                                                 | Profile updates, password change, profile photo upload/delete, account deletion                              |
| Views (SSR)            | `routes/view.route.js`, `controllers/view.controller.js`, `views/`                                                                               | Home/auth pages, public user message form, messages tabs (received/favourite), settings UI                   |
| Security middleware    | `middlewares/limiter.js`, `middlewares/validation.js`, `middlewares/mongoSanitize.js`, `middlewares/xssClean.js`, `middlewares/checkVerified.js` | Rate limiting, Joi validation, Mongo injection sanitization, XSS sanitization, verified-account guard        |
| Media & email services | `services/cloudinary.service.js`, `emails/services/email.service.js`                                                                             | Cloudinary upload/delete, OTP email templating and delivery                                                  |

## Features (Implemented)

- JWT authentication using `httpOnly` cookies.
- OTP email workflows:
  - Email confirmation.
  - Password recovery.
- Secure password hashing with `bcrypt`.
- Anonymous and identified message sending.
- Optional message image upload (Cloudinary).
- Receiver controls:
  - `allowMessages` toggle.
  - `showLastSeen` toggle.
- Favourite messages with metadata:
  - Stored as `{ msg, addedAt }`.
  - Used for efficient favourite-state rendering in UI.
- Inbox management:
  - Sort newest/oldest.
  - Delete one message or delete all.
- Profile management:
  - Update name/preferences.
  - Upload/delete avatar.
  - Update password.
  - Delete account.
- Public profile page with visit counter.
- SSR partial loading for tabs (`/messages?tab=...`) to optimize UI updates.
- Centralized error handling for API and SSR responses.

## Architecture Highlights

- Layered design: `routes -> controllers -> services/models`.
- Hybrid rendering:
  - Full page SSR for initial views.
  - AJAX partial fetch for message tabs.
- Strong route protection:
  - `isAuthenticated` for private APIs/pages.
  - Role restriction (`restrictTo('user')`) on inbox APIs.
- View-aware authentication:
  - `isLoggedIn` middleware for SSR pages to expose authenticated user state without blocking requests.
- Purpose-specific OTP checks (`Email Confirmation` vs `Password Recovery`).
- Consistent cleanup strategy:
  - Mongoose hooks for relational consistency.
  - Controller cleanup for Cloudinary resources.
- Custom sanitization middleware for both XSS and Mongo operator injection.

## Tech Stack

- Node.js (engine: `22.x`)
- Express `5`
- MongoDB + Mongoose
- EJS (SSR templates)
- Bootstrap & CSS (UI styling)
- Swagger (OpenAPI 3.0.3)
- JWT (`jsonwebtoken`)
- `bcrypt` (password hashing)
- Joi validation
- Email Service (Nodemailer in development, Resend in production with controlled demo fallback)
- Cloudinary
- Multer (memory storage)
- Helmet (CSP + security headers)
- `rate-limiter-flexible`
- Morgan (HTTP request logging for development)
- Parcel (front-end bundle for `public/js/bundled/index.js`)

## Project Structure

```text
.
├─ app.js
├─ server.js
├─ config/
├─ controllers/
├─ routes/
├─ models/
├─ middlewares/
├─ services/
├─ validations/
├─ utils/
├─ emails/
├─ docs/
│  └─ swagger.yaml
├─ views/
├─ public/
├─ .env.example
└─ vercel.json
```

## API Documentation (Swagger)

This project includes comprehensive API documentation using **Swagger (OpenAPI 3.0.3)**.

The documentation provides a complete and interactive reference for all available API endpoints, including request and response schemas, authentication and authorization requirements, validation rules, and standardized error handling.

Swagger UI enables manual testing of both public and protected endpoints, including authentication flows, OTP verification, file uploads, and cookie-based session handling, without relying on external tools.

### Swagger UI

- **Local:** http://localhost:3000/api-docs
- **Production:** https://sara7a-ssr.vercel.app/api-docs

<p align="center">
  <a href="https://sara7a-ssr.vercel.app/api-docs">
    <img src="https://img.shields.io/badge/API-Swagger-green" />
  </a>
</p>

The OpenAPI specification is defined in:

```text
docs/swagger.yaml
```

## Database Models

### User (`models/user.model.js`)

Core fields:

- `username`, `name`, `email`, `password`
- `role` (`user` or `admin`)
- `photo`, `photoPublicId`
- `favouriteMsgs[]` with:
  - `msg` (ref to `Message`)
  - `addedAt`
- `visitsCount` (public profile visits counter)
- `allowMessages`, `showLastSeen`, `lastSeenAt`
- `otp` (`code`, `expires`, `purpose`)
- `passwordChangedAt` (used for JWT invalidation)
- `isVerified`, `isActive`
- virtual: `msgsCount`

Model methods:

- `correctPassword(candidatePassword)`
- `generateOtp(purpose)` (stores hashed OTP)
- `changedPasswordAfter(jwtIat)`

### Message (`models/message.model.js`)

Core fields:

- `text`
- `image`, `imagePublicId`
- `sender` (optional ref to `User`)
- `receiver` (required ref to `User`)

> See [**Data Consistency and Model Hooks**](#data-consistency-and-model-hooks) for user/message lifecycle cleanup and cascade behavior.

## Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/amrmohamed-dev/sara7a-ssr.git

   cd sara7a-ssr
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```
3. **Configure environment variables:**
   Create a `.env` file (see [Environment Variables](#environment-variables)).
4. Build front-end bundle (recommended before first run):
   ```bash
   pnpm run build:js
   ```
5. Run development server:
   ```bash
   pnpm run dev
   ```
6. Open:
   ```text
   http://localhost:3000
   ```

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

# MongoDB
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@<cluster>/<db>
DATABASE_USERNAME=<mongo_username>
DATABASE_PASSWORD=<mongo_password>
# DB_LOCAL=mongodb://127.0.0.1:27017/sara7a  # optional if you switch config/db.js

# JWT
JWT_SECRET=<strong_secret>
JWT_EXPIRES_IN=10d
JWT_COOKIE_EXPIRES_IN=10

# Email Providers

# Resend (Production)
RESEND_API_KEY=<resend_api_key>

# Gmail (Development)
EMAIL_USER=<gmail_address>
EMAIL_PASS=<gmail_app_password>

# Cloudinary
CLOUDINARY_CLOUD_NAME=<cloud_name>
CLOUDINARY_API_KEY=<api_key>
CLOUDINARY_API_SECRET=<api_secret>
```

## Usage Instructions

### UI Routes (SSR)

| Route              | Access                          | Purpose                               |
| ------------------ | ------------------------------- | ------------------------------------- |
| `/`                | Public                          | Landing page                          |
| `/login`           | Public (redirects if logged in) | Login form                            |
| `/register`        | Public (redirects if logged in) | Registration form                     |
| `/forgot-password` | Public (redirects if logged in) | OTP password recovery flow            |
| `/u/:username`     | Public                          | Public profile + send message form    |
| `/messages`        | Auth required                   | Inbox page (received/favourites tabs) |
| `/settings`        | Auth required                   | Account settings/profile/password     |

### API Endpoints

#### Auth (`/api/v1/auth`)

| Method  | Endpoint               | Access         | Notes                                                       |
| ------- | ---------------------- | -------------- | ----------------------------------------------------------- |
| `POST`  | `/register`            | Public         | Creates account and sets JWT cookie                         |
| `POST`  | `/login`               | Public         | Authenticates and sets JWT cookie                           |
| `GET`   | `/logout`              | Auth or Public | Clears JWT cookie                                           |
| `POST`  | `/send-otp/:purpose`   | Mixed          | Purpose must be `Email Confirmation` or `Password Recovery` |
| `PATCH` | `/verify-email`        | Auth required  | Confirms email using OTP                                    |
| `POST`  | `/verify-otp/:purpose` | Public         | Validates OTP for given purpose                             |
| `PATCH` | `/reset-password`      | Public         | Requires valid OTP + new password                           |

Note: when calling these endpoints from API clients (e.g., Postman), URL-encode purpose values.
(example: `Email%20Confirmation`).

#### Messages (`/api/v1/messages`)

| Method   | Endpoint         | Access             | Notes                                                                    |
| -------- | ---------------- | ------------------ | ------------------------------------------------------------------------ |
| `POST`   | `/`              | Public             | Send message to receiver; optional `sender`; optional image (`msgImage`) |
| `GET`    | `/`              | Auth + role `user` | Get current user inbox                                                   |
| `DELETE` | `/`              | Auth + role `user` | Delete all current user messages                                         |
| `GET`    | `/favourites`    | Auth + role `user` | Get current user's favourite messages                                    |
| `PATCH`  | `/favourite/:id` | Auth + role `user` | Toggle favourite for owned message                                       |
| `DELETE` | `/:id`           | Auth + role `user` | Delete one owned message                                                 |

#### Users (`/api/v1/users`)

| Method   | Endpoint              | Access          | Notes                                          |
| -------- | --------------------- | --------------- | ---------------------------------------------- |
| `PATCH`  | `/me`                 | Auth + verified | Update name and message/visibility preferences |
| `DELETE` | `/me`                 | Auth            | Delete account and associated resources        |
| `PATCH`  | `/me/update-password` | Auth + verified | Requires current password                      |
| `PATCH`  | `/me/photo`           | Auth            | Upload avatar (`avatar`)                       |
| `DELETE` | `/me/photo`           | Auth            | Remove avatar and reset to default             |

## Security Considerations

- `X-Powered-By` header is disabled to reduce server fingerprinting.
- Application is configured to be proxy-aware using `trust proxy` for correct handling of secure headers and cookies in production.
- SSR responses are served with `Cache-Control: no-store` to prevent sensitive data caching.
- Passwords hashed with `bcrypt` in model pre-save hook.
- JWT stored in `httpOnly` cookies with `sameSite: 'Strict'`; `secure` in production.
- JWT tokens are invalidated after password changes by comparing `passwordChangedAt` with token `iat`, preventing reuse of old tokens.
- OTP codes are hashed (`sha256`) before DB storage.
- OTP is purpose-bound and time-limited (10 minutes).
- Joi validation on auth and password-related endpoints.
- Custom sanitization:
  - Removes Mongo operators (`$`, `.` keys) from `body/params/query`.
  - Sanitizes string input against XSS.
- Helmet CSP enabled with explicit script/style/font/image sources.
- Rate limiting is applied per IP on sensitive endpoints to mitigate abuse and brute-force attempts:
  - Registration and login endpoints are restricted.
  - OTP-related endpoints are strictly limited to prevent email and OTP spamming.
  - Password reset flows are protected against repeated attempts.
- Message and favourite actions enforce ownership checks.
- In the deployed production demo (Vercel free tier), email delivery may run in controlled demo mode due to provider limitations.
  In this scenario, the generated OTP is included in the API response strictly for reviewer flow validation and demonstration purposes.
- Keep `.env` private and rotate secrets if exposed.

## Data Consistency and Model Hooks

- `User` pre-`findOneAndDelete`:
  - Deletes all messages where deleted user is receiver.
- `Message` pre-`findOneAndDelete`:
  - Removes deleted message ID from user `favouriteMsgs`.
- `Message` pre-`deleteMany`:
  - Clears receiver `favouriteMsgs` to avoid orphan refs.
- `User` pre-`/^find/`:
  - Excludes users where `isActive === false`.
- `User` pre-save:
  - Hashes password when modified.
  - Updates `passwordChangedAt` for token invalidation.
- Auth middleware updates `lastSeenAt` on active sessions.
- Controllers delete Cloudinary assets when deleting photos/messages/account.

## Scripts

`cross-env` is used to ensure environment variables work consistently across different operating systems (Windows, macOS, Linux).

| Script     | Command                                                            | Purpose                    |
| ---------- | ------------------------------------------------------------------ | -------------------------- |
| `dev`      | `cross-env NODE_ENV=development nodemon server.js`                 | Development server         |
| `start`    | `node server.js`                                                   | Production start           |
| `prod`     | `cross-env NODE_ENV=production nodemon server.js`                  | Production-mode nodemon    |
| `debug`    | `ndb server.js`                                                    | Debugging                  |
| `watch:js` | `parcel serve ./public/js/index.js --dist-dir ./public/js/bundled` | Front-end watch build      |
| `build:js` | `parcel build ./public/js/index.js --dist-dir ./public/js/bundled` | Front-end production build |

## Testing Strategy

Automated tests are planned for a future iteration.  
The current version focuses on architecture robustness, security hardening, and production-realistic flows.

Manual testing included edge cases such as:

- Invalid or expired OTP submissions
- Reused JWT after password change
- Ownership bypass attempts on message operations
- Rate limit enforcement validation

Suggested manual smoke checks:

1. Register, login, and logout flow.
2. Send OTP for both purposes and verify.
3. Reset password and re-login.
4. Send anonymous and identified messages.
5. Toggle favourites, delete one message, delete all messages.
6. Upload and delete profile photo.
7. Delete account and verify message/image cleanup.

## Contributing

Contributions are welcome through issues and pull requests.
Please keep changes aligned with existing architecture (`routes/controllers/services/models`) and include manual verification steps in your PR description.

## License

MIT License. See `LICENSE`.

Developed by [Amr Mohammed](https://github.com/amrmohamed-dev).
