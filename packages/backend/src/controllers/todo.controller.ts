import { Request, Response } from 'express';
import { Todo } from '@prisma/client';
import { TodoService } from '@/services';

export class TodoController {
	private readonly todoService: TodoService;

	constructor() {
		this.todoService = new TodoService();
	}

	getTodos = async (req: Request, res: Response): Promise<void> => {
		const todos = await this.todoService.getTodos(res.locals.user.id);
		res.json(todos);
	};

	getTodo = async (req: Request, res: Response): Promise<void | Response> => {
		const user = res.locals.user;
		const todo = await this.todoService.getTodo(req.params.id);
		const isOwner = todo?.userId === user.id;
		if (isOwner) {
			return res.json(todo);
		}
		return res.status(403).json({
			succes: false,
			message: 'Private todo is forbidden',
		});
	};

	addTodo = async (req: Request, res: Response): Promise<void> => {
		const { title, description, isPrivate, isCompleted, ...other } =
			req.body;
		const userId = res.locals.user.id;
		const todo: Omit<Todo, 'id'> = await this.todoService.addTodo({
			title,
			description,
			isPrivate,
			isCompleted,
			userId,
			...other,
		});
		res.status(201).json(todo);
	};

	editTodo = async (req: Request, res: Response): Promise<void> => {
		const { title, description, isPrivate, isCompleted } = req.body;
		const todo = await this.todoService.editTodo(req.params.id, {
			title,
			description,
			isPrivate,
			isCompleted,
		});

		res.json(todo);
	};

	removeTodo = async (req: Request, res: Response): Promise<void> => {
		const removeTodo = await this.todoService.removeTodo(req.params.id);
		res.status(201).json(removeTodo);
	};
}
