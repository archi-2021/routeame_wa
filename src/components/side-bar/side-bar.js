import styled, { css } from 'styled-components';
import StyledButton from './../button'
import StyledInput from './../input'

const StyledContainer = styled.div`

  height: 100%; 
  width: 20%; 
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #1e54d9; 
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;


  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #FFF;
    display: block;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  a.active {
    background-color: #2196F3;
    color: white;
  }

  
  
`

const SideBar = () => {

  return (
    <StyledContainer>
      <div>
        <span><StyledInput type="text"></StyledInput></span>
        <StyledButton>Buscar Ruta</StyledButton>
      </div>
      <div>
        <span><StyledInput type="text"></StyledInput></span>
        <StyledButton>Buscar Paradas de ruta</StyledButton>
      </div>
      <div>
        <span><StyledInput type="text"></StyledInput></span>
        <StyledButton>Buscar Parada</StyledButton>
      </div>

    </StyledContainer>
  )
}

export default SideBar;