import { Response, Request } from 'express';
import { Todo } from '@prisma/client';
import { TodoService } from '@/services';

export class TodoController {
	private readonly todoService: TodoService;

	constructor() {
		this.todoService = new TodoService();
	}

	getTodos = async (req: Request, res: Response): Promise<void> => {
		const todos = await this.todoService.getTodos();
		res.json(todos);
	};

	getTodo = async (req: Request, res: Response): Promise<void> => {
		const todo = await this.todoService.getTodo(req.params.id);
		res.json(todo);
	};

	addTodo = async (req: Request, res: Response): Promise<void> => {
		const { title, description, isPrivate, isCompleted, userId, ...other } =
			req.body;
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
		const todo = this.todoService.editTodo(req.params.id, {
			title,
			description,
			isPrivate,
			isCompleted,
		});

		res.json(todo);
	};

	removeTodo = async (req: Request, res: Response): Promise<void> => {
		await this.todoService.removeTodo(req.params.id);
		res.status(204).send();
	};
}
