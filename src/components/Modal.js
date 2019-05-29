import styled from 'styled-components';
import Span from './Span';
const Modal = styled.dialog`
	::backdrop {
		backdrop-filter: brightness(60%);
	}
	border: 1px solid transparent;
	border-radius: 0.3rem;
	& > aside {
		display: flex;
		justify-content: flex-end;
		svg {
			color: ${p => p.theme.nevada};
		}
	}
	& > header {
		display: flex;
		flex-direction: column;
		& > ${Span} {
			text-align: center;
			line-height: normal;
		}
	}
	& > main {
		padding: 0 1.5rem;
		& > form {
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
	}
	& > footer {
		display: flex;
		justify-content: flex-end;
		padding: 0 1.5rem;
	}
`;

/** @Component */
export default Modal;
