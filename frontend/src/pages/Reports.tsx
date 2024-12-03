import { Button } from "@mui/material";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { getDatos, getUserDatos } from "../api";
import InformeColeccion from "../components/InformeColeccion";
import InformeUsuario from "../components/InformeUsuario";

function Reports() {

    //COLECCION
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
    //USUARIO
  interface itemtypeUser {
    id?: number;
    nombre: string;
    login: string;
    password: string;
    rol: string;
  }

  const itemInitialStateUser: itemtypeUser = {
    nombre: ' ',
    login: ' ',
    password: ' ',
    rol: '',
  }

  const [dataUserUser, setDataUserUser] = useState({
    nombre: '',
    login: '',
    tipo: '',
    rol: 0,
  });


 

  const [itemUser, setItemUser] = useState(itemInitialStateUser);



  const rowsUser: any = [];



  const [tableDataUser, setTableDataUser] = useState([]);


  const getTableDataUser = async () => {
    const responseUser: any = await getUserDatos();
    setTableDataUser(responseUser);

  };

  useEffect(() => {

    getTableDataUser(); // Este useEffect carga los datos iniciales
  }, []);




    const handleGenerateUserInform = () => {
      getUserDatos();
        setClickedUser(!isClickedUser);
    }

    //variable para controlar si se ha clickado
  const [isClickedUser, setClickedUser] = useState(false)
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


            <Button sx={{margin: 10}} onClick={() => handleGenerateUserInform()}>
                INFORME USUARIO
            </Button>
            { isClickedUser ? 
            <InformeUsuario tableDataUser={tableDataUser}/>  
            : null
            }
        </div>
       
     );
}

export default Reports;