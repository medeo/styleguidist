import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import Span from './Span';

const Callout = styled.div`
	position: relative;
	padding: 1rem;
	& > header {
		svg {
			color: ${p => p.theme.aqua};
		}
		text-align: center;
		padding-right: ${p => [p.paddingHeader]};
	}
	& > main {
		max-width: 30rem;
		margin: auto;
		& > ${Span} {
			line-height: normal;
		}
	}
	&:before {
		position: absolute;
		content: '';
		width: 100%;
		height: 0.3rem;
		top: 0;
		left: 0;
		background: ${p => darken(0.15, p.theme.aqua)};
	}
	background: ${p => transparentize(0.95, p.theme.aqua)};
`;

/** @Component */
export default Callout;
