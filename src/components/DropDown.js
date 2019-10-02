import React, { useState, useContext, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';
import { faChevronDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ListItem = styled(({ children, value, isActive, onClick, ...rest }) => {
	const ref = useRef(null);
	const [index, setIndex, open, setOpen, , setValue] = useContext(DropDownContext);
	useEffect(() => {
		if (isActive === true) {
			ref.current.focus();
		}
	}, [isActive]);

	const handleClick = (e) => {
		setIndex(-1);
		setOpen(false);
		setValue({ value, children: ref.current.innerHTML });
		onClick(e)
	};

	const handleKeyDown = e => {
		if (e.keyCode === 13 && index >= 0) {
			// enter
			setValue({ value, children: ref.current.innerHTML });
		}
		e.persist();
	};
	return (
		<li ref={ref} tabIndex="0" {...rest} onKeyDown={handleKeyDown} onClick={handleClick}>
			{children}
		</li>
	);
})``;

ListItem.defaultProps= {
	onClick: () => {}
}


export const DropDownContext = React.createContext(false);
const leftMixin = css`
	margin-top: 0;
	right: calc(100% + 0.25rem);
	top: 0;
`;
const bottomMixin = css`
	margin-top: 0.25rem;
`;

const getMixinFromVariant = p => {
	const { variant } = p;
	switch (variant) {
		case 'left':
			return leftMixin;
		default:
			return bottomMixin;
	}
};

const RoundedButton = styled(Button)`
	border-radius: 1rem;
	width: 2rem;
	display: flex;
	justify-content: center;
	height: 2rem;
	& > svg {
		padding: 0;
	}
`;
const Component = styled.div`
	user-select: none;
	position: relative;
	display: block;
	& > ${List} {
		z-index: 1;
		border-radius: 0.25rem;
		background: ${p => p.theme.ebony};
		color: ${p => p.theme.cream};
		position: absolute;
		padding: 0.25rem 0;
		${p => getMixinFromVariant(p)};
		box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	}

	& > ${Button} svg {
		padding-left: 0.5rem;
		opacity: 0.5;
	}

	& > ${RoundedButton} svg {
		padding-left: 0;
		opacity: 0.5;
	}
	${ListItem} {
		padding: 0.5rem 0.5rem;
		&:hover {
			background: ${p => p.theme.nevada};
		}
	}
`;

const Toggle = ({ children, onChange, ...rest }) => {
	const [, , open, setOpen, state] = useContext(DropDownContext);
	const ref = useRef(null)
	useEffect(() => {
		if(ref.current == null ) return
		if(state == null) return
		const triggerChange = Object.getOwnPropertyDescriptor(
			HTMLButtonElement.prototype,
			"value"
		).set;
		const event = new Event("change", { bubbles: true, cancelable: true });
		triggerChange.call(ref.current, value);
		ref.current.dispatchEvent(event);
		onChange(event)
	}, [state]);
	const value = state!= null ? state.value ? state.value : state.children : null
	console.log(value)
	return (
		<Button {...rest} ref={ref} onClick={() => setOpen(!open)} value={value}>
			{children}
			<FontAwesomeIcon icon={faChevronDown} />
		</Button>
	);
};
const SplitToggle = styled(({ className, children, onClick, ...rest }) => {
	const [, , open, setOpen] = useContext(DropDownContext);
	return (
		<div className={className}>
			<Button {...rest} onClick={onClick}>
				{children}
			</Button>
			<Button {...rest} onClick={() => setOpen(!open)}>
				<FontAwesomeIcon icon={faChevronDown} />
			</Button>
		</div>
	);
})`
	${Button}:first-of-type {
		border-radius: 0.25rem 0 0 0.25rem;
	}
		${Button}:last-of-type {
		border-radius: 0 0.25rem 0.25rem 0;
	}

`;
const KebabButton = props => {
	const [, , open, setOpen] = useContext(DropDownContext);
	return (
		<RoundedButton {...props} onClick={() => setOpen(!open)}>
			<FontAwesomeIcon icon={faEllipsisV} />
		</RoundedButton>
	);
};

const Menu = ({ children, ...rest }) => {
	const [index, setIndex, open, setOpen] = useContext(DropDownContext);
	const ref = useRef(null);

	const handleKeyDown = e => {
		const length = children.length;
		if (e.keyCode === 40) {
			// arrow down
			if (index < length - 1) {
				setIndex(index + 1);
			}
			e.preventDefault();
		} else if (e.keyCode === 38) {
			// arrow up
			if (index > 0) setIndex(index - 1);
			e.preventDefault();
		} else if (e.keyCode === 27 && index >= 0) {
			// esc
			setOpen(false);
		} else if (e.keyCode === 13 && index >= 0) {
			// enter

			setOpen(false);
		} else {
			e.persist();
		}
	};

	return (
		open === true && (
			<List ref={ref} {...rest} onKeyDown={handleKeyDown} items={React.Children.toArray(children)}>
				{(item, i) => React.cloneElement(item, { key: 'select-' + i, isActive: i === index })}
			</List>
		)
	);
};

const DropDown = ({ children, onChange, ...rest }) => {
	const [index, setIndex] = useState(-1);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	const ref = useRef(null);

	const handleKeyDown = e => {
		if (e.keyCode === 40) {
			// arrow down
			if (open === false) setOpen(true);
			if (open === true && index === -1) {
				setIndex(0);
			}
			e.preventDefault();
		} else if (e.keyCode === 38) {
			// arrow up
			e.preventDefault();
		} else if (e.keyCode === 27 && index >= 0) {
			// esc
			setOpen(false);
			setIndex(-1);
		} else if (e.keyCode === 13 && index >= 0) {
			// enter
			setOpen(false);
			setIndex(-1);
		} else {
			e.persist();
		}
	};

	const handleBlur = e => {
		if (e.relatedTarget === null || !ref.current.contains(e.relatedTarget)) {
			setIndex(-1);
			setOpen(false);
		}
	};

	return (
		<DropDownContext.Provider value={[index, setIndex, open, setOpen, value, setValue]}>
			<Component ref={ref} {...rest} onKeyDown={handleKeyDown} onBlur={handleBlur} onChange={() => { console.log("hlooa")}}>
				{children}
			</Component>
		</DropDownContext.Provider>
	);
};


DropDown.defaultProps = {
	onChange: null,
};


DropDown.ListItem = ListItem;
DropDown.Toggle = Toggle;
DropDown.SplitToggle = SplitToggle;
DropDown.Menu = Menu;
DropDown.KebabButton = KebabButton;

/** @component */
export default DropDown;
/******/
