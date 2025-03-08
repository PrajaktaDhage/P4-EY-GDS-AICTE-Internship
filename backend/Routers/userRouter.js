import express from 'express';
import { loginControllers, registerControllers, setAvatarController } from '../controllers/userController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.route("/register").post(registerControllers);
router.route("/login").post(loginControllers);
router.route("/setAvatar/:id").post(authenticate, setAvatarController);

export default router;