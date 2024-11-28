import { Request } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedData extends JwtPayload {
	id?: string;
	email?: string;
	username: string;
	hash: string;
	salt: string;
}

export function extractTokenData(req: Request): DecodedData | null {
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) {
		return null;
	}

	try {
		const data = jwt.verify(
			token,
			process.env.JWT_SECRET as string,
		) as DecodedData;
		return data;
	} catch (error) {
		console.error('Invalid token:');
		return null; // Невірний токен
	}
}
