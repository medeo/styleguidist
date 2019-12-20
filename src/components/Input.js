import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';

const invalidMixin = css`
	border-color: ${p => p.theme.scarlett};
	color: ${p => p.theme.black};
`;


const readOnlyMixin = css`
	border-color: transparent;
	padding: 0;
	background: transparent;
	&:focus {
	 border-color: transparent;
	}
`

const selectMixin = (p) => {
	if(p.readOnly === true)
		return invalidMixin
}


const Component = styled.input`
	${selectMixin}
	border-color: transparent;
	border-style: solid;
	border-width: 1px;
	outline: none;
	background: ${p => p.theme.alabaster};
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	font-size: ${p => p.theme.medium};
	font-weight: ${p => p.theme.normal};
	font-family: 'Inter', sans-serif;
	${p => (p.type !== 'date' ? 'line-height: 1.5;' : '')}
	
`;


const Group = styled.div`
	display: flex;
	flex:1;
	grid-row: 1;
	flex-direction: column-reverse;
	
	// read-only invalid and focus are pasted here in case we are using Input.DefaultComponent outside of this file
	// c.f. Select. Button is read-only all the time
	& input:read-only {
	 ${readOnlyMixin}
	}
	& input:invalid {
		${invalidMixin}
	}
	& input:focus {
		outline: none;
		border-color: ${p => p.theme.aqua};
	}
	& > input {
		flex: 1;
	}
	& > ${Label} {
		flex: 1;
	}
`


const selectDisplay = (p) => {
	if(p.readOnly === false) {
		return css`display: block`
	} else {
		if (p.defaultChecked === true || p.checked === true) {
			return css`
				display: block;
				${readOnlyMixin}
				&:hover {
					background: transparent;
				}
				& input {
					display: none;
				}
				`
		}
		return css`display: none`
	}
}

const RadioGroup = styled.label`
 	padding: 0.5rem;
  border-radius: 0.25rem;
  background: transparent;
  border: 1px solid ${p => p.theme.nevada};
  display: flex;
  align-items: center;
  ${p=> p.type ==='radio'? css`margin-right: 0.5rem;`: css`margin-bottom: 0.5rem; justify-self: flex-start` };
  ${props => selectDisplay(props)}
  & > input {
    margin-right: 0.5rem;
  }
  &:hover {
    background: ${p => p.theme.alabaster};
  }
`

const Input = styled(props => {
	const { id, label, onChange, ...rest} = props
	if(props.type === 'radio' || props.type === 'checkbox') {
		return <RadioGroup htmlFor={id} {...rest}>
				<input {...rest} onChange={onChange}/>
				<span>{label}</span>
			</RadioGroup>
	}
	return <Group className={props.className}>
		<Component id={id} onChange={onChange} {...rest}/>
		<Label htmlFor={id}>{label}</Label>
	</Group>
})``

Input.propTypes = {
	invalid: PropTypes.bool,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Input.defaultProps = {
	invalid: 'false',
	placeholder: '–',
	readOnly: false,
};

Input.DefaultComponent = Component

/** @component */
export default Input;
