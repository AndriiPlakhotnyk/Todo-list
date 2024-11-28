import { Request, Response, NextFunction } from 'express';
import { resetPasswordSchema } from './validation-schemas';

export const validateResetPassword = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> => {
	try {
		await resetPasswordSchema.validate(req.body, { abortEarly: false });
		next();
	} catch (errors) {
		return res.status(400).json({
			success: false,
			errors,
		});
	}
};
