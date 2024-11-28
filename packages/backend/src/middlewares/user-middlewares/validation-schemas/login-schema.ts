import * as Yup from 'yup';
import { emailSchema, passwordSchema } from './common-schemas';

export const loginSchema = Yup.object({
	email: emailSchema,
	password: passwordSchema,
});
