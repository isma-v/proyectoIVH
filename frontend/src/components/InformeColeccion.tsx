
//import React from "react";
//importo la librería de informes
import MaterialTable, { Column } from "@material-table/core";
//Importo la librería que nos permite exportar a CSV y PDF
import { ExportCsv, ExportPdf } from "@material-table/exporters";

//Creo la interfaz para los tipos de los campos (field) de la tabla. 
//La tabla tendrá los campos firstName: string, lastName: string, birthYear: number
interface itemtype {
    id?: number;
    nombre: string;
    marca: string;
    tipo: string;
    precio: number;
  }


  function InformeColeccion({ tableData }: { tableData: itemtype[] }) {
  const col: Array<Column<itemtype>> = [
    { title: "Nombre", field: "nombre", filtering: false, },
    { title: "Marca", field: "marca", filtering: true },
    { title: "Tipo", field: "tipo", filtering: true },
    { title: "Precio", field: "precio", type: "numeric", filtering: false },
  ];


return (
  <MaterialTable 
    columns={col} 
    data={tableData} 
    title = "Colecciones"
    options={{
        headerStyle: {
            background: "linear-gradient(45deg, #FE6B8B 1%, #FF8E53 90%)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "white"
            },
        columnsButton: true ,

        filtering: true,
        
        exportMenu: [
        {
        label: "Exportar a PDF",
        exportFunc: (cols, datas) => ExportPdf(cols, datas, "Colecciones"),
        },
        {
        label: "Exportar a CSV",
        exportFunc: (cols, datas) => ExportCsv(cols, datas, "Colecciones"),
        },
        ],
        }}
        renderSummaryRow={({ column, data }) => {
            // Solo renderizamos un resumen en la columna "precio"
            if (column.field === "precio") {
              const total = data.reduce((sum, row) => sum + row.precio, 0);
              return {
                value: total.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }), // Formato de moneda
                style: { fontWeight: "bold", backgroundColor: "#f2f2f2" }, // Estilo para la fila de resumen
              };
            }
            return undefined; // No hay resumen para las demás columnas
          }}
  />
)
}
export default InformeColeccion