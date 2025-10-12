const mongoSanitize = (req, res, next) => {
  const sanitize = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(sanitize);
    }
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key) => {
        if (key.startsWith('$') || key.includes('.')) {
          delete obj[key];
        } else {
          obj[key] = sanitize(obj[key]);
        }
      });
    }
    return obj;
  };

  ['body', 'params', 'query'].forEach((part) => {
    if (req[part]) sanitize(req[part]);
  });

  next();
};

export default mongoSanitize;
