import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Maps, SideMenu } from '../../components';
import { searchRouteById } from '../../utilities/helpers/routes';
import { searchRoute } from '../../utilities/helpers/search';

const SEARCH_DELAY = 250;

const StyledMapContainer = styled.div`
  height: 100%;
  width: 100%;
`

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [mapPolyline, setMapPolyline] = useState(null);
  const [map, setMap] = useState(null)
  const [mapsAPI, setMapsAPI] = useState(null)

  const abortControllerRef = useRef(null)

  /* setSearchValue
    (re)triggers a timer to requests suggestions
    Since there is no particular need for dynamic delay nor variables on the interval, a plain implementation here is enough.
  */
  useEffect(() => {
    if (searchValue === '') {
      //Will not call the API unless the input has something written
      setSearchResult([])
      return
    }
    let interval = null

    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // aborting previous fetch if any
    }

    interval = setTimeout(() => search(searchValue, abortControllerRef), SEARCH_DELAY)

    return () => clearTimeout(interval)
  }, [searchValue])

  useEffect(() => {
    console.log(mapPolyline)
    if (!mapPolyline) return
   
    const mapPolylineFixed = mapPolyline.map((point) => {
      return {lat: point.lng, lng: point.lat}
    })

    const routePath = new mapsAPI.Polyline({
      path: mapPolylineFixed,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    routePath.setMap(map)
  }, [mapPolyline])

  const search = async (searchValue, abortControllerRef) => {
    const result = await searchRoute(searchValue, abortControllerRef);
    setSearchResult(result.availableRoutes)
  }

  const onSearchValueChange = (searchString) => {
    setSearchValue(searchString)
  }

  const onResultItemClick = async (item) => {
    const routeData = await searchRouteById(item.id)
    setMapPolyline(routeData.geometry.coordinates);
  }

  const handleGoogleMapsApiLoaded = (map, maps) => {
    setMap(map);
    setMapsAPI(maps);
  }

  return <StyledMapContainer id='map'>
    <Maps
      center={{ lng: -74.085058, lat: 4.639481 }}
      zoom={13}
      handleApiLoaded={handleGoogleMapsApiLoaded}
    >
    </Maps>
    <SideMenu
      searchInputValue={searchValue}
      onSearchInputChange={onSearchValueChange}
      searchResults={searchResult}
      onResultItemClick={onResultItemClick}
    />
  </StyledMapContainer>

}

export default Home;