const express = require('express')
const router = express.Router()

const UserRepository = require('../../../core/repository/user.repository')
const CreateUser = require('../../../core/useCase/createUser')
const UserController = require('../../../adapters/controllers/user.controller')
const UserModel = require('../../database/models/userSchema')

const userRepository = new UserRepository(UserModel);
const createUser = new CreateUser(userRepository);
const userController = new UserController(createUser);

router.post('/signup',userController.signup.bind(userController))


module.exports = router;