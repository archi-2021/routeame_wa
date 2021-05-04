/*
* routes fetch template
*/

import {
  API_BASE_URL,
  API_ROUTE_URL,
} from '../constants';

export const searchRouteById = async (routeName) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${API_ROUTE_URL}/${routeName}`);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    return error;
  }
}
