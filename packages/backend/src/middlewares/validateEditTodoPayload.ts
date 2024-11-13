import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const todoSchema = Joi.object({
	title: Joi.string()
		.trim()
		.required()
		.messages({
			'string.empty': 'Title is required',
			'any.required': 'Title is required',
		})
		.optional(),
	description: Joi.string()
		.trim()
		.required()
		.messages({
			'string.empty': 'Description is required',
			'any.required': 'Description is required',
		})
		.optional(),
	isPrivate: Joi.boolean().optional(),
	isCompleted: Joi.boolean().optional(),
});

export const validateEditTodoPayload = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const { error } = todoSchema.validate(req.body, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);

		res.status(400).json({
			success: false,
			errors,
		});
	}

	next();
};
