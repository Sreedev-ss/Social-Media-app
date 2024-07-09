import { IPost } from "../entity/post.entity";

export interface IPostRepository {
    save(post: IPost): Promise<any>;
}