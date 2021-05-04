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