import { Request, Response, NextFunction } from 'express';
import prisma from '@/config/database';

export const isTodoOwner = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> => {
	const { id } = req.params;
	const user = res.locals.user;
	const todo = await prisma.todo.findUnique({
		where: { id },
	});

	if (todo) {
		if (todo.userId !== user.id) {
			return res.status(403).json({ message: 'Access denied' });
		}
	}

	next();
};
