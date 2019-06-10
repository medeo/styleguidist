import styled from 'styled-components'

const Label = styled.label`
  font-size: ${p => p.theme.medium};
  display: block;
  margin-bottom: ${p => p.theme.spacing.small};
`

/** @component */
export default Label;