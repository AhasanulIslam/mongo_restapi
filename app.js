const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
// app.use((req, res, next) => {
//     res.status(200).json({
//          messese: 'It works!'
//     });
// });

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders');
const req = require('express/lib/request');


// mongoose.connect('mongodb://localhost:27017/node_rest_shop').then(() => {
// console.log("MongoDb Connected");    

// })
// 
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://ahsan:"+process.env.MONGO_ATLAS_PW + "@cluster0.bvap5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// console.log('ps ',process.env.ps );
mongoose.connect("mongodb+srv://ahsan:ahsan69@cluster0.5f9ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => console.log('connection established') ).catch(err => console.log('not connected',err) ) 



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
    
app.use((error, req, res, next) => {
res.status(error.status|| 500);
res.json({
    error: {
        message : error.message
    }
})    
})

module.exports = app;