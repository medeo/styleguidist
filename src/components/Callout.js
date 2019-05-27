import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import Span from './Span';

const Callout = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	& > ${Span} {
		& > .iconExclamationCircle {
			color: ${p => p.theme.aqua};
		}
		&:first-of-type {
			display: flex;
			flex-direction: row;
		}
		&:last-of-type {
			padding-left: 2.5rem;
		}
		padding-top: 0.35rem;
		display: flex;
		flex-direction: column;
		align-content: center;
		width: 21rem;
		line-height: 110%;
	}
	background: ${p => transparentize(0.95, p.theme.aqua)};
	& > div {
		background: ${p => darken(0.15, p.theme.aqua)};
		margin: 0 0 0.5rem 0;
	}
`;

/** @Component */
export default Callout;
