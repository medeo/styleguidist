import React, { useContext, useState, useRef, useEffect } from 'react';
import Input from './Input';
import DropDown, { DropDownContext } from './DropDown';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const CustomToggle = ({ children, defaultOption = { value: null, children: '' }, ...rest }) => {
	const [, , open, setOpen, value] = useContext(DropDownContext);
	return (
		<Input as="button" {...rest} onClick={() => setOpen(!open)}>
			{value == null ? defaultOption.children : value.children}
			<FontAwesomeIcon icon={faSort} />
		</Input>
	);
};

const Component = styled.div`
	position: relative;
	& ${Input} {
		& svg {
			padding-left: 0.5rem;
		}
	}

	& select {
		opacity: 0;
		position: absolute;
		visibility: hidden;
	}
`;

const Select = ({ children, onChange, defaultValue, ...rest }) => {
	const [selected, select] = useState('');
	const [defaultOptionProps, setDefaultOptionProps] = useState({ value: null, children: '' });
	const ref = useRef();
	useEffect(() => {
		if (defaultValue == null) {
			if (children.length > 0) setDefaultOptionProps(children[0].props);
		} else {
			select(defaultValue);
			let option = children.find(
				c => c.props.value === defaultValue || c.props.children === defaultValue
			);
			if (option != null) setDefaultOptionProps(option.props);
			else if (children.length > 0) setDefaultOptionProps(children[0].props);
		}
	}, [defaultValue]);
	return (
		<Component {...rest}>
			<DropDown
				onChange={event => {
					if (event == null) return;
					if (event.value) {
						select(event.value);
						onChange(event);
					} else if (event.children) {
						select(event.children);
						onChange(event);
					}
				}}
			>
				<CustomToggle defaultOption={defaultOptionProps} />
				<DropDown.Menu>
					{children.map((c, i) => (
						<DropDown.ListItem key={i} {...c.props} />
					))}
				</DropDown.Menu>
			</DropDown>
			<select ref={ref} defaultValue={selected}>
				{children}
			</select>
		</Component>
	);
};

Select.defaultProps = {
	onChange: () => {},
};
export default Select;
