import cloudinary from '../config/cloudinary.js';
import catchAsync from '../utils/error/catchAsync.js';
import AppError from '../utils/error/appError.js';

const uploadImage = (folder) =>
  catchAsync(async (req, res, next) => {
    if (!req.file) {
      if (folder === 'msgs') return next();
      return next(new AppError('No image uploaded', 400));
    }

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: `sara7a-ssr/${folder}`,
            overwrite: true,
            invalidate: true,
            resource_type: 'image',
          },
          (err, result) => (err ? reject(err) : resolve(result)),
        )
        .end(req.file.buffer);
    });

    req.body.imageUrl = uploadResult.secure_url;
    req.body.imagePublicId = uploadResult.public_id;
    next();
  });

const deleteOneImage = async (publicId) => {
  const result = await cloudinary.uploader.destroy(publicId, {
    resource_type: 'image',
  });

  if (!['ok', 'not_found'].includes(result.result)) {
    throw new AppError('Failed to delete image', 500);
  }
};

const deleteUserImages = async (photoPublicId, msgImagePublicIds = []) => {
  if (photoPublicId) {
    await cloudinary.uploader.destroy(photoPublicId, {
      resource_type: 'image',
    });
  }

  if (msgImagePublicIds.length) {
    await cloudinary.api.delete_resources(msgImagePublicIds, {
      resource_type: 'image',
    });
  }
};

export { uploadImage, deleteOneImage, deleteUserImages };
