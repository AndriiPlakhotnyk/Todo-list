import { PrismaClient } from '@prisma/client';
import console from 'console';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

async function connectDB(): Promise<void> {
	try {
		await prisma.$connect();
	} catch (err) {
		const error = err as Error;
		console.log(error.message);
		process.exit(1);
	}
}

connectDB();

export default prisma;
