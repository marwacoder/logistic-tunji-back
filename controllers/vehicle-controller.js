
const { Vehicle } = require('../models');
const id = require('shortid')




//Vehicles 

const vehicles = async(req, res)=>{

    try{
        const vehicles = await Vehicle.findAll();

        return await res.status(200).json({vehicles})
    }catch(error){
        return res.status(500).json({
                msg: 'Server Error'+ error,
                statusCode: 500,
        })
    }
}

const createVehicle = async(req, res) =>{

    const {model, platNumber, tonnage } = req.body;
    console.log(req.body)
    try{

        const vehicle = await Vehicle.findAll({where: {platNumber}});

        if(vehicle.length >=1) return await res.status(409).json({msg: 'Vehicles already exist'});
        else {
               await   Vehicle.create({
                        id: id(),
                        model,
                        platNumber,
                        tonnage
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



const destroyVehicle = async(req, res) =>{

    const {id} = req.params;

    try{
        const vehicle = await Vehicle.findByPk(id);

        if(!vehicle) return await res.status(404).json({msg: 'Vehicle not found'})

        else {

            await Vehicle.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


const amendVehicle = async(req, res) =>{
    const {model, platNumber, tonnage} = req.body;
    const {id} = req.params;

    try{
        const vehicle = await Vehicle.findByPk(id);

        if(!vehicle) return await res.status(404).json({msg: 'Vehicles not found'})

        else {
            await Vehicle.update({
                model, platNumber, tonnage
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



const showVehiclesById = async(req, res)=>{
    const {id} = req.params;

    try{
        const Vehicles = await Vehicle.findByPk(id);

        if(Vehicles) return res.status(200).json({Vehicles})

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


module.exports = {createVehicle, amendVehicle, destroyVehicle, showVehiclesById, vehicles}