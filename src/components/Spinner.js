import styled from 'styled-components';

const Spinner = styled.div`
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
