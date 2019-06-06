import styled from 'styled-components';
import Span from './Span';
const Modal = styled.dialog`
	::backdrop {
		backdrop-filter: brightness(60%);
	}
	border: 1px solid transparent;
	border-radius: 0.3rem;

	& > header {
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
		& > main {
			justify-self: stretch;
			flex: 1;
			padding-left: 1rem;
			text-align: center;
		}

		& > aside {
			display: flex;
			svg {
				color: ${p => p.theme.nevada};
			}
		}
	}
	& > main {
		padding: 0 1.5rem;
	}
	& > footer {
		display: flex;
		justify-content: flex-end;
		//padding: 0 1.5rem;
	}
`;

/** @component */
export default Modal;

/**
 * & > form {
			svg {
				color: ${p => p.theme.aqua};
			}
			& > label {
				padding-right: 0.75rem;
			}
			& > input[type='date'] {
				margin-right: 0.75rem;
				border-radius: 0.3rem;
				border: solid 2px ${p => p.theme.cream};
				outline: none;
			}
		}
 */
