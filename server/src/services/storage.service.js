const imageKit = require('@imagekit/nodejs').default;

const client = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(audioBuffer, imageBuffer, folderName) {

  const [uploadAudio, uploadImage] = await Promise.all([
    client.files.upload({
      file: audioBuffer.toString('base64'),
      fileName: "audio.mp3",
      folder: `Audio/${folderName}`
    }),
    client.files.upload({
      file: imageBuffer.toString('base64'),
      fileName: "image.jpeg",
      folder: `Audio/${folderName}`
    })
  ])

  return [uploadAudio, uploadImage];
};

module.exports = uploadFile;