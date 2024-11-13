import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTodoStore } from '~store/todo.store';
import Loader from '../loader/loader.component';
import ToggleSwitch from '../toggleswitch/toggle-switch.component';
import { ROUTER_KEYS } from '~shared/keys';
import {
	Container,
	Title,
	Form,
	FieldContainer,
	Label,
	Input,
	Textarea,
	ToggleContainer,
	ToggleLabel,
	Button,
	ButtonContainer,
	ErrorText,
} from './todo-details.styles';

type FormValues = {
	title: string;
	description: string;
	isPrivate: boolean;
	isCompleted: boolean;
};

const validationSchema = Yup.object({
	title: Yup.string().required('Title is required').default(''),
	description: Yup.string().required('Description is required').default(''),
	isPrivate: Yup.boolean().default(false),
	isCompleted: Yup.boolean().default(false),
});

const TodoDetails: React.FC = () => {
	const { getTodoById, editTodo, loading, error } = useTodoStore();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema) as Resolver<FormValues>,
		defaultValues: validationSchema.getDefault() as FormValues,
	});

	useEffect(() => {
		const loadTodo = async (): Promise<void> => {
			try {
				const todoData = await getTodoById(id);
				if (todoData) {
					setValue('title', todoData.title);
					setValue('description', todoData.description);
					setValue('isPrivate', todoData.isPrivate);
					setValue('isCompleted', todoData.isCompleted);
				}
			} catch {
				console.error('Failed to fetch todo');
			}
		};

		loadTodo();
	}, [getTodoById, id, setValue]);

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			await editTodo(id!, data);
			navigate(ROUTER_KEYS.DASHBOARD);
		} catch (err) {
			console.error('Failed to edit todo');
		}
	};

	const handleDescriptionInput = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		e.target.style.height = 'auto';
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	if (loading) return <Loader />;
	if (error) return <div>{error}</div>;

	return (
		<Container>
			<Title>Todo</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FieldContainer>
					<Label htmlFor="title">Title:</Label>
					<Input
						id="title"
						{...register('title')}
						placeholder="Enter title"
						className={errors.title ? 'error' : ''}
					/>
					{errors.title && (
						<ErrorText>{errors.title.message}</ErrorText>
					)}
				</FieldContainer>

				<FieldContainer>
					<Label htmlFor="description">Description:</Label>
					<Textarea
						id="description"
						{...register('description')}
						onInput={handleDescriptionInput}
						className={errors.description ? 'error' : ''}
					/>
					{errors.description && (
						<ErrorText>{errors.description.message}</ErrorText>
					)}
				</FieldContainer>

				<div style={{ marginTop: '1cm' }} />

				<ToggleContainer>
					<ToggleLabel>Complete</ToggleLabel>
					<ToggleSwitch
						checked={watch('isCompleted')}
						onChange={(checked) => setValue('isCompleted', checked)}
					/>
				</ToggleContainer>

				<ToggleContainer>
					<ToggleLabel>Private</ToggleLabel>
					<ToggleSwitch
						checked={watch('isPrivate')}
						onChange={(checked) => setValue('isPrivate', checked)}
					/>
				</ToggleContainer>

				<div style={{ marginTop: '1cm' }} />

				<ButtonContainer>
					<Button type="submit">Save</Button>
					<Button
						type="button"
						onClick={() => navigate(ROUTER_KEYS.DASHBOARD)}
					>
						Back
					</Button>
				</ButtonContainer>
			</Form>
		</Container>
	);
};

export default TodoDetails;
