const multer = require('multer');

const file = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 10
  }
})

module.exports = file;