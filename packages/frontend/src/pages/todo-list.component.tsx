import React, { useState } from 'react';
import TodoContainer from '~shared/components/todo/TodoContainer/todo-container.component';
import TodoFormModal from '../shared/components/form/todo-addform.component';
import { useTodoStore } from '~store/todo.store';
import { useNavigate } from 'react-router-dom';
import { Todo } from '~shared/models';
import { ROUTER_KEYS } from '~shared/keys';
import {
	TodoListHeader,
	TodoListTitle,
	AddTodoButton,
} from './todo-list.styles';

const TodoListPage: React.FC = () => {
	const { todos, getTodos, addTodo, deleteTodo, toggleTodoComplection } =
		useTodoStore();

	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = (): void => setIsModalOpen(true);
	const closeModal = (): void => setIsModalOpen(false);

	const viewTodo = (todo: Todo): void => {
		navigate(`${ROUTER_KEYS.TODO_DETAILS}/${todo.id}`);
	};

	return (
		<div>
			<TodoListHeader>
				<TodoListTitle>Todo List</TodoListTitle>
				<AddTodoButton onClick={openModal}>+</AddTodoButton>
			</TodoListHeader>
			<TodoFormModal
				addTodo={addTodo}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
			<TodoContainer
				todos={todos}
				getTodos={getTodos}
				onView={viewTodo}
				onDelete={deleteTodo}
				onToggleCompleted={toggleTodoComplection}
			/>
		</div>
	);
};

export default TodoListPage;
