import {
	ExtractJwt,
	Strategy as JwtStrategy,
	StrategyOptions,
} from 'passport-jwt';
import { PassportStatic } from 'passport';
import prisma from '../config/database';
import { JwtPayload } from 'jsonwebtoken';

const jwtOptions: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET as string,
};

const jwtStrategy = new JwtStrategy(
	jwtOptions,
	async (payload: JwtPayload, done) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: payload.id },
			});

			if (user) {
				return done(null, user);
			}
			return done(null, false);
		} catch (error) {
			return done(error, false);
		}
	},
);

export const configurePassport = (passport: PassportStatic): void => {
	passport.use(jwtStrategy);
};
