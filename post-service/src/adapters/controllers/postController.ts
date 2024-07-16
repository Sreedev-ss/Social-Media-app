import { Response } from "express";
import CreatePost from "../../core/useCase/createPost";
import UploadMedia from "../../core/useCase/uploadMedia";
import { randomImageName } from "../../core/utils/randomName";
import Post from "../../core/entity/post.entity";
import { createError } from "../../core/utils/createError";
import GetPosts from "../../core/useCase/getPosts";
import GetSignedMediaUrl from "../../core/useCase/getSignedMediaUrl";
import { RequestUser } from "../../frameworks/webserver/routes/index.routes";

class PostController {
    private createPost: CreatePost;
    private uploadMedia: UploadMedia;
    private getPost: GetPosts;
    private getSignedUrl: GetSignedMediaUrl;

    constructor(createPost: CreatePost, uploadMedia: UploadMedia, getPost: GetPosts, getSignedUrl: GetSignedMediaUrl) {
        this.createPost = createPost;
        this.uploadMedia = uploadMedia;
        this.getPost = getPost;
        this.getSignedUrl = getSignedUrl;
    }

    async addPost(req: RequestUser, res: Response): Promise<any> {
        const { content } = req.body;
        const userId = req.user
        if (userId == undefined) {
            createError("BAD_REQUEST", "UserId is needed")
        }
        if (content == "") {
            createError("BAD_REQUEST", "Content cannot be empty")
        }

        const bucketName = process.env.BUCKET_NAME
        const key = randomImageName()
        const body = req.file?.buffer
        const contentType = req.file?.mimetype

        const newPost = new Post({ userId, content, imageName: key });

        try {
            await this.uploadMedia.execute(bucketName, key, body, contentType);
            const createdPost = await this.createPost.execute(newPost)
            return createdPost;
        } catch (error) {
            throw error;
        }
    }

    async findPost(req: RequestUser, res: Response): Promise<any> {
        const userId = req.user
        const allPosts = await this.getPost.find(userId);
        const bucketName = process.env.BUCKET_NAME
        try {
            for (const post of allPosts) {
                const url = await this.getSignedUrl.find(bucketName, post.imageName);
                post.imageName = url
            }
            return allPosts;
        } catch (error) {
            throw error
        }

    }
}

export default PostController;