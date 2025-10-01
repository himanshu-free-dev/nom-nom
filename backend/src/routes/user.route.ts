import express from 'express';
import UserController from '../controllers/user.controller.js';
import { jwtCheck, jwtParse } from '../middlewares/auth.middleware.js';
import { validateMyUserRequest } from '../middlewares/validation.middleware.js';

const router = express.Router();

router.post('/', jwtCheck, UserController.createCurrentUser);
router.put(
    '/',
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    UserController.updateCurrentUser
);

export default router;
