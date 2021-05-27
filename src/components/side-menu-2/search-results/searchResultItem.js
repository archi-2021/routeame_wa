import styled from 'styled-components';

const StyledSearchResultItem = styled.button`

  align-items: center;
  background-color: #00347e;
	color: #f1ffff;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
	flex-direction: column;
  padding: 8px 16px;
  width: 100%;

  i {
    margin-right: 8px;
  }

	span {
		background-color: #fdcc00;
		color: #000;
		border-radius: 5px;
		padding: 2px;
	}

  &:hover {
    background-color: #0256cf;
  }
`

export default StyledSearchResultItem;