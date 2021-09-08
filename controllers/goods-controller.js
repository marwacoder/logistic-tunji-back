
const { Goods } = require('../models');
const id = require('shortid')




//Goods 

const goods = async(req, res)=>{

    try{
        const goods = await Goods.findAll();

        return await res.status(200).json({goods})
    }catch(error){
        return res.status(500).json({
                msg: 'Server Error',
                statusCode: 500
        })
    }
}

const createGoods = async(req, res) =>{

    const {goodsName, description, category, customerId, quantity} = req.body;
    console.log(req.body)
    try{

        const goods = await Goods.findAll({where: {goodsName}});

        if(goods.length >=1) return await res.status(409).json({msg: 'goods already exist'});
        else {
               await   Goods.create({
                        id: id(),
                        goodsName,
                        description,
                        category,
                        quantity,
                        customerId
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



const destroyGoods = async(req, res) =>{

    const {id} = req.params;

    try{
        const goods = await Goods.findByPk(id);

        if(!goods) return await res.status(404).json({msg: 'goods not found'})

        else {

            await Goods.destroy({where: {id}})
            return await res.status(200).json({msg: 'success'})

        }

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


const amendGoods = async(req, res) =>{
    const {goodsName, description, category, quantity} = req.body;
    const {id} = req.params;

    try{
        const goods = await Goods.findByPk(id);

        if(!goods) return await res.status(404).json({msg: 'goods not found'})

        else {

            await Goods.update({
                goodsName,
                description,
                category,
                quantity
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



const showGoodsById = async(req, res)=>{
    const {id} = req.params;

    try{
        const goods = await Goods.findByPk(id);

        if(goods) return res.status(200).json(goods)

    }catch(error){
        return res.status(500).json({
            msg: 'Server Error',
            statusCode: 500
    })
    }
}


module.exports = {createGoods, amendGoods, destroyGoods, showGoodsById, goods}