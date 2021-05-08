import styled from 'styled-components';

const StyledSearchResultItem = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 8px 16px;
  width: 100%;

  i {
    margin-right: 8px;
  }

  &:hover {
    background-color: lightblue;
  }
`

export default StyledSearchResultItem;