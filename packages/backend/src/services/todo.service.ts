import { Todo } from '@prisma/client';
import { TodoRepository } from '@/repositories';

export class TodoService {
	private todoRepository: TodoRepository;

	constructor() {
		this.todoRepository = new TodoRepository();
	}

	async getTodos(): Promise<Todo[]> {
		return this.todoRepository.getAllTodos();
	}

	async getTodo(id: string): Promise<Todo | null> {
		return this.todoRepository.getById(id);
	}

	async addTodo(data: Omit<Todo, 'id'>): Promise<Todo> {
		return this.todoRepository.createTodo(data);
	}

	async editTodo(id: string, data: Partial<Todo>): Promise<Todo | null> {
		return this.todoRepository.updateTodo(id, data);
	}

	async removeTodo(id: string): Promise<Todo | null> {
		return this.todoRepository.deleteTodo(id);
	}
}
