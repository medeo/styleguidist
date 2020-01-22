import React from 'react'
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';

const invalidMixin = css`
	border-color: ${p => p.theme.scarlett};
	color: ${p => p.theme.black};
`;

const disabledMixin = css`
	background: ${p => p.theme.cream};
`;

const readOnlyMixin = css` 
	border-color: transparent;
	padding: 0;
	background: transparent;
	resize: none;
	&:focus {
	 border-color: transparent;
	}
`

const selectMixin = (p) => {
	if(p.readOnly === true)
		return invalidMixin
}

const Component = styled.textarea`
	resize: none;
	height: 4rem;
	${selectMixin}
	border-color: ${p =>p.theme.nevada};
	border-style: solid;
	border-width: 1px;
	outline: none;
	background: white;
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	font-size: ${p => p.theme.medium};
	font-weight: ${p => p.theme.normal};
	font-family: 'Inter', sans-serif;
`;

const Group = styled.div`
	display: flex;
	flex:1;
	grid-row: 1;
	flex-direction: column-reverse;
	
	// read-only invalid and focus are pasted here in case we are using Input.DefaultComponent outside of this file
	// c.f. Select. Button is read-only all the time
	& textarea:read-only {
	 ${readOnlyMixin}
	}

	// apply invalid state only when the user has started to type
	// check out this article for more info https://zellwk.com/blog/check-empty-input-css/
	& textarea:invalid:not(:placeholder-shown):not(:focus) {
		${invalidMixin}
	}

	& textarea:disabled {
		${disabledMixin}
	}
	& textarea:focus {
		outline: none;
		border-color: ${p => p.theme.aqua};
	}
	& > textarea {
		flex: 1;
	}

	& textarea:required:not(:read-only) ~ label::after {
		dislay: inline;
		content: '*';
		margin-left: 0.25rem;
		color: ${p => p.theme.aqua};
	}
	& > ${Label} {
		flex: 1;
	}
`

const TextArea = styled(props => {
	const { id, label, onChange, ...rest} = props

	return (
		<Group className={props.className}>
			<Component id={id} onChange={onChange} {...rest}/>
			<Label htmlFor={id}>{label}</Label>
		</Group>
	)
})``

TextArea.propTypes = {
	invalid: PropTypes.string,
	backgroundColor: PropTypes.oneOf(['alabaster', 'white']),
};

TextArea.defaultProps = {
	invalid: false,
	backgroundColor: 'alabaster',
	placeholder: '-',
	readOnly: false,
};

TextArea.DefaultComponent = Component

/** @component */
export default TextArea;
