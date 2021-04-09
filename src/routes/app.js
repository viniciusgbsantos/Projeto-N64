const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv'); //1.2k (gzipped:706)
dotenv.config();

const conect = require('../models/index');

const gamesRouter = require('./games');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
conect();

app.get('/', (req, res)=>{
    return res.json({message: 'API ok'});
});

app.use('/games', gamesRouter);

app.listen(3000, ()=>{
    console.log('Api running on port 3000');
});