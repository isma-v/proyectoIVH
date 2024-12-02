import { Button } from "@mui/material";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { getDatos } from "../api";
import InformeColeccion from "../components/InformeColeccion";

function Reports() {

    
  interface itemtype {
    id?: number;
    nombre: string;
    marca: string;
    tipo: string;
    precio: number;
  }

  const itemInitialState: itemtype = {
    nombre: ' ',
    marca: ' ',
    tipo: ' ',
    precio: 0,
  }

  const [data, setData] = useState({
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0,
  });


 

  const [item, setItem] = useState(itemInitialState);



  const rows: any = [];



  const [tableData, setTableData] = useState([]);


  const getTableData = async () => {
    const response: any = await getDatos();
    setTableData(response);

  };

  useEffect(() => {

    getTableData(); // Este useEffect carga los datos iniciales
  }, []);



    const handleGenerateInform = () => {
        getDatos();
        setClicked(!isClicked);
    }

    //variable para controlar si se ha clickado
  const [isClicked, setClicked] = useState(false)
    return ( 
       
        <div>
          
                                    
            Reports
            <Menu></Menu>
            <Button sx={{margin: 10}} onClick={() => handleGenerateInform()}>
                INFORME COLECCION
            </Button>
            { isClicked ? 
            <InformeColeccion tableData={tableData}/>  
            : null
            }
        </div>
       
     );
}

export default Reports;