import styled from 'styled-components';

const Form = styled.form``;
Form.Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-column-gap: ${p => p.theme.spacing.medium};
	margin-bottom: ${p => p.theme.spacing.medium};
`;

Form.Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;


export default Form;
