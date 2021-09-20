const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer-controller');



//CUSTOMER
router.get('/customer',  customerController.customers);
router.get('/customer/:id',  customerController.showCustomerById);
router.post('/customer',  customerController.createCustomer);
router.post('/customer/amend/:id',  customerController.amendCustomer);
router.post('/customer/destroy/:id',  customerController.destroyCustomer);


module.exports = router;