import React, { useEffect } from 'react';
import { Table, ActionButton } from './todo-container.styles';
import { Todo } from '~shared/models';
import ToggleSwitch from '~shared/components/toggleswitch/toggle-switch.component';

const TodoContainerDesktop: React.FC<{
	todos: Todo[];
	getTodos: () => void;
	onView: (todo: Todo) => void;
	onDelete: (id: string) => void;
	onToggleCompleted: (id: string, isCompleted: boolean) => void;
}> = ({ todos, getTodos, onView, onDelete, onToggleCompleted }) => {
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Table>
			<div className="header">
				<div className="cell title">Todo title</div>
				<div className="cell description">Todo description</div>
				<div className="cell actions">Actions</div>
			</div>
			{todos.map((todo) => (
				<div className="row" key={todo.id}>
					<div className="cell title" title={todo.title}>
						{todo.title}
					</div>
					<div className="cell description" title={todo.description}>
						{todo.description}
					</div>
					<div className="cell actions">
						<ActionButton onClick={() => onView(todo)}>
							View
						</ActionButton>
						<ActionButton onClick={() => onDelete(todo.id)}>
							Delete
						</ActionButton>
						<ToggleSwitch
							checked={todo.isCompleted}
							onChange={(checked: boolean) =>
								onToggleCompleted(todo.id, checked)
							}
						/>
					</div>
				</div>
			))}
		</Table>
	);
};

export default TodoContainerDesktop;
