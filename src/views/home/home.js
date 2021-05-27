import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Maps, SideMenu2, StyledButton } from '../../components';
import { UserContext } from '../../providers/user-provider';
import { searchRouteById } from '../../utilities/helpers/routes';
import { searchRoute } from '../../utilities/helpers/search';
import { dummyJson, getReport } from './../../utilities/helpers/report';
import { ReportMenu } from './../../components/side-menu-2/reportMenu';
import { getStopByDetailedSearch } from './../../utilities/helpers/search';
import { getStopByCenefa } from './../../utilities/helpers/stops'

import useClickOutside from './../../utilities/click-outside';
import BUS_STOP_ICON from '../../assets/icons';

const SEARCH_DELAY = 250;

const StyledMapContainer = styled.div`
	position: relative;
  height: 100%;
  width: 100%;
`

const StyledMapOverlay = styled.div`
 display: flex;
 flex-direction: column; 
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 80%;
`

const Home = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [searchStopValue, setSearchStopValue] = useState('');
	const [selectedStop, setSelectedStop] = useState({})
	const [searchStopResult, setSearchStopResult] = useState([''])
	const [mapGeopoint, setMapGeopoint] = useState(null);
	const [mapPolyline, setMapPolyline] = useState(null);
	const [map, setMap] = useState(null)
	const [mapsAPI, setMapsAPI] = useState(null)
	const [reportValues, setReportValues] = useState({ "": "" })
	const [reportResult, setReportResult] = useState({ "": "" })

	const abortControllerRef = useRef(null)
	const user = useContext(UserContext)

	console.log(user)

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
		if (searchStopValue === '') {
			//Will not call the API unless the input has something written
			setSearchStopResult([])
			return
		}
		let interval = null

		if (abortControllerRef.current) {
			abortControllerRef.current.abort(); // aborting previous fetch if any
		}

		interval = setTimeout(() => stopSearch(searchStopValue, abortControllerRef), SEARCH_DELAY)

		return () => clearTimeout(interval)
	}, [searchStopValue])

	const stopSearch = async (searchValue, abortControllerRef) => {
		const result = await getStopByDetailedSearch(searchValue, abortControllerRef);
		setSearchStopResult(result)
	}

	useEffect(() => {
		
		console.log(mapPolyline)
		if (!mapPolyline) return

		const mapPolylineFixed = mapPolyline.map((point) => {
			return { lat: point.lng, lng: point.lat }
		})

		const routePath = new mapsAPI.Polyline({
			path: mapPolylineFixed,
			geodesic: true,
			strokeColor: "#FF0000",
			strokeOpacity: 1.0,
			strokeWeight: 2,
		});

		routePath.setMap(map)
	}, [mapPolyline]);

	useEffect(() => {
		//[0] lng [1]lat
		console.log(mapGeopoint)
		if (!mapGeopoint)
			return;

		const data = {
			lng: mapGeopoint[0],
			lat: mapGeopoint[1]
		}
		const routePath = new mapsAPI.Marker({
			position: data,
			map,
			title: `${selectedStop.cenefa_paradero}`,
			icon: BUS_STOP_ICON
		})


	}, [mapGeopoint])



	// useEffect(() => {


	// }, [reportResult]);

	const search = async (searchValue, abortControllerRef) => {
		const result = await searchRoute(searchValue, abortControllerRef);
		setSearchResult(result.availableRoutes)
	}

	const onSearchValueChange = (searchString) => {
		setSearchValue(searchString)
	}

	const onResultItemClick = async (item) => {
		const id = item.id
		const routeData = await searchRouteById(id);
		onReportIdChange(id);
		setMapPolyline(routeData.geometry.coordinates);
	}

	const onSearchStopInputChange = (searchString) => {
		setSelectedStop({})
		setSearchStopResult([''])
		setSearchStopValue(searchString)
	}

	const onStopResultItemClick = async (item) => {
		if(!item.cenefa_paradero)
			return;
		const cenefa_paradero = item.cenefa_paradero
		const stopData = await getStopByCenefa(cenefa_paradero)

		
		setSelectedStop(item)
		setMapGeopoint(stopData.geopoint.coordinates);
	}

	const handleGoogleMapsApiLoaded = (map, maps) => {
		setMap(map);
		setMapsAPI(maps);
	}

	const onReportIdChange = (id) => {
		console.log(id)
		setReportValues({
			...reportValues,
			id
		});
		console.log(reportValues)
	}

	const onReportFinalDateChange = (finalDate) => {
		setReportValues({
			...reportValues,
			finalDate
		});
	}

	const onReportInitialDateChange = (initialDate) => {
		console.log(initialDate);
		setReportValues({
			...reportValues,
			initialDate
		});
		console.log(reportValues)
	}

	const onGenerateReportClick = async () => {
		// const json_report = await getReport(reportValues);
		const json_report = dummyJson(reportValues);
		setReportResult(json_report);
		console.log("termino de guardar el reporte", reportResult);

	}




	return <StyledMapContainer id='map'>
		<Maps
			center={{ lng: -74.085058, lat: 4.639481 }}
			zoom={13}
			handleApiLoaded={handleGoogleMapsApiLoaded}
		>
		</Maps>
		<StyledMapOverlay>
			<SideMenu2
				searchInputValue={searchValue}
				onSearchInputChange={onSearchValueChange}
				searchResults={searchResult}
				onResultItemClick={onResultItemClick}

				searchStopInputValue={searchStopValue}
				onSearchStopInputChange={onSearchStopInputChange}
				searchStopResult={searchStopResult}
				onStopResultItemClick={onStopResultItemClick}
				selectedStop={selectedStop}
				setSearchStopResult={setSearchStopResult}
				
			/>
			<ReportMenu
				idReport={reportValues["id"]}
				initialDateReport={reportValues["initialDate"]}
				finalDateReport={reportValues["finalDate"]}
				onReportIdChange={onReportIdChange}
				onReportInitialDateChange={onReportInitialDateChange}
				onReportFinalDateChange={onReportFinalDateChange}
				onGenerateReportClick={onGenerateReportClick}
				{...reportValues}
				{...reportResult}
			/>
		</StyledMapOverlay>
	</StyledMapContainer>

}

export default Home;