const userDAO = require("../daos/userDAO");
const UserDTO = require("../dtos/userDto");


const UserService = {
    getUsers: async function() {
        const users = await userDAO.getAllUsers();

        if(!users){
            return [];
        }
        return users.map((user) => new UserDTO(user));
    },
    getUser: async function(id){
        const user = await userDAO.getUser(id);
        if (user){
            return new UserDTO(user);
        }
        return null;
    },
    createUser:async function(user){
        return await userDAO.createUser(user);
    },
    updateUser:async function(id,user){
        return await userDAO.updateUser(id,user);
    },
    deleteUser:async function(id){
        return await userDAO.deleteUser(id);
    }
}

module.exports = UserService;