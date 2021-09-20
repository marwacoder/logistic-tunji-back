const bc = require('bcrypt');
const jwt = require('jsonwebtoken');
const id = require('shortid')

const {  Administrator } = require('../models');


const addAdmin = async(req, res)=>{

    const {fullName, gender, email, phoneNumber, password} = req.body;

    try{
        const user = await Administrator.findAll({where:{email}});

        if(user.length > 0) {
            return await res.status(409).json({msg: 'User Already Exist'}); 
        }
    
         else {
            bc.hash(password, 10, async(error, hash) => {
                if(error){
                    return await res.status(500).json({msg: 'Server Error'})
                }
                if(hash){
            await Administrator.create({
                        id: id(),
                        fullName,
                        gender,
                        email,
                        phoneNumber,
                        password: hash
                    });
                    return await res.status(200).json({msg: 'success'})
                }
                })
        
            }
                
    }catch(error){
        return await res.status(500).json({msg: 'Server Error'+ error})
    }
}





const authenticate = async(req, res)=>{
    const {username, password} = req.body;

    console.log(req.body,'hellooo')

    try{
        const admin = await Administrator.findAll({where: {email: username}})
       

        if (admin.length <= 0) {
            return await res.status(401).json({
                msg: 'Invalid username or password',
                statusCode: 401
            })
        }
        else  if(admin.length > 0 ) {
            bc.compare(password, admin[0].password, async (error, result) => {
                if (error) {
                    return res.status(500).json({msg: 'Sever Error'})
                }
                if(result){
                    const token =  jwt.sign({
                        email: admin[0].email,
                        password: admin[0].password
                    }, 'secrete',
                        {
                            expiresIn: 3600
                        })
                    return await res.status(200).json({msg: 'success',user: admin, role: 'admin', token})
                }
                else {
                    await res.status(401).json({
                           msg: 'Invalid username or password',
                           statusCode: 401
                       })
                       return  res.end()
               }
        })
    }

        

    }catch(error){
        if(error) return res.status(500).json({msg: 'Sever Error'})
    }
}
//
//heroku run sequelize db:migrate --env production --app setinsoftnewsapp

module.exports = {authenticate, addAdmin}