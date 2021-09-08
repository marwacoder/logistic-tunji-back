const express = require('express');
const router = express.Router();

const driverController = require('../controllers/driver-controller');



//DRIVERS
router.post('/driver',  driverController.createDriver);
router.get('/driver',  driverController.drivers);
router.get('/driver/:id',  driverController.showDriverById);
router.post('/driver/amend/:id',  driverController.amendDriver);
router.post('/driver/destroy/:id',  driverController.destroyDriver);


module.exports = router;