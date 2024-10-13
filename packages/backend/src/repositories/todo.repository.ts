import { Todo } from '@prisma/client';
import prisma from '../config/database';

export class TodoRepository {
	async getAllTodos(): Promise<Todo[]> {
		return prisma.todo.findMany();
	}

	async getById(id: string): Promise<Todo | null> {
		return prisma.todo.findUnique({ where: { id } });
	}

	async createTodo(data: Omit<Todo, 'id'>): Promise<Todo> {
		const { title, description, isPrivate, isCompleted, userId } = data;
		return prisma.todo.create({
			data: {
				title,
				description,
				isPrivate,
				isCompleted,
				user: {
					connect: { id: userId },
				},
			},
		});
	}

	async updateTodo(id: string, data: Partial<Todo>): Promise<Todo | null> {
		return prisma.todo.update({ where: { id }, data });
	}

	async deleteTodo(id: string): Promise<Todo | null> {
		return prisma.todo.delete({ where: { id } });
	}
}
