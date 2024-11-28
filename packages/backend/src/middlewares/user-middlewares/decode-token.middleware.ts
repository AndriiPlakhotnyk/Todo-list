import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const decodeToken = (
	req: Request,
	res: Response,
	next: NextFunction,
): void | Response => {
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) {
		return res.status(401).json({
			success: false,
			message: 'Token not provided',
		});
	}

	const decoded = jwt.verify(
		token,
		process.env.JWT_SECRET as string,
	) as JwtPayload;
	res.locals.user = decoded;
	next();
};
