import Label from './Label';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';

const SelectedList = styled.ul`
	position: relative;
	padding-left: 0.25rem;
	padding-bottom: 0.25rem;

	background: ${p => p.theme.white};
	border: 1px solid ${p => p.theme.gray};
	border-radius: 0.25rem;
	display: flex;
	flex-wrap: wrap;
	&:focus-within {
		border-color: ${p => p.theme.aqua};
	}
	margin: 0;
	list-style: none;
	& > li {
		font-size: small;
		background: ${p => p.theme.aqua};
		height: 26px;
		padding: 0.25rem 0.5rem;
		margin: 0.25rem 0.25rem 0 0;
		box-shadow: ${p => p.theme.boxShadow};
		color: ${p => p.theme.white};
		border-radius: 0.25rem;
		display: flex;
		align-items: center;
		&:active,
		&:focus {
			background: ${p => p.theme.gray};
			outline: none;
		}
		&:hover {
			background: ${p => p.theme.gray};
			cursor: pointer;
		}
	}
`;
const Fallback = styled.li`
	color: ${p => p.theme.ebony} !important;
	&:active,
	&:hover,
	&:focus {
		background: transparent !important;
		outline: none !important;
		cursor: default !important;
	}
`;
const DataList = styled.ul`
	z-index: 1;
	margin-top: 0.25rem;
	padding: 0.25rem 0;
	position: absolute;
	top: 100%;
	box-shadow: ${p => p.theme.boxShadow};
	right: 0;
	left: 0;
	max-height: 20rem;
	overflow: scroll;
	border-radius: 0.25rem;
	background: ${p => p.theme.white};
	border: 1px solid ${p => p.theme.gray};
	list-style: none;
	& > li {
		background: none;
		padding: 0.5rem 1rem;
		color: ${p => p.theme.aqua};
		&:hover {
			background: ${p => p.theme.alabaster};
			cursor: pointer;
		}
	}
`;

// This is the inner that holds the query, it is wrapped by the Relative Component above
const CustomInput = styled(Input.DefaultComponent)`
	padding-left: 0;
	padding-bottom: 0.25rem;
	font-size: medium;
	border-color: transparent;
	&:hover,
	&:focus {
		border-color: transparent;
	}
`;

const initialState = {
	query: '',
	shown: false,
	current: [],
	// the datalist set can be static or dynamic, in the case it is static
	// we don't want the datalist to be reset to [] every time the user selects
	// an item thus we use defaultDataList as a props
	default: [],
	// selected are the blue tags and correspond to the value returned by this
	// input
	selected: [],
	// extract is passed as a props to the Component, it is used to get a string
	// from the item passed in the datalist
	extract: i => i,
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'select':
			// when the user select an item in the list we simply
			// reset the query input and add the payload to the selected list of item
			return {
				...state,
				// hide the datalist once an option is selected
				shown: false,
				current: state.default
					// nasty filter, it makes sure the datalist is not repopulated with
					// option previously selected
					// either the option is currently selected i.e. payload
					// or the option is already selected, thus the selected.every....
					.filter(
						i =>
							state.extract(i) !== action.payload &&
							state.selected.every(selected => state.extract(i) !== state.extract(selected))
					),
				selected: [...state.selected, action.payload],
				query: '',
			};
		case 'deselect':
			// if a user click on one of the item in the selected list, simply remove
			// it from the state.
			return {
				...state,
				selected: [...state.selected.filter((item, i) => i !== action.payload)],
			};
		case 'reset':
			// datalist can be dynamic, in this case every time the datalist prop change
			// in the Component, we change the current list
			return {
				...state,
				current: action.payload,
			};
		case 'click':
			return {
				...state,
				shown: true,
			};
		case 'blur': {
			return {
				...state,
				shown: false,
			};
		}
		case 'change':
			// When the user types in the input the query change, update the query state
			return {
				...state,
				// remove datalist if the user delete characters
				current: action.payload.length < state.query.length ? state.default : state.current,
				query: action.payload,
				// show the list only if the user is typing in
				shown: action.payload.length > 0,
			};
		default:
			return state;
	}
};

