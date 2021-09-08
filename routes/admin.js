const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account-controller');


// http://localhost:8000/cryptopozi
router.post('/admin/account', accountController.createAdminAccount);
router.get('/admin/account', accountController.administrator);




module.exports = router;

