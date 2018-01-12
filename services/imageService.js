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
      res.status(200).json(newImage);
    } catch (error) {
      res.status(500).send('Internal server error.');
    }
  } else {
    res.status(400).send('Requested field is incomplete!');
  }
}

async function getImage(req, res) {
  let image;
  if (req.params.userId){
    image = await Image.find({"userID": req.params.userId}, { updatedAt: 0, createdAt: 0, _v: 0 }).sort('-createdAt').exec();    
  }else {
    image = await Image.find({}, { updatedAt: 0, createdAt: 0, _v: 0 } ).sort('-createdAt').exec();
  }
  try {
    res.status(200).json(image);
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
  createImage,
  getImage
};