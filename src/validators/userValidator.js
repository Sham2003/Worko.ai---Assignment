const joi = require('joi');


const validator = joi.object({
    id:joi.string(),
    name:joi.string(),
    age:joi.number().min(18).max(75),
    email:joi.string().email().message("Email - must be a valid email"),
    zipcode:joi.number().less(10**6).greater(10**5).message("Zip Code - must be a 6 digit code"),
    city:joi.string()
}).with('name',['age','email','zipcode','city'])


const userValidation = (req,res,next) => {
    const user = {
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        zipcode:req.body.zipcode,
        city:req.body.city
    }
    const {error} = validator.validate(user);
    if(error){
        res.status(406);
        return res.json(`Found error in ${error.message}`)
    }else{
        next();
    }
}

module.exports = userValidation;