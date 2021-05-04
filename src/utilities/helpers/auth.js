/*
* auth fetch template
*/

import {
  API_BASE_URL,
  API_LOGIN_URL
} from '../constants';


export const signIn = (user, password) => {
  fetch(`${API_BASE_URL}${API_LOGIN_URL}?user=${user}&password=${password}`)
  .then((response) => {
    //TODO: implementar el uso de la sesion
    // response es la respuesta del back
  })
  .catch((error) => console.error("algo paso D: ", error))
}
