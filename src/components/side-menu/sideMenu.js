import styled from 'styled-components';
import { StyledSearchInput } from '../../components';
import SerachResults from './search-results/searchResults';

import SearchResults from './search-results/searchResults';

const StyledSideMenuContainer = styled.div`
  background-color: transparent;
  border-radius: 5px;
  margin: 20px 20px;
  padding: 8px;
  position: absolute;
  width: 300px;
  top: 0;
  z-index: 1;
`

const SideMenu = ({ onSearchInputChange, searchInputValue, searchResults, onResultItemClick }) => {
  return <StyledSideMenuContainer>
    <StyledSearchInput
      className={searchInputValue ? 'square-bottom' : ''}
      name='search-route'
      onChange={(e) => onSearchInputChange(e.target.value)}
      placeholder='Busca una ruta o paradero: T11, La Esmeralda...'
      value={searchInputValue}
    />
    {
      searchResults.length !== 0 &&
      <SearchResults
      searchResults={searchResults || []}
      onResultItemClick={onResultItemClick}
    />
    }
  </StyledSideMenuContainer>

}

export default SideMenu;