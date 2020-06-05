import styled from 'styled-components';

// spinner should be accessible
// according to https://sap.github.io/techne/loading-spinner.html
// there are two aria attributes that we can use:
// 1. aria-busy
// 2. aria-label
const Spinner = styled.div.attrs({ 'aria-busy': true, 'aria-label': 'loading' })`
	display: inline-block;
	border: 0.125rem solid ${p => p.theme[p.color]};
	border-radius: 50%;
	border-top-color: transparent;
	width: 1rem;
	height: 1rem;
	animation: spin 500ms linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

Spinner.defaultProps = {
	color: 'aqua',
};

export default Spinner;
