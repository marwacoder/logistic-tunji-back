
const { Employee } = require('../models');
const id = require('shortid')




//Employee 

const employees = async(req, res)=>{

    try{
        const employees = await Employee.findAll();

        return await res.status(200).json({employees})
    }catch(error){
        return res.status(500).json({
                msg: 'Server Error'+ error,
                statusCode: 500
        })
    }
}

const createEmployee = async(req, res) =>{

    const {employeeName, gender, email, phoneNumber, employeeType} = req.body;
    console.log(req.body)
    try{

        const employees = await Employee.findAll({where: {employeeName}});

        if(employees.length >=1) return await res.status(409).json({msg: 'Employee already exist'});
        else {
               await   Employee.create({
                        id: id(),
                        employeeName,
                        gender,
                        email,
                        employeeType,
                        phoneNumber
                    })
                    return await res.status(200).json({msg: 'success'})
        }

    }catch(error){
        return res.status(500).json({
                msg: 'Server Error'+ error,
                statusCode: 500
        })
    }
}



const destroyEmployee = async(req, res) =>{

    const {id} = req.params;

    try{
        const employee = await Employee.findByPk(id);

        if(!employee) return await res.status(404).json({msg: 'Employee not found'})

        else {

            await Employee.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


const amendEmployee = async(req, res) =>{
    const {employeeName, gender, email, employeeType, phoneNumber} = req.body;
    const {id} = req.params;

    try{
        const employee = await Employee.findByPk(id);

        if(!employee) return await res.status(404).json({msg: 'Employee not found'})

        else {

            await Employee.update({
                employeeName,
                gender,
                email,
                employeeType,
                phoneNumber
            },{
                where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}



const showEmployeeById = async(req, res)=>{
    const {id} = req.params;

    try{
        const employee = await Employee.findByPk(id);

        if(employee) return res.status(200).json(employee)

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


module.exports = {createEmployee, amendEmployee, destroyEmployee, showEmployeeById, employees}