const { Router } = require('express');
const { uploadAudio } = require('../controllers/audio.controllers');
const file = require('../middlewares/multer.middleware');

const router = Router();

router.post('/', file.single('audio'), uploadAudio);

module.exports = router;