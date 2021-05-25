import styled from 'styled-components';
import SearchResultItem from './searchResultItem';

const StyledSearchResultContainer = styled.div`
  background-color: white;
  border-top: 1px solid gray;
  position: relative;
  width: 300px;
  z-index: 5;

  -webkit-box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5); 
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5);
`

const SerachResults = ({ searchResults, onResultItemClick }) => {
  const slicedSearchResults = searchResults.slice(0, 9);

  return <StyledSearchResultContainer>
    {slicedSearchResults.map((result) =>
      <SearchResultItem key={result.id} onClick={() => onResultItemClick(result)}>
        <i className="material-icons-round">directions_bus</i>
        <h4>{result.readableLabel}</h4>
      </SearchResultItem>
    )}
  </StyledSearchResultContainer>

}

export default SerachResults;