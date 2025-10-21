import { isAuthenticated } from '../controllers/auth.controller.js';

const checkOtpPurpose = (req, res, next) => {
  const { purpose } = req.params;
  if (purpose === 'Email Confirmation') {
    return isAuthenticated(req, res, next);
  }
  next();
};

export default checkOtpPurpose;
