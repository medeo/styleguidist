import styled from 'styled-components';

const Spinner = styled.div`
	margin: auto;
	border: 8px solid ${p => p.theme.aqua};
	border-radius: 50%;
	border-top: 8px solid white;
	width: 5rem;
	height: 5rem;
	animation: spin 5s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Spinner;
