import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '@/repositories';
import { registrationSchema } from './validation-schemas';

const userRepository = new UserRepository();

export const validateRegistrationPayload = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> => {
	try {
		await registrationSchema.validate(req.body, { abortEarly: false });

		const { email, username } = req.body;

		const [isExistEmail, isExistUsername] = await Promise.all([
			userRepository.isExistUserByEmail(email),
			userRepository.isExistUserByUsername(username),
		]);

		if (isExistEmail) {
			return res.status(400).json({
				success: false,
				error: 'User with this email already exists, you can use a different one.',
			});
		}

		if (isExistUsername) {
			return res.status(400).json({
				success: false,
				error: 'User with this username already exists, please choose a different one.',
			});
		}

		next();
	} catch (errors) {
		return res.status(400).json({
			success: false,
			errors,
		});
	}
};
