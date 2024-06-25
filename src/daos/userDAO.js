
const UserModel = require('../models/userModel');

function generateId(){
    let ID = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 12; i++) {
        ID += characters.charAt(Math.floor(Math.random()*36));
    }
    return ID;
}

class UserDAO{
    async createUser(userDetails){
        try {
            const user = new UserModel();
            user.id = generateId();
            user.name = userDetails.name;
            user.city = userDetails.city;
            user.email = userDetails.email;
            user.age = userDetails.age;
            user.zipcode = userDetails.zipcode;
            await user.save();
            return user.id;
        } catch (error) {
            return null;
        }
    }

    async getAllUsers(){
        var users = await UserModel.find({});
        return users;
    }

    async getUser(userId) {
        try {
            var user = await UserModel.findOne({id:userId});
            return user;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateUser(userId,payload){
        try {
            var result = await UserModel.updateOne({id:userId},payload);
            if (result){
                return true;
            }
        } catch(err){
            return false;
        }
        return false;
    }

    async deleteUser(userId){
        try {
            var user = await UserModel.findOne({id:userId});
            if (user != null){
                await UserModel.deleteOne({id:userId});
                return true;
            }
        } catch (error) {
            return false;
        }
        return false;
    }
}
const userDAO = new UserDAO();
module.exports = userDAO;