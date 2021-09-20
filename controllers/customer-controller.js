
const { Customer, Driver, Goods, Vehicle } = require('../models');
const id = require('shortid')




//Customer 

const customers = async(req, res)=>{

    try{
        const customers = await Customer.findAll({include: [{model: Goods, as: 'goods'},{model: Driver, as: 'drivers'},{model: Vehicle, as: 'vehicles'}]});

        return await res.status(200).json({customers})
    }catch(error){
        return res.status(500).json({
                msg: 'Server Error'+ error,
                statusCode: 500
        })
    }
}

const createCustomer = async(req, res) =>{

    const {fullName, gender, email, phoneNumber, driverId, goodsId, vehicleId} = req.body;
    console.log(req.body)
    try{

        const customers = await Customer.findAll({where: {email}});

        if(customers.length >=1) return await res.status(409).json({msg: 'Customer already exist'});
        else {
               await   Customer.create({
                        id: id(),
                        fullName,
                        gender,
                        email,
                        driverId, 
                        goodsId, 
                        vehicleId,
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



const destroyCustomer = async(req, res) =>{

    const {id} = req.params;
    console.log(id, 'id')

    try{
        const customer = await Customer.findByPk(id);

        if(!customer) return await res.status(404).json({msg: 'Customer not found'})

        else {

            await Customer.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


const amendCustomer = async(req, res) =>{
    const {fullName, gender, email, phoneNumber} = req.body;
    const {id} = req.params;

    try{
        const customer = await Customer.findByPk(id);

        if(!customer) return await res.status(404).json({msg: 'Customer not found'})

        else {

            await Customer.update({
                fullName, gender, email, phoneNumber
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



const showCustomerById = async(req, res)=>{
    const {id} = req.params;

    try{
        const customer = await Customer.findByPk(id);

        if(customer) return res.status(200).json(Customer)

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


module.exports = {createCustomer, amendCustomer, destroyCustomer, showCustomerById, customers}