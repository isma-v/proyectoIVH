async function getDatos ()  {

    fetch(`http://localhost:3030/getItems`)
    .then(response => response.json())
    .then (response => {
    console.log('Lo que nos llega de la base de datos: ')
   
    if (response.length !== 0){
      alert("datos obtenidos correctamente")
      return response
    } else{
        alert("Ha habido un error al obtener los datos ");

    }
    })
}