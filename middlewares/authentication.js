const createError = require("http-errors");

module.exports = {
  verifyUser: async (req, res, next) => {
    try {
      if (!req.isAuthenticated()) {
        throw createError(401, "Unauthorized");
      }
      next();
    } catch (error) {
      next(error);
    }
  },
};
