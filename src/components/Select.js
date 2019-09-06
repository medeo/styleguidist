import React, { useContext, useState, useRef, useEffect } from 'react';
import Input from './Input';
import DropDown, { DropDownContext } from './DropDown';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const CustomToggle = ({ children, defaultOption, ...rest }) => {
	const [a, b, open, setOpen, value] = useContext(DropDownContext);
	return (
		<Input
			as="button"
			role="button"
			{...rest}
			onClick={e => {
				// e.preventDefault is required because when this button is clicked inside of a form with required inputs
				// the browser will complain about required input not filled.
				e.preventDefault();
				setOpen(!open);
			}}
		>
			<span>{value == null ? defaultOption.children : value.children}</span>
			<FontAwesomeIcon icon={faSort} />
		</Input>
	);
};

CustomToggle.defaultProps = {
	defaultOptions: {
		value: null,
		children: '',
	},
};

const Component = styled.div`
	position: relative;
	& ${Input} {
		display: flex;
		align-items: center;
		& > span {
			flex: 1;
		}
		& svg {
			width: 1rem !important;
		}
	}

	& select {
		opacity: 0;
		position: absolute;
		visibility: hidden;
	}
`;

const Select = styled(({ children, onChange, defaultValue, ...rest }) => {
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
				variant="bottom"
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
})``;

Select.defaultProps = {
	onChange: () => {},
};
export default Select;
