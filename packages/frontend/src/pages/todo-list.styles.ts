import styled from '@emotion/styled';
import { THEME } from '~shared/styles/theme';

export const TodoListHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: ${THEME.spaces.m};
`;

export const TodoListTitle = styled.h1`
	font-size: ${THEME.fontSizes.xl};
	color: ${THEME.colors.maastrichtBlue};
	margin-right: ${THEME.spaces.s};
`;

export const AddTodoButton = styled.button`
	width: 40px;
	height: 40px;
	font-size: ${THEME.fontSizes.xl};
	background-color: ${THEME.colors.white};
	color: ${THEME.colors.blackCoral};
	border: none;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: ${THEME.colors.lotion};
	}
`;
