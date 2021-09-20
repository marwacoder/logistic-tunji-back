const express = require('express');
const router = express.Router();

const dispatchController = require('../controllers/outStock-controller');



//DRIVERS
router.get('/dispatch',  dispatchController.index);
router.get('/dispatch/:id',  dispatchController.show);
router.post('/dispatch',  dispatchController.dispatchStock);
router.post('/dispatch/amend/:id',  dispatchController.update);
router.post('/dispatch/destroy/:id',  dispatchController.destroy);


module.exports = router;