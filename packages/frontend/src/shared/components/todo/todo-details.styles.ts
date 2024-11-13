import styled from '@emotion/styled';
import { THEME } from '~shared/styles/theme';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 20px;
	text-align: center;
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FieldContainer = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

export const Label = styled.label`
	font-weight: bold;
	margin-bottom: 5px;
	display: block;
`;

export const Input = styled.input`
	width: 100%;
	padding: ${THEME.spaces.m};
	font-size: ${THEME.sizes.m};
	border: 1px solid ${THEME.colors.philippineGray};
	border-radius: 5px;
	&.error {
		border-color: ${THEME.colors.mediumVioletRed};
	}
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	width: 70%;
`;

export const ToggleLabel = styled.span`
	font-weight: bold;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Button = styled.button`
	padding: 5px 10px;
	font-size: 14px;
	border: 1px solid ${THEME.colors.black};
	border-radius: 4px;
	cursor: pointer;
	background-color: ${THEME.colors.extraLigthGray};
	margin-bottom: 5px;
	width: 20%;

	&:hover {
		background-color: ${THEME.colors.ligthGray};
	}
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${THEME.colors.gray}
  };
  border-radius: 4px;
  resize: none;
  overflow: hidden;
  transition: height 0.2s ease-out;
  min-height: 200px;

  &.error {
    border-color: ${THEME.colors.mediumVioletRed};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    min-height: 250px;
  }

  @media (min-width: 768px) {
    min-height: 300px;
  }
`;

export const ErrorText = styled.div`
	color: ${THEME.colors.mediumVioletRed};
	font-size: ${THEME.fontSizes.s};
	margin-top: 5px;
`;
