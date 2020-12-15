const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = express.Router();


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*',cors());
app.use(e)
