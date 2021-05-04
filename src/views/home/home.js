import styled from 'styled-components';
import { MainContainer, Maps, SideBar } from '../../components';

const Home = () => {

  const handleGoogleMapsApiLoaded = (map, maps) => { }

  return <MainContainer row id='map'>
    <SideBar></SideBar>
    <Maps
      center={{ lng: -71.67832946777344, lat: 19.09888076782227 }}
      zoom={8}
      handleApiLoaded={handleGoogleMapsApiLoaded}
    >
    </Maps>
  </MainContainer>

}

export default Home;