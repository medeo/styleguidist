import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const invalidMixin = css`
	border-color: ${p => p.theme.scarlett};
	color: ${p => p.theme.black};
`;

const defaultMixin = css`
	border-color: ${p => (p.backgroundColor === 'alabaster' ? 'transparent' : p.theme.gray)};
`;

const Input = styled.input`
	${p => (p.invalid === true ? invalidMixin : defaultMixin)}

	border-style: solid;
	border-width: 1px;
	outline: none;

	background: ${p => p.theme[p.backgroundColor]};
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	font-size: ${p => p.theme.medium};
	font-weight: ${p => p.theme.normal};
	font-family: 'Inter', sans-serif;
	${p => (p.type !== 'date' ? 'line-height: 1.5;' : '')}
	&:invalid {
		${invalidMixin}
	}
	&:focus {
		outline: none;
		border-color: ${p => p.theme.aqua};
	}
`;

Input.propTypes = {
	invalid: PropTypes.bool,
	backgroundColor: PropTypes.oneOf(['alabaster', 'white']),
};

Input.defaultProps = {
	invalid: false,
	backgroundColor: 'alabaster',
};

/** @component */
export default Input;
