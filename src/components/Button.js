import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, mix, readableColor } from 'polished';
import clickableMixin from '../mixins/clickable';

const outlineMixin = css`
	background-color: transparent;
	text-transform: uppercase;
	border-style: solid;
	/* there is a special case for the white version of the button */
	border-color: ${p => (p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	color: ${p => (p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	&:focus,
	&:hover {
		border-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.ebony : p.theme[p.color])};
	}
	&:disabled {
		cursor: not-allowed;
		background-color: ${p => p.theme.cream};
		color: ${p => p.theme.white};
		border-color: transparent;
	}
`;

const plainMixin = css`
	background: ${p => p.theme[p.color]};
	box-shadow: ${p => p.theme.boxShadow};
	border-color: transparent;
	color: ${p => readableColor(p.theme[p.color])};
	text-transform: uppercase;
	&:focus,
	&:hover {
		/* there is a special case for the white version of the button */
		background-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.gray : p.theme[p.color])};
		/* check with the non-hovered bg so the font color don't flicker.*/
		color: ${p => readableColor(p.theme[p.color], p.theme.ebony)};
	}
	&:disabled {
		cursor: not-allowed;
		background-color: ${p => p.theme.cream};
		color: ${p => p.theme.white};
	}
`;

const roundMixin = css`
	${plainMixin};
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
`;

const outlineToggleMixin = css`
	${outlineMixin};
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
`;

const textMixin = css`
	${outlineMixin};
	border-color: transparent;
	background: transparent;
	&:focus,
	&:hover {
		/* there is a special case for the white version of the button */
		background-color: ${p => lighten(0.2, p.color === 'white' ? p.theme.gray : p.theme[p.color])};
		/* check with the non-hovered bg so the font color don't flicker.*/
		color: ${p => readableColor(p.theme[p.color], p.theme.ebony)};
	}
`;

const selectMixin = p => {
	switch (p.variant) {
		case 'toggle':
		case 'toggle-primary':
			return roundMixin;
		case 'toggle-outline':
		case 'toggle-secondary':
			return outlineToggleMixin;
		case 'secondary':
		case 'outline':
			return outlineMixin;
		case 'tertiary':
		case 'text':
			return textMixin;
		case 'primary':
		case 'plain':
		default:
			return plainMixin;
	}
};

/**
 * Par défaut, la taille des boutons est à `small`.
 * Comme les textes des boutons sont capitaliśes on obtient une bonne lisibilité.
 * Comme sur [Stripe](https://stripe.com) les boutons sont animés lors du clic.
 * @example ./Tooltip.md
 * @see See https://stripe.com
 * @author medeo
 */
const Button = styled.button`
	/* we need to specify the width and the display to avoid misalignment */
	/* Especially when applying this style to a Link via the 'as' prop */
	border: 1px solid transparent;
	display: inline-block;

	font-weight: ${p => p.theme.bold};
	// the two following lines are useful when using the Button style in a <a> anchor
	line-height: 1.2rem;
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	font-size: ${p => p.theme[p.size]};
	outline: none;
	cursor: pointer;
	${p => selectMixin(p)};
	${clickableMixin};
`;

Button.defaultProps = {
	color: 'aqua',
	variant: 'plain',
	size: 'small',
};

Button.propTypes = {
	/**
	 * the color theme for the button
	 */
	color: PropTypes.oneOf(['aqua', 'ocean', 'scarlett', 'emerald', 'mustard', 'gray', 'white']),
	/**
	 * the variant of the button
	 * tertiary === noborder
	 */
	variant: PropTypes.oneOf([
		'plain',
		'outline',
		'text',
		'toggle',
		'primary',
		'secondary',
		'tertiary',
		'toggle-primary',
		'toggle-secondary',
		'toggle-outline',
	]),
	/**
	 * The size of the button. It defines the font-size of the button.
	 * @see See [font-size property](https://www.w3schools.com/cssref/pr_font_font-size.asp)
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

/** @component */
export default Button;
