import styled from 'styled-components';
import { transparentize } from 'polished';

const Label = styled.label`
	line-height: 1.5;
	font-size: ${p => p.theme.small};
	color: ${p => p.theme.nevada};
	display: block;
	margin-bottom: ${p => p.theme.spacing.small};
	${p => p.required === true && requiredMixin}
`;

const RadioLabel = styled.label`
	padding: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid ${p => p.theme.gray};
	display: flex;
	align-items: center;

	& > input {
		margin-right: 0.5rem;
	}
	&:hover {
		background: ${p => transparentize(0.5, p.theme.aqua)};
	}
`;

Label.Radio = RadioLabel;

/** @component */
export default Label;
