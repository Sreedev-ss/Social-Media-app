import { IPost } from "../entity/post.entity";
import { IPostRepository } from "../interfaces/IPostRepository";

class CreatePost {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(post: IPost): Promise<object | null> {
        const data = await this.postRepository.save(post)
        return data;
    }

}

export default CreatePost;