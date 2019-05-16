import styled, { css } from 'styled-components';
import { opacify, transparentize } from 'polished';

export const CardHeader = styled.header`
	& > h1 {
		text-transform: uppercase;
		color: ${p => p.theme.aqua};
		font-size: ${p => p.theme.large};
		margin: 0;
	}
`;

const Card = styled.div`
	background: white;
	border-style: solid;
	border-width: 1px;
	border-color: ${p => transparentize(0.5, p.theme.gray)};
	border-radius: 0.3125rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 1rem;
	& > ${CardHeader} {
		margin-bottom: 1rem;
	}
	/*& > header {
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		background: red;

		& > span {
			&:first-of-type {
				text-transform: uppercase;
				color: ${p => p.theme.aqua};
				font-size: ${p => p.theme.large};
			}
			padding-bottom: 0.25rem;
			font-size: ${p => p.theme.small};
		}
		
	}*/

	& > main {
		background: yellow;
/*
		& > span {
			&:first-of-type {
				font-size: ${p => p.theme.medium};
				font-weight: ${p => p.theme.bold};
			}
			padding-right: 2rem;
			font-size: ${p => p.theme.small};
		}
		*/
	}

	& > footer {
		margin-top: 1rem;
		/*
		display: flex;

		justify-content: center;
		& > span {
			font-size: ${p => p.theme.medium};
		}
		*/
	}
`;

export default Card;
