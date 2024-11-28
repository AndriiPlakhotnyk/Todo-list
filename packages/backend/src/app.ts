import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';

import AppRouter from './routes';
import { configurePassport } from './strategy';
import passport from 'passport';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

configurePassport(passport);
app.use(passport.initialize());

router.init();

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
