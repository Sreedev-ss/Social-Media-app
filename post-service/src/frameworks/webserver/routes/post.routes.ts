import express from 'express';
import { expressCallBack } from '../express';
import PostController from '../../../adapters/controllers/postController';
import PostRepository from '../../../core/repository/post.repository';
import { PostModel } from '../../database/models/postSchema';
import CreatePost from '../../../core/useCase/createPost';

const router = express.Router();

const postRepository = new PostRepository(PostModel);
const createPost = new CreatePost(postRepository);
const postController = new PostController(createPost);

router.post('/createPost', expressCallBack(postController.addPost.bind(postController)));

export default router;