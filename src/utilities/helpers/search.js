/*
* search fetch template
*/

import {
  API_BASE_URL,
  API_SEARCH_BASE_URL,
  API_SEARCH_ROUTE_URL
} from '../constants';


export const searchRoute = async (routeName, abortControllerRef) => {
  const controller = new AbortController();
  abortControllerRef.current = controller
  try {
    const response = await fetch(
      `${API_BASE_URL}${API_SEARCH_BASE_URL}${API_SEARCH_ROUTE_URL}/${routeName}`,
      { signal: abortControllerRef.current?.signal }
    );
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    return error;
  }
}

export const getStopByDetailedSearch = async (clientInput, abortControllerRef) => {
	const controller = new AbortController();
  abortControllerRef.current = controller
	try {

	} catch (error){
		return error;
	}
	const response = await fetch(`http://127.0.0.1:8000/bus_stop/detailed/${clientInput}`, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		signal: abortControllerRef.current?.signal

	});
	return response.json(); // parses JSON response into native JavaScript objects
}
