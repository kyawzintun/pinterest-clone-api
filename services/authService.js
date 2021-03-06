const User = require('../models/user');

async function isAuthenticatedUser(req, res) {
  const user = await User.findOne({ "id": req.headers.id }).exec();
  if (user) {
    return true;
  }
  res.status(400).send('Not authenticated user');
}

module.exports = {
  isAuthenticatedUser
};