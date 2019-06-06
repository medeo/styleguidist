import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/*
let StyledList = styled.ul`
	font-family: 'Inter', sans-serif;
	padding-left: ${p => (p.variant === 'none' ? 0 : p.theme.spacing.medium)};
	margin: 0;
	list-style-type: ${p => p.variant};
`;*/

const List = styled(({ items, children, fallback, ...rest }) => {
	if (fallback != null && items.length < 1) return fallback;
	return <ul {...rest}>{items.map(children)}</ul>;
})`
	font-family: 'Inter', sans-serif;
	padding-left: ${p => (p.variant === 'none' ? 0 : p.theme.spacing.medium)};
	margin: 0;
	list-style-type: ${p => p.variant};
`;

List.defaultProps = {
	items: [],
	variant: 'none',
	fallback: null,
};

List.propTypes = {
	/**
	 * children is a render prop here, it will be use this way `items.map(children)`
	 */
	children: PropTypes.func.isRequired,
	/**
	 * any type of items, they will be use as argument for the children function
	 */
	items: PropTypes.arrayOf(PropTypes.any),

	/**
	 * anything renderable, it will be displayed if **items** is empty
	 */
	fallback: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

	/**
	 * define whether the list should use list-style
	 */
	variant: PropTypes.oneOf(['none', 'circle', 'decimal', 'bullet']),
};

/** @component */
export default List;
