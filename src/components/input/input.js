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

  ${({ error }) => error && css`
    border: 1px solid red;
  `}
`

export const StyledSearchInput = styled.input`
  border: 1px solid transparent;
  border-radius: 8px;
  height: 40px;
  font-size: 14px;
  padding: 0 20px;
  width: 300px;
  outline: none;
  z-index: 1;
  
  -webkit-box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5); 
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5);
    
  &:focus {
    border-color: blue;
    border-radius: 8px;
  }

  &.square-bottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export default StyledInput;