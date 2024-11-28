import { UserRepository } from '../repositories';
import {
	IRegistrationParams,
	IUserLoginParams,
	IUserRecoverPassword,
} from '../types';
import {
	comparePassword,
	createHashedPassword,
	generateHashedString,
	generateJwt,
} from '../helpers';
import { EmailService } from './email.service';

export class AuthService {
	private readonly userRepository: UserRepository;

	private readonly emailService: EmailService;

	constructor() {
		this.userRepository = new UserRepository();
		this.emailService = new EmailService();
	}

	async signUp(params: IRegistrationParams): Promise<void> {
		const { salt, hashedPassword } = createHashedPassword(params.password);
		const token = generateHashedString();
		await this.emailService.sendVerificationMail(params.email, token);

		await this.userRepository.save({
			email: params.email,
			username: params.username,
			hash: hashedPassword,
			salt,
			verificationToken: token,
		});
	}

	async isFindByVerifyToken(token: string): Promise<boolean> {
		const user =
			await this.userRepository.findUserByVerificationToken(token);

		if (user) {
			await this.userRepository.save({
				username: user.username,
				isVerified: true,
				verificationToken: null,
			});

			return true;
		}

		return false;
	}

	async signIn(
		params: IUserLoginParams,
	): Promise<{ token: string; username: string } | null> {
		const { email, password } = params;
		const user = await this.userRepository.getUserByEmail(email);
		if (user) {
			const isValidPassword = comparePassword(
				password,
				user.salt,
				user.hash,
			);
			return isValidPassword
				? {
						token: generateJwt({
							id: user.id,
							username: user.username,
						}),
						username: user.username,
					}
				: null;
		}

		return null;
	}

	async sendRecoveryMail(email: string): Promise<boolean> {
		const user = await this.userRepository.getUserByEmail(email);
		if (user) {
			await this.emailService.sendRecoveryMail(email);
			return true;
		}
		return false;
	}

	async recoverPassword(params: IUserRecoverPassword): Promise<boolean> {
		const { email, newPassword } = params;
		const user = await this.userRepository.getUserByEmail(email);
		if (user) {
			await this.userRepository.save({
				username: user.username,
				hash: newPassword,
			});

			return true;
		}

		return false;
	}

	async reVerification(email: string): Promise<void | boolean> {
		const user = await this.userRepository.getUserByEmail(email);
		if (user) {
			const token = user.verificationToken;
			if (token) {
				await this.emailService.sendVerificationMail(email, token);
				return true;
			}
			return false;
		}
		return false;
	}
}
