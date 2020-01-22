import styled   from 'styled-components';
import { transparentize } from 'polished';

export const CardHeader = styled.header`
	& > h1 {
		text-transform: uppercase;
		letter-spacing: 0.125rem;
		color: ${p => p.theme.aqua};
		font-size: ${p => p.theme.large};
		margin: 0;
		margin-bottom: 0.25rem;
	}

	& > h2 {
		color: ${p => p.theme.ebony};
		font-size: ${p => p.theme.small};
		font-weight: ${p => p.theme.lighter};
		margin: 0;
	}
`;

const Card = styled.div`
	background: ${p => p.theme.white};
	border-radius: 0.3125rem;
  	box-shadow: 0 .5rem 1.5rem 0 rgba(32, 67, 102, 0.06);
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

/** @component */

export default Card;
