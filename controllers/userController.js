const { user } = require('../services');

// Handle user create on POST.
exports.user_create_post = async function (req, res) {
  return user.createUser(req, res);
};