import styled from 'styled-components';
import SearchResultItem from './searchResultItem';
import { useEffect, useRef,useCallback } from 'react';
import useClickOutside from './../../../utilities/click-outside';

const StyledSearchResultContainer = styled.div`
  background-color: white;
  border-top: 1px solid gray;
  position: relative;
  width: 300px;
	max-height: 300px;
  z-index: 5;
	overflow-y: auto;

  -webkit-box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5); 
  box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.5);
	h1,h2,h3,h4,h5,h6 {
		margin: 2px;
	}
`
const SearchStopResults = ({ searchResults, onResultItemClick, selectedStop, setSearchStopResult }) => {
	const slicedSearchResults = searchResults.slice(0, 9);
	const ref = useRef()
	const handleClickOutside = useCallback(() => setSearchStopResult(['']), [setSearchStopResult]);
	useClickOutside(ref,handleClickOutside)
	return <StyledSearchResultContainer ref={ref}>
		{
			selectedStop.cenefa_paradero ?
				<SearchResultItem key={selectedStop.cenefa_paradero} onClick={() => onResultItemClick(selectedStop)}>
					<i className="material-icons-round">directions_bus</i>
					{selectedStop.nombre_paradero && <h4>{selectedStop.nombre_paradero}</h4>}
					{selectedStop.cenefa_paradero && <h6>{selectedStop.cenefa_paradero}</h6>}
					{selectedStop.direccion_paradero && <h6>{selectedStop.direccion_paradero}</h6>}
				</SearchResultItem>
				:
				slicedSearchResults.map((result) =>
					<SearchResultItem key={result.cenefa_paradero} onClick={() => onResultItemClick(result)}>
						<i className="material-icons-round">directions_bus</i>
						{result.nombre_paradero && <h4>{result.nombre_paradero}</h4>}
						{result.cenefa_paradero && <h6>{result.cenefa_paradero}</h6>}
						{result.direccion_paradero && <h6>{result.direccion_paradero}</h6>}
					</SearchResultItem>
				)}


	</StyledSearchResultContainer>

}

export default SearchStopResults;