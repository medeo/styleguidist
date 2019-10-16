import React, { useContext, useState, useRef, useEffect } from 'react';
import Input from './Input';
import DropDown, { DropDownContext } from './DropDown';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const CustomToggle = ({ children, defaultOption, onChange, ...rest }) => {
	const [,, open, setOpen, value] = useContext(DropDownContext);
	useEffect(() => {
		onChange(value)
		//console.log(onChange)
	},
		[value]
	)
	return (
		<Input
			as="button"
			role="button"
			{...rest}
			value={value}
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

const Select = styled(({ children, defaultValue, readOnly, onChange, ...rest }) => {
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
			<DropDown variant="bottom">
				<CustomToggle defaultOption={defaultOptionProps} readOnly={readOnly} onChange={e => {
					if (e == null) return;
					if (e.value) {
						select(e.value);
						const triggerChange = Object.getOwnPropertyDescriptor(
							HTMLSelectElement.prototype,
							"value"
						).set;
						const event = new Event("change", { bubbles: true, cancelable: true });
						triggerChange.call(ref.current, e.value);
						ref.current.dispatchEvent(event);
					} else if (e.children) {
						select(e.children);
						const triggerChange = Object.getOwnPropertyDescriptor(
							HTMLSelectElement.prototype,
							"value"
						).set;
						const event = new Event("change", { bubbles: true, cancelable: true });
						triggerChange.call(ref.current, e.children);
						ref.current.dispatchEvent(event);
					}
				}} />
				{readOnly === false && <DropDown.Menu>
					{children.map((c, i) => (
						<DropDown.ListItem key={i} {...c.props} />
					))}
				</DropDown.Menu>}
			</DropDown>
			<select ref={ref} {...rest} value={selected} disabled={true} onChange={onChange}>
				{children}
			</select>
		</Component>
	);
})``;

Select.defaultProps = {
	onChange: () => {},
	readOnly: false
};
export default Select;
