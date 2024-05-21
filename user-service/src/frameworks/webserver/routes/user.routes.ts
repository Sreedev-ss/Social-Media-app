import express from 'express';

import UserRepository from '../../../core/repository/user.repository';
import CreateUser from '../../../core/useCase/createUser';
import UserController from '../../../adapters/controllers/user.controller';
import { UserModel } from '../../database/models/userSchema';
import { expressCallBack } from '../express';

const router = express.Router();

const userRepository = new UserRepository(UserModel);
const createUser = new CreateUser(userRepository);
const userController = new UserController(createUser);

router.post('/signup', expressCallBack(userController.signup.bind(userController)));

export default router;