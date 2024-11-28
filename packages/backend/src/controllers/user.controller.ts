import { Request, Response } from 'express';
import { UserService } from '@/services';

export class UserController {
	private readonly userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	resetPassword = async (req: Request, res: Response): Promise<Response> => {
		const result = await this.userService.changePassword(req.body);
		if (!result) {
			return res.status(401).json({
				success: false,
			});
		}
		return res.status(200).json({
			success: true,
		});
	};
}
