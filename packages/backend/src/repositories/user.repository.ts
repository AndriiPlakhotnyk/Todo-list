import { User } from '@prisma/client';
import prisma from '@/config/database';

export class UserRepository {
	async save(
		payload: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
	): Promise<Omit<User, 'hash' | 'salt'> | null> {
		const { username, ...updates } = payload;
		const user = await prisma.user.upsert({
			where: { username },
			update: {
				...updates,
				updatedAt: new Date(),
			},
			create: {
				username: payload.username ?? '',
				email: payload.email ?? '',
				hash: payload.hash ?? '',
				salt: payload.salt ?? '',
				verificationToken: payload.verificationToken ?? '',
				isVerified: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		});

		return user
			? {
					id: user.id,
					username: user.username,
					email: user.email,
					verificationToken: user.verificationToken,
					isVerified: user.isVerified,
					createdAt: user.createdAt,
					updatedAt: user.updatedAt,
				}
			: null;
	}

	async findUserByVerificationToken(
		token: string,
	): Promise<Pick<User, 'username'> | null> {
		const user = await prisma.user.findUnique({
			where: {
				verificationToken: token,
			},
		});

		if (!user) {
			return null;
		}

		return {
			username: user.username,
		};
	}

	async getUserByEmail(
		email: string,
	): Promise<Pick<
		User,
		| 'id'
		| 'username'
		| 'email'
		| 'hash'
		| 'salt'
		| 'isVerified'
		| 'verificationToken'
	> | null> {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		return user
			? {
					id: user.id,
					username: user.username,
					email: user.email,
					hash: user.hash,
					salt: user.salt,
					isVerified: user.isVerified,
					verificationToken: user.verificationToken,
				}
			: null;
	}

	async getById(id: string): Promise<Pick<User, 'hash' | 'salt'> | null> {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});

		return user
			? {
					hash: user.hash,
					salt: user.salt,
				}
			: null;
	}

	async isExistUserByUsername(username: string): Promise<boolean> {
		const user = await prisma.user.findUnique({
			where: {
				username,
			},
		});

		return user !== null;
	}

	async isExistUserByEmail(email: string): Promise<boolean> {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		return user !== null;
	}
}
