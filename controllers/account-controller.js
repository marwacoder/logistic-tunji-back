const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize')
const { Administrator, Customer, Driver } = require('../models');


const getRandomNumber = (min = 0, max = 500000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, '0')
}

const administrator = async(req, res)=>{

    try{
        const data = await Administrator.findAll();

        if(data) return await res.status(200).json(data)
    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error'+ error,
                statusCode: 500
            }
        })
    }
}




const createAdminAccount = async(req, res) =>{

    const {fullName, gender, email, phoneNumber, contactAddress, password} = req.body;
    let id = getRandomNumber(); 

    try{

        const admin = await Administrator.findAll({where: {[Op.or]: [{email}, {phoneNumber}]}});

        if(admin.length >=1) return await res.status(409).json({msg: 'email or phone number already exist'});
        else {
             bcrypt.hash(password, 10, async(error, hash) => {

                if(error) return res.status(500).json({
                    error:{
                    msg: 'Server Error',
                    statusCode: 500
                }})

                if(hash){
                    Administrator.create({
                        id,
                        fullName,
                        gender,
                        email,
                        phoneNumber,
                        contactAddress,
                        password: hash
                    })
                    return await res.status(200).json(admin)
                }
             })

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error'+ error,
                statusCode: 500
            }
        })
    }
}


//CUSTOMER 

const customers = async(req, res)=>{

    try{
        const customers = await Customer.findAll();

        return await res.status(200).json(customers)
    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}

const createCustomerAccount = async(req, res) =>{

    const {fullName, gender, email, phoneNumber, contactAddress, goodsId, password} = req.body;

    try{

        const customer = await Customer.findAll({where: {[Op.or]: [{email}, {phoneNumber}]}});

        if(customer.length >=1) return await res.status(409).json({msg: 'email or phone number already exist'});
        else {
             bcrypt.hash(password, 10, async(error, hash) => {

                if(error) return res.status(500).json({error:{
                    msg: 'Server Error',
                    statusCode: 500
                }})

                if(hash){
                    Customer.create({
                        id,
                        fullName,
                        gender,
                        email,
                        phoneNumber,
                        contactAddress,
                        password: hash,
                        goodsId
                    })
                    return await res.status(200).json({msg: 'success'})
                }
             })

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}



const destroyCustomer = async(req, res) =>{

    const {id} = req.params;

    try{
        const customer = await Customer.findByPk(id);

        if(!customer) return await res.status(404).json({msg: 'customer not found'})

        else {

            await Customer.destroy({where: {customerId: id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}


const amendCustomer = async(req, res) =>{

    const {id} = req.params;

    try{
        const customer = await Customer.findByPk(id);

        if(!customer) return await res.status(404).json({msg: 'customer not found'})

        else {

            await Customer.update({
                fullName,
                gender,
                email,
                phoneNumber,
                contactAddress,
            },{
                where: {customerId: id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}



const showCustomerById = async(req, res)=>{
    const {id} = req.params;

    try{
        const customer = await Customer.findByPk(id);

        if(customer) return res.status(200).json(customer)

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}



//Driver 

const drivers = async(req, res)=>{

    try{
        const drivers = await Driver.findAll();

        return await res.status(200).json(drivers)
    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}


const createDriverAccount = async(req, res) =>{

    const {fullName, gender, email, phoneNumber, contactAddress, vehicleId, goodsId, password} = req.body;

    try{

        const driver = await Driver.findAll({where: {[Op.or]: [{email}, {phoneNumber}]}});
        
        if(driver.length >=1) return await res.status(409).json({msg: 'email or phone number already exist'});
        else {
             bcrypt.hash(password, 10, async(error, hash) => {

                if(error) return res.status(500).json({error:{
                    msg: 'Server Error',
                    statusCode: 500
                }})

                if(hash){
                    Driver.create({
                        id,
                        fullName,
                        gender,
                        email,
                        phoneNumber,
                        contactAddress,
                        password: hash,
                        vehicleId,
                        goodsId
                    })
                    return await res.status(200).json({msg: 'success'})
                }
             })

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}



const destroyDriver = async(req, res) =>{

    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(!driver) return await res.status(404).json({msg: 'driver not found'})

        else {

            await Driver.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}


const amendDriver = async(req, res) =>{

    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(!driver) return await res.status(404).json({msg: 'driver not found'})

        else {

            await Driver.update({
                fullName,
                gender,
                email,
                phoneNumber,
                contactAddress,
            },{
                where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}



const showDriverById = async(req, res)=>{
    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(driver) return res.status(200).json(driver)

    }catch(error){
        return res.status(500).json({
            error:{
                msg: 'Server Error',
                statusCode: 500
            }
        })
    }
}




module.exports = {
    createAdminAccount,createCustomerAccount, administrator,
    destroyCustomer, amendCustomer, showCustomerById, customers,
    createDriverAccount, destroyDriver, amendDriver, showDriverById, drivers
};