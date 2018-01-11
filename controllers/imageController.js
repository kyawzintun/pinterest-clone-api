const { auth, image } = require('../services');

// Handle user create on POST.
exports.image_create_post = async function (req, res) {
  try {
    await auth.isAuthenticatedUser(req, res);
    return image.createImage(req, res);
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
};