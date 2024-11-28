import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '@/repositories';

const userRepository = new UserRepository();

export const checkIsVerifyUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> => {
	const user = await userRepository.getUserByEmail(req.body.email);
	if (!user?.isVerified) {
		return res.status(403).json({
			success: false,
			message: 'User is not verified',
		});
	}

	next();
};
