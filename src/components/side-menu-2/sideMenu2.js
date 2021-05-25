import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledSearchInput } from '../../components';
import { ReportMenu } from './reportMenu';
import SearchResults from './search-results/searchResults';
import SearchStopResults from './search-results/searchStopResults';


const StyledSideMenu2Container = styled.div`
	
  background-color: #FCFCFC;
  border-radius: 6px;
  border: 1px solid black;
  margin: 20px 20px;
  
  padding: 4px;
  position: relative;
  width: 333px;
  top: 0;
  
  
`

const StyledContainer = styled.div`
  
  background-color: #01579b;
  border-radius: 4px;
  border: 0.5px solid black;
  margin: 5px 5px;
  padding:5px 5px;
  & > * {
    margin: 5px 0;
  }
`


const SideMenu2 = ({ onSearchInputChange, searchInputValue, searchResults, onResultItemClick, searchStopInputValue, onSearchStopInputChange, searchStopResult, onStopResultItemClick, selectedStop,setSearchStopResult }) => {
	return <StyledSideMenu2Container>
		<StyledContainer>
			<h3>
				Busqueda
      </h3>

			<StyledSearchInput
				className={searchInputValue ? 'square-bottom' : ''}
				name='search-route'
				onChange={(e) => onSearchInputChange(e.target.value)}
				placeholder='Busca una ruta: T11, La Esmeralda...'
				value={searchInputValue}
			/>
			{
				searchResults.length !== 0 &&
				<SearchResults
					searchResults={searchResults || []}
					onResultItemClick={onResultItemClick}
				/>
			}
			<StyledSearchInput
				onChange={(e) => onSearchStopInputChange(e.target.value)}
				value={searchStopInputValue}
				placeholder='Busca un paradero...'
			/>
			{
				searchStopResult.length !== 0 &&
				<SearchStopResults
					searchResults={searchStopResult || []}
					onResultItemClick={onStopResultItemClick}
					selectedStop={selectedStop}
					setSearchStopResult = {setSearchStopResult}
					
				/>
			}

		</StyledContainer>

	</StyledSideMenu2Container>

}

export default SideMenu2;