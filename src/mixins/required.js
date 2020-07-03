import { css } from 'styled-components';
import Label from '../components/Label';

const requiredMixin = css`
	${Label}::after {
		display: inline;
		content: '*';
		margin-left: 0.25rem;
		color: ${p => p.theme.aqua};
	}
`;

export default requiredMixin;
