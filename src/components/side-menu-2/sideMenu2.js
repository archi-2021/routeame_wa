import styled from 'styled-components';

import { StyledSearchInput } from '../../components';
import SearchResults from './search-results/searchResults';


const StyledSideMenu2Container = styled.div`
  background-color: #FCFCFC;
  border-radius: 6px;
  border: 1px solid black;
  margin: 20px 20px;
  
  padding: 4px;
  position: absolute;
  width: 333px;
  top: 0;
  z-index: 1;
  
`

const StyledContainer = styled.div`
  
  background-color: #0098f0;
  border-radius: 4px;
  border: 0.5px solid black;
  margin: 5px 5px;
  padding:5px 5px;
  & > * {
    margin: 5px 0;
  }
`

const StyledReportContainer = styled.div`
  background-color: #0098f0;
  border-radius: 4px;
  border: 0.5px solid black;
  margin: 5px 5px;
  padding:5px 5px;
  & > * {
    margin: 5px 0;
  }
`

const StyledButton = styled.button`
  width: 100%;
  border-radius: 6px;
  background-color: #FFD000;
  border: 0.5px solid black;
  font-size: 19px;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  margin-right: 5px;

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #FFF;
    transform: translateY(4px);
  }

  span {
    
    position: relative;
    transition: 0.5s;
    &:after {
      content: ;
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }

  &:hover {
    span{
      padding-right: 15px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
`


const SideMenu2 = ({ onSearchInputChange, searchInputValue, searchResults, onResultItemClick }) => {
  return <StyledSideMenu2Container>
    <StyledContainer>
      <h3>
        Busqueda
      </h3>
      <div>
        <strong>Ruta</strong>
      </div>
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
      <div>
        <strong>Paradero</strong>
      </div>
      <StyledSearchInput type="text"></StyledSearchInput>
    </StyledContainer>


    <StyledContainer>
      <h3>
        Reporte
      </h3>
      <div>
        <strong>id ruta</strong>
      </div>
      <StyledSearchInput type="text"></StyledSearchInput>
      <div>
        <strong>Fecha inicio</strong>
      </div>
      <StyledSearchInput type="datetime-local"></StyledSearchInput>
      <div>
        <strong>Fecha final</strong>
      </div>
      <StyledSearchInput type="datetime-local"></StyledSearchInput>
      <StyledButton>
        <span>Generar</span>
      </StyledButton>
    </StyledContainer>
    <StyledReportContainer>
    </StyledReportContainer>
  </StyledSideMenu2Container>

}

export default SideMenu2;