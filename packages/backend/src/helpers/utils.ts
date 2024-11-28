import * as crypto from 'crypto';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateHashedString = (length: number = 16): string =>
	crypto.randomBytes(length).toString('hex');

const hashPassword = (password: string, salt: string): string => {
	const hash = crypto.createHmac('sha256', salt);
	hash.update(password);
	return hash.digest('hex');
};

export const comparePassword = (
	password: string,
	salt: string,
	hashedPassword: string,
): boolean => {
	const hashedInputPassword = hashPassword(password, salt);
	return hashedInputPassword === hashedPassword;
};

export const createHashedPassword = (
	password: string,
): { salt: string; hashedPassword: string } => {
	const salt = generateHashedString();
	const hashedPassword = hashPassword(password, salt);
	return { salt, hashedPassword };
};

export const generateJwt = (payload: Pick<User, 'id' | 'username'>): string => {
	if (!process.env.JWT_SECRET) {
		throw new Error('JWT_SECRET is not defined in environment variables');
	}
	return sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
