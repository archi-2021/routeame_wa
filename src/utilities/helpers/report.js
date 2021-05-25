


export const getReport = async ({ id }) => {
	console.log("id que llega", id)
	const data = {
		// "query": `mutation { loginUser (user:{ username: \"${user}\" password:\"${password}\"} )       {token message}}`
		"query": `query{   getinfoById(id:${id})  {    idRuta     localidadOrigen     localidadDestino     nombreRuta     cantidadBuses     barrioOrigen_final     velocidadPromedio     fecha     paraderos  }}`
	}
	const response = await fetch(`http://54.91.106.122:4041/graphql`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	return response.json(); // parses JSON response into native JavaScript objects
}

export const dummyJson = ({id, initialDate, finalDate}) => {
	console.log(id,initialDate,finalDate)
	return {
		"id": 6262,
		"localidadOrigen": "kennedy",
		"localidadDestino": "Suba",
		"nombreRuta": "Compensar 68",
		"cantidadBuses": 10,
		"barrioOrigen_final": "Danubio azul",
		"velocidadPromedio": 10,
		"fecha": "10-05-21",
		"paraderos": ["0001100", "3.541352", "34135335", "34135335", "34135335", "34135335", "34135335", "34135335", "34135335"]

	}
}