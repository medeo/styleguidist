import styled   from 'styled-components';

const Header = styled.header`
	color: ${p => p.theme.ebony};
	padding: 0 0 2rem 0;
	border-bottom: 1px solid ${p => p.theme.ebony};
	
	& > h1 {
		font-weight: normal;
		font-size: ${p => p.theme.larger};
		margin: 0;
	}
`;


const Footer = styled.footer`
	color: ${p => p.theme.ebony};
	padding: 2rem 0 0 0;
	border-top: 1px solid ${p => p.theme.ebony};

`;

const Card = styled.section`
	background: ${p => p.theme.white};
	border-radius: 0.3125rem;
  	box-shadow: 0 .5rem 1.5rem 0 rgba(32, 67, 102, 0.06);
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: ${p => p.theme.spacing.large};
	
	& > ${Header} {
		margin-bottom: ${p => p.theme.spacing.large};
	}

	& > ${Footer} {
		margin-top: ${p => p.theme.spacing.large};
	}
`;


Card.Header = Header
Card.Footer = Footer
/** @component */

export default Card;
