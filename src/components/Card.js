import styled, { css } from 'styled-components';
import { opacify, transparentize } from 'polished';

export const CardHeader = styled.header`
	& > h1 {
		text-transform: uppercase;
		letter-spacing: 0.125rem;
		color: ${p => p.theme.aqua};
		font-size: ${p => p.theme.large};
		margin: 0;
		margin-bottom: 0.25rem;

	}
`;

const Card = styled.div`
	background: ${p => p.theme.white};
	border-style: solid;
	border-width: 1px;
	border-color: ${p => transparentize(0.5, p.theme.gray)};
	border-radius: 0.3125rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: ${p => p.theme.spacing.large};
	& > ${CardHeader} {
		margin-bottom: ${p => p.theme.spacing.large};
	}

	& > footer {
		margin-top: ${p => p.theme.spacing.medium};
	}
`;

/** @Component */

export default Card;
