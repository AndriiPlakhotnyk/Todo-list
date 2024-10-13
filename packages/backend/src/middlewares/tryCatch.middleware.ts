import { Request, Response, NextFunction } from 'express';

type AsyncMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

export const tryCatch =
	(fn: AsyncMiddleware) =>
	(req: Request, res: Response, next: NextFunction): void => {
		Promise.resolve(fn(req, res, next)).catch((error) => {
			const response = {
				success: false,
				error: error.message || 'An unexpected error occured',
			};
			res.status(500).json(response);
		});
	};
