import { RateLimiterMemory } from 'rate-limiter-flexible';
import AppError from '../utils/error/appError.js';

// Limiter helper function (minute & day)
const dualLimiter =
  (minuteLimiter, dayLimiter, minuteMsg, dayMsg) =>
  async (req, res, next) => {
    const { ip } = req;

    const dayStatus = await dayLimiter.get(ip);
    if (dayStatus?.remainingPoints <= 0) {
      return next(new AppError(dayMsg, 429));
    }

    try {
      await minuteLimiter.consume(ip);
      await dayLimiter.consume(ip);
    } catch {
      return next(new AppError(minuteMsg, 429));
    }

    next();
  };

const wrapLimiter = (limiter, message) => async (req, res, next) => {
  try {
    await limiter.consume(req.ip);
    next();
  } catch {
    next(new AppError(message, 429));
  }
};

// Register: 1/ minute & 4/ day
const registerMinute = new RateLimiterMemory({ points: 1, duration: 60 });
const registerDay = new RateLimiterMemory({
  points: 4,
  duration: 24 * 60 * 60,
});

const registerLimiter = dualLimiter(
  registerMinute,
  registerDay,
  'Too many registrations. Please wait 1 minute.',
  'Too many registrations. Try again tomorrow.',
);

// Login: 5/ 5minutes
const loginLimiter = wrapLimiter(
  new RateLimiterMemory({ points: 5, duration: 60 * 5 }),
  'Too many login attempts. Please wait 5 minutes.',
);

// Send OTP: 1 / minute & 3/ day
const minute = new RateLimiterMemory({ points: 1, duration: 60 });
const day = new RateLimiterMemory({
  points: 3,
  duration: 24 * 60 * 60,
});

const otpLimiter = dualLimiter(
  minute,
  day,
  'Too many requests. Please wait 1 minute.',
  'Too many requests. Try again tomorrow.',
);

// Verify: 5/ hour
const verifyLimiter = wrapLimiter(
  new RateLimiterMemory({ points: 5, duration: 60 * 60 }),
  'Too many requests. Please wait 1 hour.',
);

// Reset Password: 3/ hour
const resetLimiter = wrapLimiter(
  new RateLimiterMemory({ points: 3, duration: 60 * 60 }),
  'Too many requests. Please wait 1 hour.',
);

export {
  registerLimiter,
  loginLimiter,
  otpLimiter,
  verifyLimiter,
  resetLimiter,
};
