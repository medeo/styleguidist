import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, mix, readableColor } from 'polished';
import clickableMixin from '../mixins/clickable';

const outlineMixin = css`
	background-color: transparent;
	border-style: solid;
	/* there is a special case for the white version of the button */
	border-color: ${p => (p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	color: ${p => (p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	&:focus,
	&:hover {
		border-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	}
`;

const plainMixin = css`
	background: ${p => p.theme[p.color]};
	border-color: transparent;
	color: ${p => readableColor(p.theme[p.color])};
	&:disabled {
		cursor: not-allowed;
		background-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.gray : p.theme[p.color])};
		color: ${p => mix(0.5, p.theme[p.color], readableColor(p.theme[p.color]))};
	}
`;

/**
 * Par défaut, la taille des boutons est à `small`.
 * Comme les textes des boutons sont capitaliśes on obtient une bonne lisibilité.
 * Comme sur [Stripe](https://stripe.com) les boutons sont animés lors du clic.
 * @example ./Tooltip.md
 * @see See https://stripe.com
 * @author medeo
 */
const Button = styled.button`
	${p => (p.variant === 'outline' ? outlineMixin : plainMixin)};
	font-weight: ${p => p.theme.bold};
	padding: 0.5rem 1rem;
	font-size: ${p => p.theme[p.size]};
	border-radius: 0.25rem;
	text-transform: uppercase;
	outline: none;
	${clickableMixin};
	cursor: pointer;
	&:focus,
	&:hover {
		/* there is a special case for the white version of the button */
		background-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.gray : p.theme[p.color])};
		/* check with the non-hovered bg so the font color don't flicker.*/
		color: ${p => readableColor(p.theme[p.color], p.theme.ebony)};
	}
`;

Button.defaultProps = {
	color: 'ocean',
	variant: 'primary',
	size: 'small',
};

Button.propTypes = {
	/**
	 * the color theme for the button
	 */
	color: PropTypes.oneOf(['ocean', 'scarlett', 'emerald', 'mustard', 'gray', 'white']),
	/**
	 * the variant of the button
	 */
	variant: PropTypes.oneOf(['plain', 'outline']),

	/**
	 * The size of the button. It defines the font-size of the button.
	 * @see See [font-size property](https://www.w3schools.com/cssref/pr_font_font-size.asp)
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

/** @component */
export default Button;
