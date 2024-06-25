const express = require('express');
const userValidation = require('../validators/userValidator');
const UserService = require('../services/userService');
const UserDTO = require('../dtos/userDto');


const userRouter = express.Router();


userRouter.get('/',async function (req,res,next){
    const users = await UserService.getUsers();
    res.json(users);
});

userRouter.get('/:userId',async function (req,res,next){
    const {userId} = req.params;
    const user= await UserService.getUser(userId);
    if(user){
        res.status(200);
        res.json(user);
    }else{
        res.status(500);
        res.json("Cannot Find User with id "+userId)
    }
});

userRouter.post('/',userValidation,async function (req,res,next){
    var user = new UserDTO(req.body);
    const userId = await UserService.createUser(user);
    if (userId){
        res.json(userId);
    }else{
        res.status(501).send("Failure to create user");
    }
});

userRouter.put('/',userValidation,async function (req,res,next){
    var userid = req.body.id;
    const payload = {
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        zipcode:req.body.zipcode,
        email:req.body.email
    }
    const result = await UserService.updateUser(userid,payload);
    if(result){
        res.status(200);
        res.json("OK SUCCESS");
    }else{
        res.status(500);
        res.json("FAILURE");
    }
});

userRouter.patch('/',userValidation,async function (req,res,next){
    var userid = req.body.id;
    const payload = {
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        zipcode:req.body.zipcode,
        email:req.body.email
    }
    const result = await UserService.updateUser(userid,payload);
    if(result){
        res.status(200);
        res.json("OK SUCCESS");
    }else{
        res.status(500);
        res.json("FAILURE");
    }
});

userRouter.delete('/',async function (req,res,next){
    const {id} = req.body;
    const result = await UserService.deleteUser(id);
    if(result){
        res.status(200);
        res.json("OK SUCCESS");
    }else{
        res.status(500);
        res.json("FAILURE");
    }
});

module.exports = userRouter;