
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { StyledSearchInput } from '../../components';

const StyledContainer = styled.div`
  
  background-color: #00347e;
	color: #F1FFFF;
  border-radius: 4px;
  border: 0.5px solid black;
  margin: 5px 5px;
  padding:5px 5px;
  & > * {
    margin: 5px 0;
  }
	position: relative;
  width: 313px;
  top: 0;
  
`

const StyledGlobalContainer = styled.div`
	
  background-color: #FCFCFC;
  border-radius: 6px;
  border: 1px solid black;
  margin: 20px 20px;
  
  padding: 4px;
  position: relative;
  width: 333px;
  top: 0;
	overflow-y: auto;
	overflow-x: hidden;
`


const StyledReportContainer = styled.div`
	width: 300px;
	background-color: #FCFCFC;
	border-radius: 4px;
	border: 0.5px solid black;
	padding:5px 5px;
	& > * {
		margin: 5px 0;
	}
`

const StyledButton = styled.button`
  width: 300px;
  border-radius: 6px;
  background-color: #FFD000;
  border: 0.5px solid black;
  font-size: 19px;
  padding: 8px;
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

export const ReportMenu = ({ idReport, initialDateReport, finalDateReport, onReportIdChange, onReportInitialDateChange, onReportFinalDateChange, onGenerateReportClick, id ,nombreRuta, localidadOrigen, localidadDestino, cantidadBuses, paraderos }) => {
	console.log("REPORT MENU")
	console.log(nombreRuta, localidadOrigen, localidadDestino, cantidadBuses, paraderos);

	const [displayParaderos, setDisplayParaderos] = useState([])
	
	useEffect(() => {
		if (paraderos == [] || paraderos == undefined) {
			setDisplayParaderos([""]);
			return;
		}
		setDisplayParaderos(paraderos.map((paradero) => <li key={paradero}>{paradero}</li>))
	}, [paraderos])


	return <StyledGlobalContainer>
		<StyledContainer>
			<h3>
				Reporte
      </h3>
			<div>
				<strong>id ruta</strong>
			</div>
			<StyledSearchInput
				disabled={true}
				value={idReport}
				onChange={(e) => onReportIdChange(e.target.value)}
			/>
			<div>
				<strong>Fecha inicio</strong>
			</div>
			<StyledSearchInput
				type="datetime-local"
				value={initialDateReport}
				onChange={(e) => onReportInitialDateChange(e.target.value)} />
			<div>
				<strong>Fecha final</strong>
			</div>
			<StyledSearchInput 
			type="datetime-local"
			value = {finalDateReport}
			onChange={(e) => onReportFinalDateChange(e.target.value)}
			/>
			<StyledButton onClick={onGenerateReportClick}>
				<span>Generar</span>
			</StyledButton>
			{nombreRuta && localidadOrigen &&
				<StyledReportContainer>
					<div><strong>Nombre: </strong>{nombreRuta}</div>
					<div><strong>Origen: </strong>{localidadOrigen}</div>
					<div><strong>Destino: </strong>{localidadDestino}</div>
					<div><strong>N° buses: </strong>{cantidadBuses}</div>
					<div><strong>Paraderos: </strong><ul>{displayParaderos}</ul></div>
				</StyledReportContainer>
			}

		</StyledContainer>
	</StyledGlobalContainer>
}