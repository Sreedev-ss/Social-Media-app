import { IUser } from "../entity/user.entity";


export interface IUserRepository {
    save(user: IUser): Promise<IUser | null>;
    findByUsername(username: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    userVerification(user: IUser): Promise<IUser | null>;
}
