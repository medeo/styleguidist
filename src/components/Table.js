import PropTypes from 'prop-types';
import clickableMixin from '../mixins/clickable';
import styled from 'styled-components';
import { transparentize } from 'polished';

const Table = styled.table`
	width: 100%;
	margin: 0 1rem;
	color: ${p => p.theme.ebony};
	font-size: ${p => p.theme.medium};
	font-weight: ${p => p.theme.normal};
	text-align: left;
	font-family: 'Inter', sans-serif;
	border-spacing: 0 0.5rem;
	user-select: none;
	& > thead tr th {
		color: ${p => p.theme.nevada};
		font-size: ${p => p.theme.small};
		text-transform: uppercase;
		font-weight: ${p => p.theme.bold};
		letter-spacing: 0.125rem;
		// padding should be set by the implementation
	//	padding: 2rem 1rem 0 2rem;
	}
	& > tbody tr {
		&[role='button']:active {
			${clickableMixin};
			td {
				background: ${p => transparentize(0.9, p.theme.aqua)};
			}
		}
		& > td {
			background: ${p => p.theme.white};
			border: 1px solid transparent;
			border-left: none;
			border-right: none;
			// padding should be set by the implementation
		//	padding: 0.5rem 2rem;
			//	vertical-align: top;
			text-align: left;

			&:first-of-type {
				border: 1px solid transparent;
				border-right: none;
				border-radius: 0.25rem 0 0 0.25rem;
			}
			&:last-of-type {
				border: 1px solid transparent;
				border-left: none;
				border-radius: 0 0.25rem 0.25rem 0;
			}
		}
		&:hover td {
			border-color: ${p => p.theme.ocean};
		}
		box-shadow: ${p => p.theme.boxShadow};
	}
`;
Table.defaultProps = {
	color: 'ebony',
	size: 'medium',
};

Table.propTypes = {
	/**
	 * the color theme for the button
	 */
	color: PropTypes.oneOf(['ocean', 'aqua', 'nevada', 'ebony', 'white']),
	/**
	 * The size of the table. It defines the font-size of the table.
	 * @see See [font-size property](https://www.w3schools.com/cssref/pr_font_font-size.asp)
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

/** @component */
export default Table;
