const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicle-controller');



//DRIVERS
router.post('/vehicle',  vehicleController.createVehicle);
router.get('/vehicle',  vehicleController.vehicles);
router.get('/vehicle/:id',  vehicleController.showVehiclesById);
router.post('/vehicle/amend/:id',  vehicleController.amendVehicle);
router.post('/vehicle/destroy/:id',  vehicleController.destroyVehicle);


module.exports = router;