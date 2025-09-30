import express from 'express';
import UserController from '../controllers/user.controller.js';
import { jwtCheck } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', jwtCheck, UserController.createCurrentUser);

export default router;
