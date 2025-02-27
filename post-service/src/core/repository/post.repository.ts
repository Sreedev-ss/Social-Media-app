import { Model } from "mongoose";
import { IPost } from "../entity/post.entity";
import { IPostRepository } from "../interfaces/IPostRepository";
import { IPostDocument } from "../../frameworks/database/models/postSchema";

class PostRepository implements IPostRepository {
    private readonly PostModel: Model<IPostDocument>;

    constructor(PostModel: Model<IPostDocument>) {
        this.PostModel = PostModel;
    }
    
    async save(post: IPost): Promise<any> {
        const createdPost = await this.PostModel.create(post);
        return createdPost;
    }
}

export default PostRepository;