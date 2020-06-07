import React, { useReducer, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import fuzzy from 'fuzzy';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Label from './Label';

const Hidden = styled.input`
	display: none;
`;

const CustomInput = styled(Input.DefaultComponent)`
	flex: 1;
	border: none;
	padding: 0;
`;

const Option = styled.li`
	flex: 1;
	list-style: none;
	line-height: 1.5;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%
		${p =>
			p.active === true &&
			css`
				background: ${p.theme.cream};
			`};
`;

const List = styled.ul`
	font-family: sans-serif;
	text-align: center;
	box-sizing: border-box;
	max-height: 10rem;
	overflow-y: auto;
	width: 100%;

	::-webkit-scrollbar {
		width: 0.5rem;
	}

	::-webkit-scrollbar-track {
		background: ${p => p.theme.cream};
		border-radius: 0.5rem;
	}

	::-webkit-scrollbar-thumb {
		background: ${p => p.theme.nevada};
		border-radius: 0.5rem;
	}
`;
const Div = styled.div`
	display: flex;
	border-radius: 0.25rem;
	cursor: pointer;
	${p =>
		p.readOnly
			? css`
					cursor: default;
					padding: 0.5rem 0;
			  `
			: css`
					border: 1px solid ${p => p.theme.nevada};
					padding: 0.5rem 1rem;
			  `};
	align-items: center;
	&:hover,
	&:focus,
	&:focus-within {
		border-color: ${p => p.theme.aqua};
	}
`;

// This List Wrapper is required to offset the scrollbar on the List
const ListWrapper = styled.div`
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const Component = styled.div`
	position: relative;
	& ${Input.DefaultComponent} {
		/* prevent overflow from the container on small screen*/
		width: 100%;
	}
	&:focus,
	&:focus-within {
		& ${Input.DefaultComponent} {
			opacity: 0.5;
			&:not(:focus) {
				cursor: pointer;
			}
		}
		& ${Div} {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			border-bottom-color: transparent;
		}
	}

	${p =>
		p.required === true &&
		css`
			${Label}:after {
				display: inline;
				content: '*';
				color: ${p => p.theme.aqua};
				margin-left: 0.25rem;
			}
		`}
	${ListWrapper} {
		padding-right: 1rem;
		z-index: 1;
		background: white;
		opacity: 1;
		border: 1px solid ${p => p.theme.aqua};
		border-top-width: 0;
		border-radius: 0 0 0.25rem 0.25rem;
		display: block;
		left: 0;
		right: 0;
		position: absolute;
	}
	${List} {
		padding: 0;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		margin: 0;
		display: block;
		text-align: left;
		color: black;
		list-style: none;
		${Option} {
			padding: 0.25rem 0.5rem;
			margin: 0.25rem 0.5rem;
			border-radius: 0.125rem;
		}

		${Option}:hover {
			background: ${p => p.theme.cream};
			cursor: pointer;
		}
		${Option} [aria-disabled]:hover {
			background: inherit;
			cursor: default;
		}
	}
	input:hover ~ ${List}, input:focus ~ ${List}, ${List}:hover {
		opacity: 1;
		display: block;
	}

	${Input.DefaultComponent} {
		position: relative;
	}

	${Input}:after {
		content: '*';
		position: absolute;
		bottom: 0;
		padding: 0.5rem;
	}
`;

const init = ({ value, original }) => ({
	value: value || '',
	open: false,
	// in case we have a valid defaultValue
	current: original.find(o => o.props.value === value) || null,
	index: null,
	filtered: original,
	original: original,
});

const reducer = (state, action) => {
	switch (action.type) {
		// c.f. MED-1254
		// there is a useEffect in the component with more explanation
		case 'defaultValueChange':
			return {
				...state,
				value: action.payload,
			};
		case 'valueChange':
			return {
				...state,
				current: state.filtered.find(o => o.value === action.payload),
				value: action.payload,
			};
		case 'up':
			return {
				...state,
				index: state.index > 0 ? state.index - 1 : null,
			};
		case 'down':
			return {
				...state,
				index:
					state.index === null
						? 0
						: state.index < state.filtered.length - 1
						? state.index + 1
						: state.index,
			};
		case 'change':
			return {
				...state,
				filtered: fuzzy
					.filter(action.payload, state.original, {
						extract: c => {
							// prefer to search using the children instead of the value
							// c.f. MED-1213
							if (typeof c.props.children === 'string') {
								return c.props.children;
							}
							return c.props.value;
						},
					})
					.map(r => r.original),
				value: action.payload,
			};
		case 'focus':
			return {
				...state,
				open: true,
			};
		case 'blur':
			const isValueIncluded = state.filtered.map(o => o.value).includes(state.value);
			return {
				...state,
				current:
					state.index != null
						? state.filtered[state.index]
						: state.value === ''
						? null
						: state.filtered.length > 0
						? isValueIncluded === true
							? state.filtered.find(o => o.value === state.value)
							: state.filtered[0]
						: null,
				value: '',
				filtered: state.original,
				open: false,
				index: null,
			};
		case 'click':
			return {
				...state,
				open: false,
				value: '',
				current: action.payload,
				filtered: state.original,
			};
		default:
			return state;
	}
};
const Select = ({
	children,
	id,
	label,
	required,
	placeholder,
	onChange,
	fallback,
	name,
	readOnly,
	value,
	defaultValue,
	...rest
}) => {
	const ref = useRef(null);
	const hidden = useRef(null);
	const [state, dispatch] = useReducer(
		reducer,
		{ original: React.Children.map(children, c => c), value: value || defaultValue },

		init
	);

	// The following useEffect update the value of the component when the default value change
	// this is the case with the YamlSelect, it start with undefined and when the resources are loaded
	// the defaultValue is updated.
	// c.f. MED-1254
	useEffect(() => {
		if (defaultValue != null) {
			dispatch({ type: 'defaultValueChange', payload: defaultValue });
		}
	}, [defaultValue]);
	useEffect(() => {
		if (value != null) {
			dispatch({ type: 'valueChange', payload: value });
		}
	}, [value]);

	const onMouseDown = index => {
		dispatch({ type: 'click', payload: index });
	};
	useEffect(() => {
		if (state.open === true) {
			ref.current.focus();
		}
	}, [state.open]);

	useEffect(() => {
		if (hidden.current == null || state.current == null) {
			return;
		}
		const triggerChange = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
		const event = new Event('change', { bubbles: true, cancelable: true });
		triggerChange.call(hidden.current, state.current.props.value);
		hidden.current.dispatchEvent(event);
	}, [state.current, hidden.current]);

	const onKeyDown = e => {
		if (e.key === 'Enter') {
			dispatch({ type: 'enter' });
			ref.current.blur();
		} else if (e.key === 'Escape') {
			ref.current.blur();
		} else if (e.key === 'ArrowDown') {
			dispatch({ type: 'down' });
		} else if (e.key === 'ArrowUp') {
			dispatch({ type: 'up' });
		}
	};

	const onFocus = () => {
		// prevent focus to happen when the user click on readOnly element
		if (readOnly === false) {
			dispatch({ type: 'focus' });
		}
	};

	const onBlur = () => dispatch({ type: 'blur' });

	return (
		<Component required={required} readOnly={readOnly} onKeyDown={onKeyDown} onBlur={onBlur}>
			<Hidden
				ref={hidden}
				type="text"
				id={id}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
			/>
			<Label htmlFor={id}>{label}</Label>
			<Div readOnly={readOnly} onClick={onFocus} onFocus={onFocus}>
				{state.open === false && state.current != null ? (
					React.createElement(Select.Option, { ...state.current.props })
				) : (
					<CustomInput
						ref={ref}
						{...rest}
						required={required}
						onChange={e => dispatch({ type: 'change', payload: e.target.value })}
						value={state.value}
						type="text"
						autoComplete="off"
						placeholder={readOnly === true ? (state.value !== '' ? state.value : '–') : placeholder}
						readOnly={readOnly}
					/>
				)}
				{readOnly === false && <FontAwesomeIcon icon={faCaretDown} />}
			</Div>
			{state.open === true && readOnly === false && (
				<ListWrapper>
					<List>
						{state.filtered.length > 0 ? (
							React.Children.map(state.filtered, (c, i) => {
								if (c.props.value == null)
									console.warn('value prop  is not set in Select option !!!', c);
								return React.cloneElement(c, {
									...c.props,
									active: state.index === i,
									onMouseDown: () => onMouseDown(c),
								});
							})
						) : (
							<li aria-disabled>{fallback}</li>
						)}
					</List>
				</ListWrapper>
			)}
		</Component>
	);
};

//Make Option available as a SubComponent
// <Select.Option>....</Select.Option>
Select.Option = Option;

Select.defaultProps = {
	readOnly: false,
	id: null,
	required: false,
	placeholder: 'Choisir une option',
	fallback: 'Aucun résultat',
};

export default Select;
