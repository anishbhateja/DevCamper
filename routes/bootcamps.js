const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamps');

router.get('/', bootcampController.getBootcamps);
router.post('/', bootcampController.createBootcamp);
router.delete('/:id', bootcampController.deleteBootcamp);
router.get('/:id', bootcampController.getBootcamp);
router.put('/:id', bootcampController.updateBootcamp);

module.exports = router;
