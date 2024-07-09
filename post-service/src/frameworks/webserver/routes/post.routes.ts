import express from 'express';
import { expressCallBack } from '../express';
import PostController from '../../../adapters/controllers/postController';
import PostRepository from '../../../core/repository/post.repository';
import { PostModel } from '../../database/models/postSchema';
import CreatePost from '../../../core/useCase/createPost';
import { upload } from '../../middlewares/multer';
import UploadMedia from '../../../core/useCase/uploadMedia';

const router = express.Router();

const postRepository = new PostRepository(PostModel);
const createPost = new CreatePost(postRepository);
const uploadMedia = new UploadMedia()
const postController = new PostController(createPost,uploadMedia);

router.post('/createPost', upload.single('image'), expressCallBack(postController.addPost.bind(postController)));

export default router;