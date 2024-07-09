import { IPost } from "../entity/post.entity";
import { IPostRepository } from "../interfaces/IPostRepository";

class GetPosts {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async find(): Promise<Array<IPost> | null> {
        const data = await this.postRepository.findPost();
        return data;
    }

}

export default GetPosts;