/**
 * This component allow user to select multiple value in a row.
 * A datalist is prompted when the user start typing in
 * The datalist can be dynamic which means it can be reset or change depending
 * on what the user types.
 * It works well in addition of a ElasticSearch or fuzzy search list.
 *
 * It has been deeply inspired by the dropdown of semantic-ui
 * @see https://semantic-ui.com/modules/dropdown.html
 * @param datalist holds the items to be prompted when the user types in
 * @param defaultDatalist in the case the datalist varies over time is useful
 *        for showing the same datalist after selection.
 * @param extract is a method used to get a string from an item of the datalist,
 *        this string is later shown as in the selected items
 * @param onInputChange is triggered when the user types in the input
 *        we can define handler outside this component to update elements like the
 *        datalist
 * @param label
 * @param onChange
 * @param defaultValue
 * @param DataListItem
 * @param DefaultDataListItem
 * @returns {*}
 * @constructor
 */
const MultipleSearchInput = ({
	defaultDatalist,
	datalist = defaultDatalist,
	fallback,
	extract,

	onInputChange,
	label,
	readOnly,
	onChange,
	defaultValue,
	// the two following component are used to display the datalist item
	// and the query below the datalist
	DataListItem,
	DefaultDataListItem,
}) => {
	// if defaultValue is set place items already selected in the state
	const [state, dispatch] = React.useReducer(reducer, {
		...initialState,
		extract: extract,
		default: defaultDatalist,
		selected: defaultValue,
	});

	// reset effect: in the case of a dynamic datalist
	// everytime the datalist changes it update the internal state of this
	// component.
	useEffect(() => {
		dispatch({
			type: 'reset',
			payload: datalist,
		});
	}, [datalist]);

	// calls the onChange handler everytime the selection is updated
	useEffect(() => {
		if (state.selected.length === 0) return;

		// fakes the structure of an event sent by a <select multiple/> element
		// instead of populating value, it stores the info in selectedOptions
		// we are limited if we use the native select element as <option> value prop
		// can only be strings.
		// in our case we want to pass objects
		onChange({
			target: {
				selectedOptions: state.selected,
			},
		});
	}, [state.selected.length]);

	// handleBlur checks if the active element is a child of this Component
	// if not it will dispatch the blur action which will hide the options display
	const handleBlur = e => {
		const { currentTarget } = e;

		// Check the newly focused element in the next tick of the event loop
		setTimeout(() => {
			console.log(document.activeElement);
			// Check if the new activeElement is a child of the original container
			if (!currentTarget.contains(document.activeElement)) {
				// You can invoke a callback or add custom logic here
				dispatch({ type: 'blur' });
			}
		}, 0);
	};

	const handleChange = e => {
		// something goes wrong when trying to access e.target.value multiple time,
		// this is why we deconstruct it this variable
		const value = e.target.value;
		dispatch({ type: 'change', payload: value });
		// onChange is called outside the component, so we can trigger specific behaviour
		// when the user changes the input.
		// i.e. loading a datalist depending on the input
		onInputChange({ target: { value } });
	};

	const handleClick = item => {
		return dispatch({ type: 'select', payload: item });
	};

	// if there is no available option and the user has not typed yet
	// display the fallback message (default being: no option available)
	const shouldDisplayList = state.current.length > 0 || state.query !== '';

	return (
		<div onBlur={handleBlur}>
			<Label>{label}</Label>
			{/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
			<SelectedList>
				{state.selected.map((item, i) => (
					<li key={i} onClick={() => dispatch({ type: 'deselect', payload: i })}>
						{extract(item)}&nbsp;&times;
					</li>
				))}
				<CustomInput
					type="text"
					value={state.query}
					onClick={() => dispatch({ type: 'click' })}
					onChange={handleChange}
				/>
				{/* display the datalist */}
				{state.shown === true && (
					<DataList>
						{shouldDisplayList === true ? (
							state.current.map((item, i) => (
								<DataListItem key={i} onClick={handleClick} item={item} tabIndex={0} />
							))
						) : (
							<Fallback>{fallback}</Fallback>
						)}
						{/*
						 * if the user click on the component, and the query is empty it will show a blank line
						 * we can prevent that with the following condition
						 */}
						{state.query !== '' && (
							<DefaultDataListItem query={state.query} onClick={handleClick} tabIndex={0} />
						)}
					</DataList>
				)}
			</SelectedList>
		</div>
	);
};

MultipleSearchInput.defaultProps = {
	defaultDatalist: [],
	defaultValue: [],
	fallback: 'No option available',
	extract: i => i,
	onChange: () => {},
	onInputChange: () => {},
	DataListItem: ({ item, onClick, ...rest }) => (
		<li onClick={() => onClick(item)} {...rest}>
			{item}
		</li>
	),
	DefaultDataListItem: ({ query, onClick, ...rest }) => (
		<li onClick={() => onClick(query)} {...rest}>
			{query}
		</li>
	),
};
export default MultipleSearchInput;
