import sanitizeHtml from 'sanitize-html';

const xssClean = (req, res, next) => {
  const sanitize = (obj) => {
    if (typeof obj === 'string') {
      return sanitizeHtml(obj, {
        allowedTags: [],
        allowedAttributes: {},
      });
    }
    if (Array.isArray(obj)) {
      return obj.map(sanitize);
    }
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key) => {
        obj[key] = sanitize(obj[key]);
      });
      return obj;
    }
    return obj;
  };

  ['body', 'params', 'query'].forEach((part) => {
    if (req[part]) sanitize(req[part]);
  });

  next();
};

export default xssClean;
