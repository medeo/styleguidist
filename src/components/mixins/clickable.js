import { css } from 'styled-components';

const clickableMixin = css`
	transform: translateY(0px);
	transition: ease-out transform 200ms, ease-out color 125ms;
	&:active {
		transform: translateY(1px);
	}
`;

export default clickableMixin;
