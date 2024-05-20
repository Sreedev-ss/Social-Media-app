
class CreateUser{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(user){
        const existingUser = await this.userRepository.findByUsername(user.username);
        if(existingUser){
            throw new Error("User already exists");
        }
        

        return this.userRepository.save(newUser);
    }

}

module.exports = CreateUser;