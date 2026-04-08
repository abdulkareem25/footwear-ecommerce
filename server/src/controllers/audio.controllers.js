const id3 = require('node-id3');
const uploadFile = require('../services/storage.service');

const uploadAudio = async (req, res) => {

  const { buffer } = req.file;
  const tags = id3.read(req.file.buffer);
  const { imageBuffer } = tags.image;
  const folderName = req.file.originalname.split('.')[0];

  const result = await uploadFile(buffer, imageBuffer, folderName);

  res.status(200).json({
    message: "Audio uploaded successfully",
    data: result
  });

};

module.exports = { uploadAudio };