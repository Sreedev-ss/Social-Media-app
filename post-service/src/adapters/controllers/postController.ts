import { Request, Response } from "express";
import CreatePost from "../../core/useCase/createPost";

class PostController {
    private createPost: CreatePost;

    constructor(createPost: CreatePost) {
        this.createPost = createPost;
    }

    async addPost(req: Request, res: Response): Promise<any> {
        
    }
}

export default PostController;