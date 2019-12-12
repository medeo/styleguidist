import React, { useContext, useState, useRef, useEffect } from 'react';
import Input from './Input';
import Label from './Label';
import Button from './Button';
import DropDown, { DropDownContext } from './DropDown';
import styled, { css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const CustomToggle = ({ children, name, defaultOption, onChange, label, ...rest }) => {
	const [,, open, setOpen, value] = useContext(DropDownContext);
	useEffect(() => {
		onChange(value)
		//console.log(onChange)
	},
		[value]
	)
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
		<Input.DefaultComponent
			as="button"
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
			<FontAwesomeIcon icon={faSort} style={{}} />
		</Input.DefaultComponent>
		</div>
	);
};

CustomToggle.defaultProps = {
	defaultOptions: {
		value: null,
		children: '',
	},
};

// CustomMenu is required to prevent big list to fill up the screen
const CustomMenu = styled(DropDown.Menu)`
	overflow-x: scroll;
	max-height: 10rem ;
`

const Component = styled.div`
	position: relative;
	& ${Input.DefaultComponent} {
		display: flex;
		align-items: center;
		& > span {
			flex: 1;
			margin-right: 0.5rem;
		}
		& svg {
			width: 1rem !important;
		}
		${p => p.readOnly === true && css` & svg {display: none;} & > span { margin: 0;} background: transparent; padding: 0;`}
		
	}

	& select {
		opacity: 0;
		position: absolute;
		visibility: hidden;
	}
`;

const Select = styled(({ children, defaultValue, readOnly, onChange, label, name, ...rest }) => {
	const [selected, select] = useState('');
	const [defaultOptionProps, setDefaultOptionProps] = useState({ value: null, children: '' });
	const ref = useRef();
	useEffect(() => {
		if (defaultValue == null) {
			if (children.length > 0) setDefaultOptionProps(children[0].props);
		} else {
			select(defaultValue);
			let option = children.find(
				c => (c.props.value && c.props.value.toString() === defaultValue) || (c.props.children && c.props.children.toString() === defaultValue)
			);
			if (option != null) setDefaultOptionProps(option.props);
			else if (children.length > 0) setDefaultOptionProps(children[0].props);
		}
	}, [defaultValue]);

	return (
		<Component readOnly={readOnly} {...rest}>
			<DropDown variant="bottom">
				<CustomToggle label={label} name={name} defaultOption={defaultOptionProps} readOnly={readOnly} onChange={e => {
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
				{readOnly === false && <CustomMenu>
					{children.map((c, i) => (
						<DropDown.ListItem key={i} {...c.props} />
					))}
				</CustomMenu>}
			</DropDown>
			<select ref={ref} name={name} {...rest} value={selected} disabled={true} onChange={onChange}>
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
