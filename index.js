const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = express.Router();
const auth = require('./auth');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*',cors());
app.use(express.urlencoded({extended: true }));

app.use(express.static('public'));

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then((db) =>{
    console.log("successfully connected to MOngoDB Server");
},(err)=> console.log(err));


app.use(auth.verifyUser);


app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.statusCode = 400;
    res.json({status:err.massage});
});

app.listen(process.env.PORT, ()=>{
    console.log(`App is running at localhost:${process.env.PORT}`);
});
