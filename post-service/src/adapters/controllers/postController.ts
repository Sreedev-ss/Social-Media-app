import { Request, Response } from "express";
import CreatePost from "../../core/useCase/createPost";
import UploadMedia from "../../core/useCase/uploadMedia";
import { randomImageName } from "../../core/utils/randomName";
import Post from "../../core/entity/post.entity";
import { createError } from "../../core/utils/createError";

class PostController {
    private createPost: CreatePost;
    private uploadMedia: UploadMedia

    constructor(createPost: CreatePost, uploadMedia: UploadMedia) {
        this.createPost = createPost;
        this.uploadMedia = uploadMedia;
    }

    async addPost(req: Request, res: Response): Promise<any> {
        const { userId, content } = req.body;

        if(userId == undefined ){
            createError("BAD_REQUEST","UserId is needed")
        }
        if(content == ""){
            createError("BAD_REQUEST","Content cannot be empty")
        }

        const bucketName = process.env.BUCKET_NAME
        const key = randomImageName()
        const body = req.file?.buffer
        const contentType = req.file?.mimetype

        const newPost = new Post({userId, content, imageName:key});

       try {
         const uploadedFileDetails = await this.uploadMedia.execute(bucketName, key, body, contentType);
         console.log(uploadedFileDetails);
         const createdPost = await this.createPost.execute(newPost)
         return createdPost;
       } catch (error) {
            throw error;
       }

    }
}

export default PostController;