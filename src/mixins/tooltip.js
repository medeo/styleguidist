import { css } from 'styled-components';

export default css`
	[data-tooltip] {
		position: relative;
		z-index: 2;
		cursor: pointer;
	}
	[data-tooltip]:before,
	[data-tooltip]:after {
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	[data-tooltip]:hover:before,
	[data-tooltip]:hover:after {
		opacity: 1;
		visibility: visible;
	}
	[data-tooltip]:before {
		text-transform: initial;
		padding: ${p => p.theme.spacing.small};
		border-radius: 0.25rem;
		background: ${p => p.theme.ebony};
		color: ${p => p.theme.alabaster};
		width: 10rem;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.3125rem;
		position: absolute;
		content: attr(data-tooltip);
	}

	[data-tooltip]:after {
		position: absolute;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		border-top: 0.3125rem solid ${p => p.theme.ebony};
		border-right: 0.3125rem solid transparent;
		border-left: 0.3125rem solid transparent;
		content: ' ';
		font-size: 0;
		line-height: 0;
	}
`;
