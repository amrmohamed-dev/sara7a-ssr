import cloudinary from '../config/cloudinary.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';

const uploadImage = (folder) =>
  catchAsync(async (req, res, next) => {
    if (!req.file) return next(new AppError('No image uploaded', 400));

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: `sara7a-ssr/${folder}` },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          },
        )
        .end(req.file.buffer);
    });

    req.body.imageUrl = uploadResult.secure_url;
    next();
  });

export default uploadImage;
