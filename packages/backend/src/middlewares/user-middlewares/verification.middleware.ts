import { Request, Response, NextFunction } from 'express';

export const validateVerification = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void | Response> => {
	const { verificationToken } = req.query;

	if (!verificationToken) {
		return res
			.status(400)
			.json({ message: 'Verification token is required.' });
	}

	next();
};
