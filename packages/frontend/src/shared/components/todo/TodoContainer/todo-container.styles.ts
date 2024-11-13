import styled from '@emotion/styled';
import { THEME } from '~shared/styles/theme';

export const Table = styled.div`
	width: 65%;
	margin: 1.5cm auto 0;
	border-collapse: collapse;

	.header,
	.row {
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${THEME.colors.oceanBlue[300]};
		padding: ${THEME.spaces.s} 0;
	}

	.header {
		font-weight: bold;
		background-color: ${THEME.colors.oceanBlue[100]};
	}

	.cell {
		padding: ${THEME.spaces.s};
		border-right: 1px solid ${THEME.colors.oceanBlue[200]};
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cell:last-of-type {
		border-right: none;
	}

	.title {
		flex-basis: 15%;
	}

	.description {
		flex-basis: 65%;
	}

	.actions {
		flex-basis: 20%;
		display: flex;
		gap: ${THEME.spaces.s};
	}

	@media (max-width: 1024px) {
		width: 80%;
	}

	@media (max-width: 767px) {
		width: 100%;
		.header,
		.row {
			flex-direction: column;
			align-items: flex-start;
			padding: ${THEME.spaces.m};
		}

		.cell {
			width: 100%;
			padding: ${THEME.spaces.s} ${THEME.spaces.m};
			border-right: none;
			border-bottom: 1px solid ${THEME.colors.oceanBlue[200]};
		}

		.title,
		.description,
		.actions {
			flex-basis: 100%;
		}

		.actions {
			justify-content: space-between;
			margin-top: ${THEME.spaces.s};
		}
	}
`;

export const ActionButton = styled.button`
	min-width: 60px;
	padding: ${THEME.spaces.s} ${THEME.spaces.m};
	font-size: ${THEME.fontSizes.s};
	cursor: pointer;
	transition: background-color 0.3s;
	border: 1px solid ${THEME.colors.philippineGray};
	border-radius: 4px;

	@media (max-width: 767px) {
		width: 30%;
		font-size: ${THEME.fontSizes.xs};
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 30%;
		font-size: ${THEME.fontSizes.m};
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
`;

export const ListItem = styled.div`
  background-color: ${THEME.colors.lotion}
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 4px;
    color: ${THEME.colors.majorelleBlue};
  }

  .description {
  margin-bottom: 0.5cm;
  font-size: 1rem;
  color: ${THEME.colors.jacarta};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  height: calc(1.5em * 4);
  line-height: 1.5em;
  white-space: normal;
  word-break: break-word;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Slide = styled.div`
	flex: 0 0 60%;
	min-width: 250px;
	background-color: ${THEME.colors.lotion};
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 16px;

	.title {
		font-size: 1.2rem;
		font-weight: bold;
		color: ${THEME.colors.majorelleBlue};
	}

	.description {
		font-size: 1rem;
		color: ${THEME.colors.jacarta};
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		height: calc(1.5em * 4);
		line-height: 1.5em;
		white-space: normal;
		word-break: break-word;
	}

	.actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Slider = styled.div`
	display: flex;
	margin: 3cm auto 0;
	overflow-x: auto;
	gap: 16px;
	padding: 20px;
	scroll-snap-type: x mandatory;

	&::-webkit-scrollbar {
		display: none;
	}
`;
