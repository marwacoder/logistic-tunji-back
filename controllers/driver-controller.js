
const { Driver } = require('../models');
const id = require('shortid')




//Driver 

const drivers = async(req, res)=>{

    try{
        const drivers = await Driver.findAll();

        return await res.status(200).json({drivers})
    }catch(error){
        return res.status(500).json({
                msg: 'Server Error',
                statusCode: 500,
        })
    }
}

const createDriver = async(req, res) =>{

    const {fullName, gender, email, phoneNumber, contactAddress, licenceNo } = req.body;
    console.log(req.body)
    try{

        const driver = await Driver.findAll({where: {email}});

        if(driver.length >=1) return await res.status(409).json({msg: 'Driver already exist'});
        else {
               await   Driver.create({
                        id: id(),
                        fullName,
                        gender,
                        email,
                        phoneNumber,
                        contactAddress,
                        licenceNo
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



const destroyDriver = async(req, res) =>{

    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(!driver) return await res.status(404).json({msg: 'Driver not found'})

        else {

            await Driver.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


const amendDriver = async(req, res) =>{
    const {fullName, gender, email, phoneNumber, contactAddress, licenceNo} = req.body;
    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(!driver) return await res.status(404).json({msg: 'Driver not found'})

        else {
            await Driver.update({
                fullName,
                gender,
                email,
                phoneNumber,
                contactAddress,
                licenceNo
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



const showDriverById = async(req, res)=>{
    const {id} = req.params;

    try{
        const driver = await Driver.findByPk(id);

        if(driver) return res.status(200).json({driver})

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


module.exports = {createDriver, amendDriver, destroyDriver, showDriverById, drivers}