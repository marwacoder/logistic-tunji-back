const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee-controller');



//employee
router.get('/employee',  employeeController.employees);
router.get('/employee/:id',  employeeController.showEmployeeById);
router.post('/employee',  employeeController.createEmployee);
router.post('/employee/amend/:id',  employeeController.amendEmployee);
router.post('/employee/destroy/:id',  employeeController.destroyEmployee);


module.exports = router;