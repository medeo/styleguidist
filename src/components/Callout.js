import styled from 'styled-components/macro';
import { transparentize, darken } from 'polished';
import Span from './Span';

const Callout = styled.div`
	position: relative;
	max-width: 40rem;
	display: grid;
	grid-template-areas:
		'l aside header header r'
		'l aside main main r';
	grid-template-columns: minmax(1rem, 1fr) 2rem minmax(1fr, 30rem) 2rem minmax(1rem, 1fr);
	padding: 1rem 0;
	& > aside {
		grid-area: aside;
		text-align: right;
		line-height: 2;
		svg {
			color: ${p => p.theme.aqua};
		}
	}
	& > header {
		grid-area: header;
	}
	& > main {
		grid-area: main;
		max-width: 30rem;
		& > ${Span} {
			line-height: 1.5;
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

/** @component */
export default Callout;
