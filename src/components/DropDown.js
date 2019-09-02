import React, { useState, useContext, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clickableMixin from '../mixins/clickable';
import Button from './Button';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const dropDownMixin = css`
		background-color: ${p => p.theme[p.backgroundColor]};
		color: ${p => (p.backgroundColor === 'white' ? p.theme.black : 'white')};
		font-family: 'Inter', sans-serif;
		font-size: ${p => p.theme.medium};
		border: solid 1px ${p => p.theme.cream};
		padding-right: 1rem;
		box-sizing: border-box;
		border-radius: 0.3rem;
		& > span {
			padding-left: 1rem;
		}
		& > .iconChevron {
			color: ${p => p.theme.aqua};
		}
	}
	& > ${List} {
		/*box-shadow: ${p =>
			p.backgroundColor === 'white' ? '-0.125rem 0.1875rem 0.25rem #9AA5B1' : 'none'};*/
			min-width: 6rem;
			width: 100%;
			border-radius: 0 0 0.3rem 0.3rem;
			position: absolute;
			align-self:flex-start;
			padding-top: 2.5rem;
		& > li {
			${clickableMixin};
			box-sizing: border-box;
			display: flex;
			align-items: center;
			border: solid 0.5px transparent;
			width: 100%;
			border-color:${p => (p.backgroundList === 'white' ? p.theme.cream : null)};
			border-top-color:${p => (p.backgroundList === 'black' ? p.theme.ebony : null)};
			justify-content: center;
			color: ${p => (p.backgroundColor === 'white' ? p.theme.black : 'white')};
			background-color: ${p => p.theme[p.backgroundList]};
			&:last-of-type {
				border-radius: 0 0 0.3rem 0.3rem;
			}
			&:hover {
				color: ${p => p.theme.aqua};
				border-color: ${p => p.theme.aqua};
			}
		}
	}`;

const dropSideMixin = css`
	& > .iconEllipsisV {
		color: ${p => p.theme.gray};
		&:hover {
			color: ${p => p.theme.aqua};
		}
	}
	&:focus-within > ${List} {
		visibility: visible;
		opacity: 1;
	}
	& > ${List} {
		border: solid 1px transparent;
		border-radius: 0.3rem;
		border-color: ${p => p.theme.cream};
		position: absolute;
		background-color: ${p => p.theme.white};
		z-index: 2;
		visibility: hidden;
		opacity: 0;
		& > li {
			${clickableMixin};
			border: solid 0.1px transparent;
			display: flex;
			align-items: center;
			padding: 0.25rem 0.7rem 0.25rem 0.7rem;
			font-family: 'Inter', sans-serif;
			font-size: ${p => p.theme.small};
			&:hover {
				color: ${p => p.theme.aqua};
			}
		}
	}
`;

const ListItem = styled(({ children, value, isActive, ...rest }) => {
	const ref = useRef(null);
	const [index, setIndex, open, setOpen, , setValue] = useContext(DropDownContext);
	useEffect(() => {
		if (isActive === true) {
			ref.current.focus();
		}
	}, [isActive]);

	const handleClick = () => {
		setIndex(-1);
		setOpen(false);
		setValue({ value, children: ref.current.innerHTML });
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

export const DropDownContext = React.createContext(false);
const leftMixin = css`
	margin-top: 0;
	right: calc(100% + 0.25rem);
	top: 0;
`;
const bottomMixin = css`
	margin-top: 0.25rem;
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
		${p => (p.variant === 'bottom' ? bottomMixin : leftMixin)};
		box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	}

	& > ${Button} svg {
		padding-left: 0.5rem;
		opacity: 0.5;
	}

	${ListItem} {
		padding: 0.5rem 0.5rem;
		&:hover {
			background: ${p => p.theme.nevada};
		}
	}
`;
//${p => (p.variant === 'dropDown' ? dropDownMixin : dropSideMixin)};

const Toggle = ({ children, ...rest }) => {
	const [, , open, setOpen] = useContext(DropDownContext);
	return (
		<Button {...rest} onClick={() => setOpen(!open)}>
			{children}
			<FontAwesomeIcon className="iconTimesCircle" icon={faChevronDown} />
		</Button>
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
			<List ref={ref} {...rest} onKeyDown={handleKeyDown} items={children}>
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
	useEffect(() => {
		if (onChange != null) onChange(value);
	}, [value]);
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
			<Component ref={ref} {...rest} onKeyDown={handleKeyDown} onBlur={handleBlur}>
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
DropDown.Menu = Menu;

/** @component */
export default DropDown;
/******/
