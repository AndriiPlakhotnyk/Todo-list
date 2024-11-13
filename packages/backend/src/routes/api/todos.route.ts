import { TodoController } from '@/controllers/todo.controller';
import { isExist } from '@/middlewares/isExist.middleware';
import { tryCatch } from '@/middlewares/tryCatch.middleware';
import { validateAddTodoPayload } from '@/middlewares/validateAddTodoPayload.middleware';
import { validateEditTodoPayload } from '@/middlewares/validateEditTodoPayload';
import { TodoRepository } from '@/repositories';
import { Router } from 'express';

const todosRouter: Router = Router();
const todoRepository = new TodoRepository();
const todoController = new TodoController();

todosRouter.get('/', tryCatch(todoController.getTodos));
todosRouter.get(
	'/:id',
	isExist(todoRepository),
	tryCatch(todoController.getTodo),
);
todosRouter.post('/', validateAddTodoPayload, tryCatch(todoController.addTodo));
todosRouter.put(
	'/:id',
	validateEditTodoPayload,
	isExist(todoRepository),
	tryCatch(todoController.editTodo),
);
todosRouter.delete(
	'/:id',
	isExist(todoRepository),
	tryCatch(todoController.removeTodo),
);

export default todosRouter;
