import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Todo } from '~shared/models';
import {
	FormContainer,
	FormField,
	SubmitButton,
	ModalOverlay,
	ModalContent,
	CloseButton,
	TodoItem,
	ErrorText,
	ToggleContainer,
	ToggleLabel,
	Textarea,
} from './todo-addform.styles';
import ToggleSwitch from '../toggleswitch/toggle-switch.component';

type Props = {
	addTodo: (todo: Omit<Todo, 'id'>) => void;
	isOpen: boolean;
	onClose: () => void;
};

const TodoFormModal: React.FC<Props> = ({ addTodo, isOpen, onClose }) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const [isPrivate, setIsPrivate] = useState(false);

	if (!isOpen) return null;

	const userId = '8d376416-4f1f-4e32-8330-2989c7b4e5a4';

	const validationSchema = Yup.object({
		title: Yup.string().required('Title is required'),
		description: Yup.string().required('Description is required'),
	});

	const handleTextareaResize = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		e.target.style.height = 'auto';
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<TodoItem>Todo Item</TodoItem>
				<CloseButton onClick={onClose}>×</CloseButton>
				<Formik
					initialValues={{
						title: '',
						description: '',
					}}
					validationSchema={validationSchema}
					onSubmit={async (values, { resetForm }) => {
						const newTodo: Omit<Todo, 'id'> = {
							...values,
							isCompleted,
							isPrivate,
							userId,
							toggleCompletion: () =>
								setIsCompleted((prev) => !prev),
							toggleIsPrivate: () =>
								setIsPrivate((prev) => !prev),
						};
						addTodo(newTodo);
						resetForm();
						onClose();
					}}
				>
					{({ errors, touched }) => (
						<FormContainer as={Form}>
							<div>
								<Field
									name="title"
									as={FormField}
									placeholder="Title"
									className={
										errors.title && touched.title
											? 'error'
											: ''
									}
								/>
								<ErrorMessage
									name="title"
									component={ErrorText}
								/>
							</div>

							<div>
								<Field
									name="description"
									as={Textarea}
									placeholder="Description"
									className={
										errors.description &&
										touched.description
											? 'error'
											: ''
									}
									onInput={handleTextareaResize}
								/>
								<ErrorMessage
									name="description"
									component={ErrorText}
								/>
							</div>

							<ToggleContainer>
								<ToggleLabel>Complete</ToggleLabel>
								<ToggleSwitch
									checked={isCompleted}
									onChange={(checked) =>
										setIsCompleted(checked)
									}
								/>
							</ToggleContainer>

							<ToggleContainer>
								<ToggleLabel>Private</ToggleLabel>
								<ToggleSwitch
									checked={isPrivate}
									onChange={(checked) =>
										setIsPrivate(checked)
									}
								/>
							</ToggleContainer>

							<SubmitButton type="submit">Add Todo</SubmitButton>
						</FormContainer>
					)}
				</Formik>
			</ModalContent>
		</ModalOverlay>
	);
};

export default TodoFormModal;
