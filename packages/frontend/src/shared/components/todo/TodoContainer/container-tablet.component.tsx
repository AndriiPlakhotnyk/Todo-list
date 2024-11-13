import React, { useEffect } from 'react';
import { Slider, Slide, ActionButton } from './todo-container.styles';
import { Todo } from '~shared/models';
import ToggleSwitch from '~shared/components/toggleswitch/toggle-switch.component';

const TodoContainerTablet: React.FC<{
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
		<Slider>
			{todos.map((todo) => (
				<Slide key={todo.id}>
					<div className="title" title={todo.title}>
						{todo.title}
					</div>
					<div className="description" title={todo.description}>
						{todo.description}
					</div>
					<div className="actions">
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
				</Slide>
			))}
		</Slider>
	);
};

export default TodoContainerTablet;
