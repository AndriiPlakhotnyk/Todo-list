import { Request, Response, NextFunction } from 'express';
import { loginSchema } from './validation-schemas';

export const validateLoginPayload = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> => {
	try {
		await loginSchema.validate(req.body, { abortEarly: false });
		next();
	} catch (errors) {
		return res.status(400).json({
			success: false,
			errors,
		});
	}
};
