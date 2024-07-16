import express from 'express';
import { expressCallBack } from '../express';
import PostController from '../../../adapters/controllers/postController';
import PostRepository from '../../../core/repository/post.repository';
import { PostModel } from '../../database/models/postSchema';
import CreatePost from '../../../core/useCase/createPost';
import { upload } from '../../middlewares/multer';
import UploadMedia from '../../../core/useCase/uploadMedia';
import GetPosts from '../../../core/useCase/getPosts';
import GetSignedMediaUrl from '../../../core/useCase/getSignedMediaUrl';
import { authenticate } from '../../middlewares/authenticate';

const router = express.Router();

const postRepository = new PostRepository(PostModel);
const createPost = new CreatePost(postRepository);
const getPost = new GetPosts(postRepository);
const uploadMedia = new UploadMedia()
const getSignedUrl = new GetSignedMediaUrl()
const postController = new PostController(createPost, uploadMedia, getPost, getSignedUrl);

router.post('/createPost', authenticate, upload.single('image'), expressCallBack(postController.addPost.bind(postController)));
router.get('/getPost', authenticate, expressCallBack(postController.findPost.bind(postController)));

export default router;