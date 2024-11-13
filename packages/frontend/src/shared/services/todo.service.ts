import HttpService from './http';
import { Todo } from '../models';

class TodoService extends HttpService {
	constructor() {
		super();
	}
	getTodos(config = {}): Promise<Todo[]> {
		return this.get<Todo[]>('todos', config);
	}

	getTodoById(id: string, config = {}): Promise<Todo> {
		return this.get<Todo>(`todos/${id}`, config);
	}

	addTodo(todo: Omit<Todo, 'id'>, config = {}): Promise<Todo> {
		return this.post<Todo>('todos', todo, config);
	}

	updateTodo(id: string, todo: Partial<Todo>, config = {}): Promise<Todo> {
		return this.put<Todo>(`todos/${id}`, todo, config);
	}

	deleteTodo(id: string, config = {}): Promise<Todo> {
		return this.delete<Todo>(`todos/${id}`, config);
	}
}

export const todoService = new TodoService();
