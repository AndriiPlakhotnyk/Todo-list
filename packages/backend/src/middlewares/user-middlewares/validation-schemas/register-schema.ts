import * as Yup from 'yup';
import {
	confirmPasswordSchema,
	emailSchema,
	passwordSchema,
	usernameSchema,
} from './common-schemas';

export const registrationSchema = Yup.object({
	email: emailSchema,
	username: usernameSchema,
	password: passwordSchema,
	confirmPassword: confirmPasswordSchema,
});
