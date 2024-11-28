import * as Yup from 'yup';

export const emailSchema = Yup.string()
	.email('Invalid email format')
	.required('Email is required');

export const passwordSchema = Yup.string()
	.required('Password is required')
	.min(6, 'Password must be at least 6 characters long');

export const confirmPasswordSchema = Yup.string()
	.required('Confirm password is required')
	.oneOf([Yup.ref('password')], 'Passwords do not match');

export const usernameSchema = Yup.string()
	.min(3, 'Username must be at least 3 characters long')
	.required('Username is required');

export const oldPasswordSchema = Yup.string()
	.required('Old password is required')
	.min(6, 'Old password must be at least 6 characters long');

export const newPasswordSchema = Yup.string()
	.required('New password is required')
	.min(6, 'Password must be at least 6 characters long')
	.notOneOf(
		[Yup.ref('oldPassword')],
		'The new password must be different from the old password.',
	);

export const confirmNewPasswordSchema = Yup.string()
	.required('Confirm password is required')
	.oneOf(
		[Yup.ref('newPassword')],
		'Confirm password must match the new password.',
	);
