const express = require('express');
const userRouter = require('./controllers/userController');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path:__dirname + '/.env',override:true});

const app = express();

const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/workoai'
const PORT = process.env.PORT || 3000;
mongoose.connect(DATABASE_URI)
    .then(() => {
        console.log("Database is connected")
    });


app.use(express.json());

app.use('/workai/user',userRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})