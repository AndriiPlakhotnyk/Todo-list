import React from 'react';
import { useMediaQuery } from '@mui/material';
import TodoContainerDesktop from './container-desktop.component';
import TodoContainerTablet from './container-tablet.component';
import TodoContainerMobile from './container-mobile.component';
import { Todo } from '~shared/models';

const TodoContainer: React.FC<{
	todos: Todo[];
	getTodos: () => void;
	onView: (todo: Todo) => void;
	onDelete: (id: string) => void;
	onToggleCompleted: (id: string, isCompleted: boolean) => void;
}> = (props) => {
	const isTablet = useMediaQuery(
		'(max-width: 1024px) and (min-width: 768px)',
	);
	const isMobile = useMediaQuery('(max-width: 600px)');

	if (isMobile) {
		return <TodoContainerMobile {...props} />;
	}
	if (isTablet) {
		return <TodoContainerTablet {...props} />;
	}
	return <TodoContainerDesktop {...props} />;
};

export default TodoContainer;
