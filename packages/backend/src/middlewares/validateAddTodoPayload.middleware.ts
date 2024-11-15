import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const todoSchema = Joi.object({
	title: Joi.string().trim().required().messages({
		'string.empty': 'Title is required',
		'any.required': 'Title is required',
	}),
	description: Joi.string().trim().required().messages({
		'string.empty': 'Description is required',
		'any.required': 'Description is required',
	}),
	isPrivate: Joi.boolean().optional(),
	isCompleted: Joi.boolean().optional(),
	userId: Joi.string().required().messages({
		'string.empty': 'User ID is required',
		'any.required': 'User ID is required',
	}),
});

export const validateAddTodoPayload = (
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
