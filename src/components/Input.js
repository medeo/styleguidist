import styled, { css } from 'styled-components';

const invalidMixin = css`
	border-color: ${p => p.theme.scarlett};
	color: ${p => p.theme.black};
`;

const defaultMixin = css`
	border-color: transparent;
`;

const Input = styled.input`
	${p => (p.invalid === true ? invalidMixin : defaultMixin)}

	border-style: solid;
	border-width: 1px;
	outline: none;

	background: ${p => p.theme.alabaster};
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	font-size: ${p => p.theme.medium};
	font-weight: ${p => p.theme.normal};
	font-family: 'Inter', sans-serif;
	&:invalid {
		${invalidMixin}
	}
	&:focus {
		outline: none;
		border-color: ${p => p.theme.aqua};
	}
`;

Input.defaultProps = {
	invalid: false,
};
export default Input;
