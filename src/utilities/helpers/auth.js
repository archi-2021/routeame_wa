/*
* auth fetch template
*/

import {
  API_BASE_URL,
  API_LOGIN_URL
} from '../constants';

export const signInWithUserAnPassword = async (user, password) => {
  const data = {
    "query": `mutation { loginUser (user:{ username: \"${user}\" password:\"${password}\"} )       {token message}}`
  }
  const response = await fetch(`http://54.91.84.123:4041/graphql`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
