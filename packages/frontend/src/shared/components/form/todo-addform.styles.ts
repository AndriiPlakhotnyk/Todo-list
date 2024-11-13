import styled from '@emotion/styled';
import { THEME } from '~shared/styles/theme';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${THEME.spaces.m};
`;

export const TodoItem = styled.h1`
	font-size: ${THEME.fontSizes.m};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${THEME.colors.maastrichtBlue};
	margin-bottom: ${THEME.spaces.m};
`;

export const FormField = styled.input`
	width: 100%;
	padding: ${THEME.spaces.m};
	font-size: ${THEME.sizes.m};
	border: 1px solid ${THEME.colors.philippineGray};
	border-radius: 5px;
	&.error {
		border-color: ${THEME.colors.mediumVioletRed};
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border: 1px solid ${THEME.colors.black};
	border-radius: 4px;
	resize: none;
	overflow: hidden;
	transition: height 0.2s ease-out;

	&.error {
		border-color: ${THEME.colors.mediumVioletRed};
	}

	&:focus {
		outline: none;
		border-color: ${THEME.colors.majorelleBlue};
	}
`;

export const SubmitButton = styled.button`
	padding: ${THEME.spaces.m} ${THEME.spaces.s};
	background-color: ${THEME.colors.philippineGray};
	color: ${THEME.colors.white};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: ${THEME.sizes.m};
	font-weight: ${THEME.weights.bold};

	&:hover {
		background-color: ${THEME.colors.malachite};
	}
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background-color: ${THEME.colors.white};
	padding: ${THEME.spaces.m};
	border-radius: 8px;
	position: relative;
	width: 550px;
	max-width: 90%;
	z-index: 1010;
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 5px;
`;

export const ToggleLabel = styled.span`
	font-weight: bold;
`;

export const ErrorText = styled.div`
	color: ${THEME.colors.mediumVioletRed};
	font-size: ${THEME.fontSizes.s};
	margin-top: 5px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	background: none;
	border: none;
	font-size: ${THEME.fontSizes.m};
	cursor: pointer;
	color: ${THEME.colors.black};
`;
