import React from 'react';
import Select from 'react-select';
import { withTheme } from 'styled-components';
import Label from './Label';

const customStyles = theme => ({
	control: (provided, state) => {
		//console.log(state);
		return {
			...provided,
			borderRadius: state.menuIsOpen ? '4px 4px 0 0' : '4px 4px 4px 4px',
			borderColor: state.isSelected ? theme.aqua : theme.gray,
			borderBottomColor: state.menuIsOpen && !state.isSelected ? 'transparent' : theme.gray,
			boxShadow: 'none',
			'&:hover': {
				borderColor: theme.aqua,
			},
			'&:active': {
				boxShadow: 'none',
			},
		};
	},
	menu: (provided, state) => ({
		...provided,
		borderRadius: '0 0 4px 4px',
		border: `1px solid ${state.isSelected ? theme.aqua : theme.gray}`,
		borderTopColor: 'transparent',
		boxShadow: theme.boxShadow,
		margin: 0,
		padding: '0 0.25rem',
	}),
	option: (provided, state) => {
		return {
			...provided,
			borderRadius: '4px',
			margin: '0.25rem 0',
			'&:hover': {
				background: theme.gray,
			},
			background: state.isSelected ? theme.aqua : state.isFocused ? theme.cream : 'transparent',
		};
	},
	indicatorSeparator: () => ({
		display: 'none',
	}),
});

const Test = ({ theme }) => {
	return (
		<div>
			<Label>test</Label>
			<Select
				styles={customStyles(theme)}
				onChange={e => console.log(e)}
				options={[
					{ value: 'chocolate', label: 'Chocolate' },
					{ value: 'strawberry', label: 'Strawberry' },
					{ value: 'vanilla', label: 'Vanilla' },
				]}
			/>
		</div>
	);
};

export default withTheme(Test);
