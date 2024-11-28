import { Application } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';
import authRouter from './api/auth.route';
import passport from 'passport';
import { decodeToken } from '@/middlewares/user-middlewares/decode-token';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});
		this.app.use(
			'/api/todos',
			passport.authenticate('jwt', { session: false }),
			decodeToken,
			todosRouter,
		);
		this.app.use(
			'/api/user',
			passport.authenticate('jwt', { session: false }),
			decodeToken,
			userRouter,
		);
		this.app.use('/api/auth', authRouter);
	}
}

export default AppRouter;
