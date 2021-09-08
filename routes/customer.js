const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');



//CUSTOMER
router.get('/customer/account',  accountController.customers);
router.get('/customer/account/:id',  accountController.showCustomerById);
router.post('/customer/account',  accountController.createCustomerAccount);
router.post('/customer/amend/:id',  accountController.amendCustomer);
router.post('/customer/destroy/:id',  accountController.destroyCustomer);


module.exports = router;