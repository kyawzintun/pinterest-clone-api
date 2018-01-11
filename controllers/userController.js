const { user } = require('../services/userService');

// Handle user create on POST.
exports.user_create_post = async function (req, res) {
  return user.createUser(req, res);
};