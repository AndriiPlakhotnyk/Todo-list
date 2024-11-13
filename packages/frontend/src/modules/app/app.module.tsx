import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoListPage from '~/pages/todo-list.component';
import { ROUTER_KEYS } from '~shared/keys';
import TodoDetails from '~shared/components/todo/todo-details.component';

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path={ROUTER_KEYS.DASHBOARD}
					element={<TodoListPage />}
				/>
				<Route
					path={`${ROUTER_KEYS.TODO_DETAILS}/:id`}
					element={<TodoDetails />}
				/>
			</Routes>
		</Router>
	);
};

export default AppRouter;
