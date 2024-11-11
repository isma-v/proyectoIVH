export const getDatos = async () => {
    try {
        const response = await fetch('http://localhost:3030/getItems');
        const result = await response.json();
        
        // Verifica que result tenga la propiedad `data` y que esta sea un array
        if (result && Array.isArray(result.data)) {
            return result.data;  // Regresa el array que está dentro de `data`
        } else {
            console.error("La respuesta no contiene un array en la propiedad 'data':", result);
            return [];  // Devuelve un array vacío si no es un array
        }
    } catch (error) {
        console.error("Error al obtener los datos", error);
        return [];  // Devuelve un array vacío en caso de error
    }
};

export const deleteItem = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`);
        const result = await response.json();
        
    
    } catch (error) {
        console.error("Error al obtener los datos", error);
        return [];  // Devuelve un array vacío en caso de error
    }
};

; 