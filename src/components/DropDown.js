import styled, { css } from 'styled-components';
import List from './List';
import { darken } from 'polished';
import clickableMixin from '../mixins/clickable';

const dropDownMixin = css`
display: flex;
justify-content: space-between;
align-items:center;
background-color: ${p => p.theme[p.backgroundColor]};
color: ${p => (p.backgroundColor === 'white' ? p.theme.black : 'white')};
font-family: 'Inter', sans-serif;
font-size: ${p => p.theme.medium};
border: solid 1px ${p => p.theme.cream};
padding-right: 1rem;
box-sizing: border-box;
border-radius: 0.3rem;
		& > span {
			padding-left: 1rem;
		}
		& > .iconChevron {
			color: ${p => p.theme.aqua};
		}
	}
	&:focus-within > ${List} {
			visibility: visible;
			opacity:1;
	}
	&:hover {
		border-radius: 0.3rem 0.3rem 0 0;
	}
	& > ${List} {
		/*box-shadow: ${p => p.backgroundColor === 'white' ? '-0.125rem 0.1875rem 0.25rem #9AA5B1' : 'none'};*/
		  min-width: 6rem;
			border-radius: 0 0 0.3rem 0.3rem;
			position: absolute;
      visibility: hidden;
      opacity:0;
			align-self:flex-start;
			padding-top: 2.5rem;
		& > li {
			${clickableMixin};
			box-sizing: border-box;
			display: flex;
			align-items: center;
			border: solid 0.5px transparent;
			width: 100%;
			border-color:${p => (p.backgroundList === 'white' ? p.theme.cream : null)};
			border-top-color:${p => (p.backgroundList === 'black' ? p.theme.ebony : null)};
			justify-content: center;
			color: ${p => (p.backgroundColor === 'white' ? p.theme.black : 'white')};
			background-color: ${p => p.theme[p.backgroundList]};
			&:last-of-type {
				border-radius: 0 0 0.3rem 0.3rem;
			}
			&:hover {
				color: ${p => p.theme.aqua};
				border-color: ${p => p.theme.aqua};
			}
		}
	}`;

const dropSideMixin = css`
	width: 5px;
	& > .iconEllipsisV {
		color: ${p => p.theme.gray};
		&:hover {
			color: ${p => p.theme.aqua};
		}
	}
	&:focus-within > ${List}, &:hover > ${List} {
		visibility: visible;
		opacity: 1;
	}
	& > ${List} {
		border: solid 1px transparent;
		border-radius: 0.3rem;
		border-color: ${p => p.theme.cream};
		position: absolute;
		visibility: hidden;
		opacity: 0;
		& > li {
			${clickableMixin};
			border: solid 0.1px transparent;
			display: flex;
			align-items: center;
			padding: 0.25rem 5.5rem 0.25rem 0.7rem;
			font-family: 'Inter', sans-serif;
			font-size: ${p => p.theme.small};
			&:hover {
				color: ${p => p.theme.aqua};
			}
		}
	}
`;

const DropDown = styled.div`
	user-select: none;
	position: relative;
	outline: none;
	${p => (p.variant === 'dropDown' ? dropDownMixin : dropSideMixin)};
`;

/** @component */
export default DropDown;
/******/
