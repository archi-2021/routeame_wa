import styled from 'styled-components';
import { Maps } from '../../components';

const StyledMapContainer = styled.div`
  height: 100%;
  width: 100%;
`

const Home = () => {

  const handleGoogleMapsApiLoaded = (map, maps) => { }

  return <StyledMapContainer id='map'>
    <Maps
      center={{ lng: -71.67832946777344, lat: 19.09888076782227 }}
      zoom={8}
      handleApiLoaded={handleGoogleMapsApiLoaded}
    >
    </Maps>
  </StyledMapContainer>

}

export default Home;