const User = require('../models/user');

async function createUser(req, res) {
  const userObj = req.body;
  if (userObj.id) {
    const user = await User.find({ "id": userObj.id }).exec();
    if (user.length) {
      res.status(200).json(userObj);
      return true;
    }

    const newUser = new User();
    newUser.id = userObj.id;
    newUser.name = userObj.name;
    newUser.email = userObj.email;

    try {
      const newUserSaved = await newUser.save();
      res.status(200).json(userObj);
    } catch (error) {
      res.status(500).send('Internal server error.');
    }
  } else {
    res.status(400).send('User ID is required.');
  }
}


module.exports = {
  createUser
};