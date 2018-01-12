const { auth, image } = require('../services');

// Handle image create on POST.
exports.image_create_post = async function (req, res) {
  try {
    await auth.isAuthenticatedUser(req, res);
    return image.createImage(req, res);
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
};

// Handle image list on GET.
exports.image_list = async function (req, res) {
  return image.getImage(req, res);
};