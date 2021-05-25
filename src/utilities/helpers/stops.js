// export const getStop = async (input) => {
// 	console.log("input", input)
// 	const data = {
// 		// "query": `mutation { loginUser (user:{ username: \"${user}\" password:\"${password}\"} )       {token message}}`
// 		"query": `query{   getinfoById(id:${id})  {    idRuta     localidadOrigen     localidadDestino     nombreRuta     cantidadBuses     barrioOrigen_final     velocidadPromedio     fecha     paraderos  }}`
// 	}
// 	const response = await fetch(`http://54.91.106.122:4041/graphql`, {
// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(data)
// 	});

// 	return response.json(); // parses JSON response into native JavaScript objects
// }

export const getStopByCenefa = async (busCenefa) => {
	const response = await fetch(`http://127.0.0.1:8000/bus_stop/by_id/${busCenefa}`, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response.json(); // parses JSON response into native JavaScript objects
}



