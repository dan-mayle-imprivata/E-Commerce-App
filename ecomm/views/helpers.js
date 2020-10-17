module.exports = {
  getError(errors, prop) {
    try {
      return error.mapped()[prop].msg;
    } catch (err) {
      return "";
    }
  },
};
