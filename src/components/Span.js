import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, mix, readableColor } from 'polished';

// spqn is inline
const Span = styled.span`
	display: inline-block;
	color: ${p => p.theme[p.color]};
	font-size: ${p => p.theme[p.size]};
	font-weight: ${p => p.theme[p.weight]};
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
