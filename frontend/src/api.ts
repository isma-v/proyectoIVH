export const getDatos = async () => {
    try {
        const response = await fetch('http://localhost:3030/getItems');
        const result = await response.json();
        
            //primero comprobamos que nos devuelve un array ya que es lo que buscamos
            if (result && Array.isArray(result.data)) {
                //en caso de que lo haga retornamos los datos 
                return result.data;  
        } else {
            console.error("La respuesta no contiene un array en la propiedad 'data':", result);
            return []; 
        }
    } catch (error) {
        console.error("Error al obtener los datos", error);
        return [];  
    }
};

export const deleteItem = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`);
        const result = await response.json();
        
    
    } catch (error) {
        console.error("Error al obtener los datos", error);
        return [];  
};
}
