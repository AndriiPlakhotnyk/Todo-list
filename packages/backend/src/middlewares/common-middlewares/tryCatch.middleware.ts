import { Request, Response, NextFunction } from 'express';

type AsyncMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void | Response>;

export const tryCatch =
	(fn: AsyncMiddleware) =>
	(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | void> =>
		Promise.resolve(fn(req, res, next)).catch((error) => {
			if (res.headersSent) {
				return next(error);
			}
			const response = {
				success: false,
				error: error.message || 'An unexpected error occurred',
			};
			res.status(500).json(response);
		});
