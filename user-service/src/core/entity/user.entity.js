class User{
    constructor({id,username,name,email,password,dob}){
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
    }

}

module.exports = User;