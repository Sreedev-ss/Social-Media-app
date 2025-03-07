import express from 'express';
import UserRepository from '../../../core/repository/user.repository';
import CreateUser from '../../../core/useCase/createUser';
import UserController from '../../../adapters/controllers/user.controller';
import { UserModel } from '../../database/models/userSchema';
import { expressCallBack } from '../express';
import { EncryptionService } from '../../utils/bcrypt';
import LoginUser from '../../../core/useCase/loginUser';
import { authenticate, checkLoggedIn, isLoggedIn, } from '../../middlewares/authenticate';
import { RequestUser } from './index.routes';

const router = express.Router();
const encryptionService = new EncryptionService();

const userRepository = new UserRepository(UserModel, encryptionService);
const createUser = new CreateUser(userRepository);
const loginUser = new LoginUser(userRepository);
const userController = new UserController(createUser, loginUser);

router.post('/signup', expressCallBack(userController.signup.bind(userController)));
router.post('/login', isLoggedIn, checkLoggedIn, expressCallBack(userController.logUser.bind(userController)));
router.post('/logout', expressCallBack(userController.logoutUser.bind(userController)))

router.get('/', authenticate, (req: RequestUser, res) => {
    res.send('hi')
})

export default router;