import React, { useContext, useState, useRef, useEffect } from 'react';
import fuzzy from 'fuzzy';

import Input from './Input';
import Label from './Label';
import DropDown, { DropDownContext } from './DropDown';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const useOutsideAlerter = ref => {
	const handleClickOutside = e => {
		if(ref.current && !ref.current.contains(e.target)) {
			// console.log('you clicked outside of me!')
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	})
}


const CustomToggle = ({ children, name, defaultOption, onChange, label, selected, setSearch, ...rest }) => {
	const [, , open, setOpen, value, , dimensions] = useContext(DropDownContext);
	const [fakeOpen, setFakeOpen] = useState(false);
	useEffect(() => {
		onChange(value);
		//console.log(onChange)
	}, [value]);

	// open and then close select to get the size of widest children item.
	// Because the width of the listItem can only be get if displayed (therefore select must be opened)
	if (dimensions == null && fakeOpen == false) {
		setOpen(true);
		setFakeOpen(true);
	}
	useEffect(() => {
		if (fakeOpen == true && dimensions != null) {
			setOpen(false);
			setFakeOpen(false);
		}
	}, [fakeOpen, dimensions]);

	let width = dimensions ? dimensions.width + 50 : 0;



	return (
		<div
			onClick={e => {
			// e.preventDefault is required because when this button is clicked inside of a form with required inputs
			// the browser will complain about required input not filled.
			e.preventDefault();
			setOpen(!open);

		}}
			style={{ textAlign: 'start', width: `${width}px` }}>
			<Label>{label}</Label>
			<span style={{display: 'flex'}}>
			<Input
				placeholder={value == null ? defaultOption.children : value.children}
				onChange={e => setSearch(e.target.value)}
				style={{display: 'inline-block'}}
				{...rest}
			/>
			<FontAwesomeIcon icon={faSort} style={{}}/>
			</span>
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
	max-height: 10rem;
`;

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
		${p =>
	p.readOnly === true &&
	css`
				& svg {
					display: none;
				}
				& > span {
					margin: 0;
				}
				background: transparent;
				padding: 0;
			`}
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
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null)
	useOutsideAlerter(wrapperRef)
	const myOptions = children.map(c => c.props.value || c.props.children);
	const results = fuzzy.filter(search, myOptions)
		.map(r => r.string) || myOptions;
	const ref = useRef();
	useEffect(() => {
		if (defaultValue == null) {
			if (children.length > 0) setDefaultOptionProps(children[0].props);
		} else {
			select(defaultValue);
			let option = children.find(
				c =>
					(c.props.value && c.props.value.toString() === defaultValue) ||
					(c.props.children && c.props.children.toString() === defaultValue),
			);
			if (option != null) setDefaultOptionProps(option.props);
			else if (children.length > 0) setDefaultOptionProps(children[0].props);
		}
	}, [defaultValue]);

	return (
		<Component readOnly={readOnly} ref={wrapperRef} {...rest}>
			<DropDown variant="bottom">
				<CustomToggle setSearch={setSearch} selected={selected} label={label} name={name} defaultOption={defaultOptionProps}
											readOnly={readOnly} onChange={e => {
					if (e == null) return;
					if (e.value) {
						select(e.value);
						const triggerChange = Object.getOwnPropertyDescriptor(
							HTMLSelectElement.prototype,
							'value',
						).set;
						const event = new Event('change', { bubbles: true, cancelable: true });
						triggerChange.call(ref.current, e.value);
						ref.current.dispatchEvent(event);
					} else if (e.children) {
						select(e.children);
						const triggerChange = Object.getOwnPropertyDescriptor(
							HTMLSelectElement.prototype,
							'value',
						).set;
						const event = new Event('change', { bubbles: true, cancelable: true });
						triggerChange.call(ref.current, e.children);
						ref.current.dispatchEvent(event);
					}
				}}/>
				{readOnly === false && <CustomMenu>
					{results.map((result, i) => (
							<DropDown.ListItem key={i}>{result}</DropDown.ListItem>
						))}
				</CustomMenu>}
			</DropDown>
			<select ref={ref} name={name} aria-label={label} {...rest} value={selected} disabled={true} onChange={onChange}>
				{children}
			</select>
		</Component>
	);
})``;

Select.defaultProps = {
	onChange: () => {
	},
	readOnly: false,
};
export default Select;
