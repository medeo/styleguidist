import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { readableColor, transparentize } from 'polished';

// spqn is inline
const Span = styled.span`
	display: inline-block;
	line-height: 2;
	color: ${p => p.theme[p.color]};
	font-size: ${p => p.theme[p.size]};
	font-weight: ${p => p.theme[p.weight]};
	&::selection {
		background: ${p =>
			readableColor(p.theme[p.color], p.theme.alabaster, transparentize(0.5, p.theme.aqua))};
	}
`;

Span.defaultProps = {
	color: 'ebony',
	size: 'medium',
	weight: 'normal',
};

/** @Component */
export default Span;

/*
const Span = styled.span`
	display: inline-block;
	color: ${props => props.theme[p.color]};
	font-size: ${p => p.theme[p.size]};
	font-weight: ${p => p.theme[p.weight]};
`;
*/
