import styled from '@emotion/styled';
import { THEME } from '~shared/styles/theme';

export const Switch = styled.div<{ checked: boolean }>`
	display: inline-block;
	width: 50px;
	height: 25px;
	background: ${(props): string =>
		props.checked ? THEME.colors.malachite : THEME.colors.philippineGray};
	border-radius: 25px;
	position: relative;
	cursor: pointer;
	z-index: 20;
`;

export const Slider = styled.div<{ checked: boolean }>`
	position: absolute;
	top: 2px;
	left: 2px;
	width: 21px;
	height: 21px;
	border-radius: 50%;
	background: ${THEME.colors.white};
	transition: 0.3s;
	transform: ${(props): string =>
		props.checked ? 'translateX(25px)' : 'translateX(0)'};
	z-index: 20;
`;
