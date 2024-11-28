import { UserRepository } from '@/repositories/user.repository';
import { IUserResetPassword } from '../types';
import { comparePassword, createHashedPassword } from '../helpers';

export class UserService {
	private readonly userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async changePassword(params: IUserResetPassword): Promise<boolean> {
		const { email, oldPassword, newPassword } = params;
		const user = await this.userRepository.getUserByEmail(email);
		if (user) {
			const isValidPassword = comparePassword(
				oldPassword,
				user.salt,
				user.hash,
			);
			if (isValidPassword) {
				const { hashedPassword, salt } =
					createHashedPassword(newPassword);
				await this.userRepository.save({
					username: user.username,
					hash: hashedPassword,
					salt,
				});

				return true;
			}
		}
		return false;
	}
}
