import * as Yup from 'yup';
import {
	confirmNewPasswordSchema,
	emailSchema,
	newPasswordSchema,
	oldPasswordSchema,
} from './common-schemas';

export const resetPasswordSchema = Yup.object({
	email: emailSchema,
	oldPassword: oldPasswordSchema,
	newPassword: newPasswordSchema,
	confirmPassword: confirmNewPasswordSchema,
});
