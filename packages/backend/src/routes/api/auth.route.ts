import { Router } from 'express';
import { checkIsVerifyUser } from '@/middlewares/user-middlewares';
import {
	validateRegistrationPayload,
	validateLoginPayload,
	validateVerification,
} from '@/middlewares/user-middlewares';
import { AuthController } from '../../controllers';
import { tryCatch } from '@/middlewares/common-middlewares';

const authRouter: Router = Router();
const authController = new AuthController();

authRouter.post(
	'/register',
	validateRegistrationPayload,
	tryCatch(authController.registration),
);
authRouter.get(
	'/verification',
	validateVerification,
	tryCatch(authController.confirmEmail),
);
authRouter.post(
	'/login',
	validateLoginPayload,
	checkIsVerifyUser,
	tryCatch(authController.login),
);
authRouter.post(
	'/verify-recover',
	tryCatch(authController.sendMailForRecoverPassword),
);
authRouter.post('/recover-password', tryCatch(authController.recoverPassword));
authRouter.post('/re-verification', tryCatch(authController.reVerification));
export default authRouter;
