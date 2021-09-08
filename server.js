const express = require('express');
const path = require('path');
const cors = require('cors')
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const models = require('./models/');

const adminRoute = require('./routes/admin');
const customerRoute = require('./routes/customer');
const driverRoute = require('./routes/driver');
const goodsRoute = require('./routes/goods');
const vehicleRoute = require('./routes/vehicle');


const app = express();
app.use(cors({
  origin: '*'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/logistics', adminRoute);
app.use('/logistics', driverRoute);
app.use('/logistics', customerRoute);
app.use('/logistics', goodsRoute);

app.use('/logistics', vehicleRoute);



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, ')
        return res.status(200).json({});
    }
    next();
})


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error); 
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

module.exports = app;
