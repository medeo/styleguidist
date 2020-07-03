import React from 'react';
import BaseSelect from 'react-select';
import styled, { withTheme } from 'styled-components';
import Label from './Label';
import requiredMixin from '../mixins/required';
const noop = () => {};

const Component = styled.div`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	${p => p.required && requiredMixin}
`;

class FixRequiredSelect extends React.Component {
	state = {
		value: this.props.value || '',
	};

	selectRef = null;
	setSelectRef = ref => {
		this.selectRef = ref;
	};

	onChange = (value, actionMeta) => {
		this.props.onChange(value, actionMeta);
		this.setState({ value });
	};

	getValue = () => {
		if (this.props.value != undefined) return this.props.value;
		return this.state.value || '';
	};

	render() {
		const { SelectComponent, required, ...props } = this.props;
		const { isDisabled } = this.props;
		const enableRequired = !isDisabled;

		return (
			<div>
				<SelectComponent {...props} ref={this.setSelectRef} onChange={this.onChange} />
				{enableRequired && (
					<input
						tabIndex={-1}
						autoComplete="off"
						style={{
							opacity: 0,
							width: '100%',
							height: 0,
							position: 'absolute',
						}}
						value={this.getValue()}
						onChange={noop}
						onFocus={() => this.selectRef.focus()}
						required={required}
					/>
				)}
			</div>
		);
	}
}
const customStyles = theme => ({
	control: (provided, state) => {
		return {
			...provided,
			padding: '0.5rem',
			borderRadius: state.menuIsOpen ? '4px 4px 0 0' : '4px 4px 4px 4px',
			borderColor: state.isSelected || state.menuIsOpen ? theme.aqua : theme.gray,
			borderBottomColor: state.menuIsOpen && !state.isSelected ? 'transparent' : theme.gray,
			boxShadow: 'none',
			'&:hover': {
				borderColor: theme.aqua,
				borderBottomColor: state.menuIsOpen && !state.isSelected ? 'transparent' : theme.aqua,
			},
			'&:active': {
				boxShadow: 'none',
			},
		};
	},
	menu: (provided, state) => ({
		...provided,
		borderRadius: '0 0 4px 4px',
		border: `1px solid ${theme.aqua}`,
		borderTopColor: 'transparent',
		boxShadow: theme.boxShadow,
		margin: 0,
		padding: '0 0.25rem',
	}),
	option: (provided, state) => {
		return {
			...provided,
			borderRadius: '4px',
			padding: '0.5rem',
			margin: '0.25rem 0',
			'&:hover': {
				background: theme.gray,
			},
			background: state.isSelected ? theme.aqua : state.isFocused ? theme.cream : 'transparent',
		};
	},
	noOptionsMessage: provided => ({
		...provided,
		padding: '0.5rem',
	}),

	container: provided => ({
		...provided,
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
});
const Test = props => (
	<Component required={props.required}>
		<FixRequiredSelect
			{...props}
			styles={customStyles(props.theme)}
			SelectComponent={BaseSelect}
			options={props.options || options}
		/>
		<Label>{props.label}</Label>
	</Component>
);

export default withTheme(Test);
