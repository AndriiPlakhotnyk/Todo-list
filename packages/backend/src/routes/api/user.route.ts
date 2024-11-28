import { Router } from 'express';
import { tryCatch } from '@/middlewares/common-middlewares';
import { UserController } from '@/controllers';
import { validateResetPassword } from '@/middlewares/user-middlewares';

const userRouter: Router = Router();
const userController = new UserController();

userRouter.put(
	'/reset-password',
	validateResetPassword,
	tryCatch(userController.resetPassword),
);

export default userRouter;
