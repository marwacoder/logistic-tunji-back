const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller');


// http://localhost:8000/cryptopozi
router.post('/login/action', authController.authenticate);
router.post('/admin/account', authController.addAdmin);




module.exports = router;

