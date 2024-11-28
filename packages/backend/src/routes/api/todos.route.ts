import { TodoController } from '@/controllers/todo.controller';
import { tryCatch } from '@/middlewares/common-middlewares';
import {
	checkTodoAccess,
	isExist,
	isTodoOwner,
	validateAddTodoPayload,
	validateEditTodoPayload,
} from '@/middlewares/todo-middlewares';
import { TodoRepository } from '@/repositories';
import { Router } from 'express';

const todosRouter: Router = Router();
const todoRepository = new TodoRepository();
const todoController = new TodoController();

todosRouter.get('/', tryCatch(todoController.getTodos));
todosRouter.get(
	'/:id',
	isExist(todoRepository),
	checkTodoAccess,
	tryCatch(todoController.getTodo),
);
todosRouter.post('/', validateAddTodoPayload, tryCatch(todoController.addTodo));
todosRouter.put(
	'/:id',
	validateEditTodoPayload,
	isExist(todoRepository),
	isTodoOwner,
	tryCatch(todoController.editTodo),
);
todosRouter.delete(
	'/:id',
	isExist(todoRepository),
	isTodoOwner,
	tryCatch(todoController.removeTodo),
);

export default todosRouter;
