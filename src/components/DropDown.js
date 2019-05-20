import styled from 'styled-components';
import { darken } from 'polished';

const DropDown = styled.div`
	user-select: none;
	& > button {
		background-color: ${p => p.theme[p.backgroundColor]};
		color: ${p => p.theme[p.color]};
		font-family: 'Inter', sans-serif;
		font-size: ${p => p.theme.medium};
		padding-left: 1rem;
		text-align: left;
		border-radius: 0.2rem;
		outline: none;
	}
`;

/** @Component */
export default DropDown;
