import { Request, Response, NextFunction } from 'express';

type Repository<T> = {
	getById: (id: string) => Promise<T | null>;
};

export const isExist =
	<T>(repository: Repository<T>) =>
	async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | void> => {
		const { id } = req.params;

		try {
			const result = await repository.getById(id);

			if (!result) {
				return res.status(404).json({
					error: 'Resource not found',
				});
			}

			next();
		} catch (error) {
			return res.status(500).json({ error: 'Server error' });
		}
	};
