import { Request, Response } from 'express';
import { AuthService } from '../services';
import { UserRepository } from '../repositories';

export class AuthController {
	private readonly authService: AuthService;

	private readonly userRepository: UserRepository;

	constructor() {
		this.authService = new AuthService();
		this.userRepository = new UserRepository();
	}

	registration = async (req: Request, res: Response): Promise<Response> => {
		await this.authService.signUp(req.body);

		return res.json({
			success: true,
		});
	};

	confirmEmail = async (req: Request, res: Response): Promise<Response> => {
		const { verificationToken } = req.query;

		const result = await this.authService.isFindByVerifyToken(
			String(verificationToken),
		);

		if (result) {
			return res.status(200).json({
				succes: true,
			});
		}
		return res
			.status(404)
			.json({ success: false, message: 'Invalid or expired token' });
	};

	login = async (req: Request, res: Response): Promise<Response> => {
		const auth = await this.authService.signIn(req.body);
		if (auth) {
			return res.status(200).json(auth);
		}

		return res.status(401).json({
			succes: false,
			error: 'Incorrect email or password',
		});
	};

	sendMailForRecoverPassword = async (
		req: Request,
		res: Response,
	): Promise<void | Response> => {
		const user = await this.authService.sendRecoveryMail(req.body.email);
		if (user) {
			res.status(200).json({
				success: true,
			});
		}
		return res.status(401).json({
			success: false,
			error: 'Invalid email',
		});
	};

	recoverPassword = async (
		req: Request,
		res: Response,
	): Promise<void | Response> => {
		const result = await this.authService.recoverPassword(req.body);
		if (!result) {
			return res.status(401).json({
				success: false,
			});
		}
		return res.status(200).json({
			success: true,
		});
	};

	reVerification = async (
		req: Request,
		res: Response,
	): Promise<void | Response> => {
		const verification = await this.authService.reVerification(
			req.body.email,
		);
		if (verification) {
			return res.json({
				success: true,
			});
		}
		return res.status(401).json({
			success: false,
			error: 'Invalid email',
		});
	};
}
