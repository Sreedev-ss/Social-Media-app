class UserRepository{
    constructor(UserModel){
        this.UserModel = UserModel;
    }
    async findByUsername(username){
        const user = await this.UserModel.findOne({username});
        return user;
    }

    async save(user){
        await this.UserModel.save(user);
        return user;
    }
}

module.exports = UserRepository;