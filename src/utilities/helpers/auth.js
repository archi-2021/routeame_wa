/*
* auth fetch template
*/

import {
  API_BASE_URL,
  API_LOGIN_URL
} from '../constants';


export const signIn = async (user, password) => {
  const data = {} // esto tendría que ser lo que se le manda a graphql
  const response = await fetch(`${API_BASE_URL}${API_LOGIN_URL}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) //data es la query que se le manda a graphql
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
