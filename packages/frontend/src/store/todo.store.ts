import { create } from 'zustand';
import { Todo } from '~shared/models';
import { todoService } from '~shared/services';

interface TodoState {
	todo: Todo | null;
	todos: Todo[];
	loading: boolean;
	error: string | null;
	getTodos: () => Promise<void>;
	getTodoById: (id: string) => Promise<Todo | null>;
	addTodo: (todo: Omit<Todo, 'id'>) => Promise<void>;
	editTodo: (id: string, todo: Partial<Todo>) => Promise<void>;
	deleteTodo: (id: string) => Promise<void>;
	toggleTodoPrivate: (id: string, isPrivate: boolean) => Promise<void>;
	toggleTodoComplection: (
		id: string,
		isComplection: boolean,
	) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
	todo: null,
	todos: [],
	loading: false,
	error: null,

	getTodos: async (): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const todos = await todoService.getTodos();
			set({ todos, loading: false });
		} catch (error) {
			set({ loading: false, error: 'Failed to load todos' });
		}
		return;
	},

	getTodoById: async (id: string): Promise<Todo | null> => {
		set({ loading: true, error: null });
		try {
			const todo = await todoService.getTodoById(id);
			set({ loading: false });
			return todo;
		} catch (error) {
			set({ loading: false, error: 'Failed to load todo (getTodoById)' });
			return null;
		}
	},

	addTodo: async (todo: Omit<Todo, 'id'>): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const newTodo = await todoService.addTodo(todo);
			set((state) => ({
				todos: [...state.todos, newTodo],
				loading: false,
			}));
		} catch (error) {
			set({ loading: false, error: 'Failed add todo' });
		}
	},

	editTodo: async (id: string, todo: Partial<Todo>): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const updateTodo = await todoService.updateTodo(id, todo);
			set((state) => ({
				todos: state.todos.map((todo) =>
					todo.id === updateTodo.id ? updateTodo : todo,
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false, error: 'Failed to update todo' });
		}
	},

	deleteTodo: async (id: string): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const removeTodo = await todoService.deleteTodo(id);
			set((state) => ({
				todos: state.todos.filter((todo) => todo.id !== removeTodo.id),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false, error: 'Failed to delete todo' });
		}
	},

	toggleTodoPrivate: async (
		id: string,
		isPrivate: boolean,
	): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const updatedToggle = await todoService.updateTodo(id, {
				isPrivate,
			});
			set((state) => ({
				todos: state.todos.map((todo) =>
					todo.id === updatedToggle.id ? updatedToggle : todo,
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false, error: 'Failed to toggle private' });
		}
	},

	toggleTodoComplection: async (
		id: string,
		isCompleted: boolean,
	): Promise<void> => {
		set({ loading: true, error: null });
		try {
			const updatedToggle = await todoService.updateTodo(id, {
				isCompleted,
			});
			set((state) => ({
				todos: state.todos.map((todo) =>
					todo.id === updatedToggle.id ? updatedToggle : todo,
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false, error: 'Failed to toggle complete' });
		}
	},
}));
