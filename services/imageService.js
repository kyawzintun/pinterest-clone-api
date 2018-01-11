const Image = require('../models/image');

async function createImage(req, res) {
  const imageObj = req.body;
  if (imageObj.url && imageObj.website && imageObj.description) {
    const newImage = new Image();
    newImage.userID = req.headers.id;
    newImage.username = req.headers.username;
    newImage.url = imageObj.url;
    newImage.website = imageObj.website;
    newImage.description = imageObj.description;

    try {
      const newImageSaved = await newImage.save();
      res.status(200).json(imageObj);
    } catch (error) {
      res.status(500).send('Internal server error.');
    }
  } else {
    res.status(400).send('Requested field is incomplete!');
  }
}


module.exports = {
  createImage
};