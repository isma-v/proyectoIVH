
//import React from "react";
//importo la librería de informes
import MaterialTable, { Column } from "@material-table/core";
//Importo la librería que nos permite exportar a CSV y PDF
import { ExportCsv, ExportPdf } from "@material-table/exporters";

interface itemtypeUser {
  id?: number;
  nombre: string;
  login: string;
  password: string;
  rol: string;
}


  function InformeUsuario({ tableDataUser }: { tableDataUser: itemtypeUser[] }) {
  const col: Array<Column<itemtypeUser>> = [
    { title: "Nombre", field: "nombre", filtering: true, },
    { title: "Login", field: "login", filtering: false },
    { title: "Contraseña", field: "password", filtering: false },
    { title: "Rol", field: "rol", type: "numeric", filtering: false },
  ];

return (
  <MaterialTable 
    columns={col} 
    data={tableDataUser} 
    title = "Usuarios"
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
        exportFunc: (cols, datas) => ExportPdf(cols, datas, "Usuarios"),
        },
        {
        label: "Exportar a CSV",
        exportFunc: (cols, datas) => ExportCsv(cols, datas, "Usuarios"),
        },
        ],
        }}
      
  />
)
}
export default InformeUsuario