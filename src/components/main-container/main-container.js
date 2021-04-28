import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${({ centered }) => centered && css`
    align-items: center;
    justify-content: center;
  `}

  ${({ row }) => row && css`
    flex-direction: row;
  `}
`

export default StyledContainer;