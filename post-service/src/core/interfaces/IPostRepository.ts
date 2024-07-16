import { IPost } from "../entity/post.entity";

export interface IPostRepository {
    save(post: IPost): Promise<any>;
    findPost(userId: string | null):Promise<Array<IPost> | null>;
}