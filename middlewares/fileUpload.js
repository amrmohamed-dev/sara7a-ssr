import multer from 'multer';
import AppError from '../utils/error/appError.js';

const fileUpload = (fieldName) => {
  const storage = multer.memoryStorage();

  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      return cb(null, true);
    }
    cb(
      new AppError('Not an image! Please upload only images.', 400),
      false,
    );
  };

  const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
  });
  return upload.single(fieldName);
};

export default fileUpload;
