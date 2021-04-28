import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  height: 30px;
  padding-left: 8px;
  width: 300px;
  outline: none;

  &:focus {
    border-color: blue;
    border-radius: 8px;
  }

  ${({error}) => error && css`
    border: 1px solid red;
  `}
`

export default StyledInput;