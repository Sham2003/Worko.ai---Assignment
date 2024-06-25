

class UserDTO{
    constructor (data){
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.email = data.email;
        this.zipcode = data.zipcode;
        this.city = data.city;
    }
}


module.exports = UserDTO