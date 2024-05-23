import { IUser } from "../entity/user.entity";
import { IUserRepository } from "../interfaces/IUserRepository"

class LoginUser {
    private userRepository:IUserRepository
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository

    }

    async execute(user:IUser):Promise<object | null>{
        const data = await this.userRepository.userVerification(user);
        return data;
    }
}

export default LoginUser;