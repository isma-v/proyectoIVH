import { useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// MUI IMPORTS
import { Button, TextField, Typography, RadioGroup, Checkbox, Grid2, FormControl, FormControlLabel, Radio, Select, MenuItem, Rating, ButtonGroup, Box, InputLabel, FormLabel, IconButton, Icon, TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material'

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {getDatos, deleteItem, getUserDatos} from "../api";

//imports para el enrutamiento
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { authActions, AuthState } from '../store/authSlice';
import { Link } from "react-router-dom";

function FormularioGestion() {

  interface itemtype {
    nombre: string;
    login: string;
    password: string;
    rol: string;
   
  }

  const itemInitialState: itemtype = {
    nombre: ' ',
    login: ' ',
    password: ' ',
    rol: '',
  }

  const [userData, setUserData] = useState({
    nombre: '',
    login: '',
    password: '',
    rol: '',
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    insertarDatos();
  };

  const handleClear = () => {
    setUserData({
      nombre: '',
      login: '',
      password: '',
      rol: '',
    });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [item, setItem] = useState(itemInitialState);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const rows: any = [];

  const insertarDatos = async () => {
    const response = await fetch(`http://localhost:3030/addUser?nombre=${userData.nombre}&login=${userData.login}&password=${userData.password}&rol=${userData.rol}`);
    const result = await response.json();
    if (result.length !== 0) {
      await actualizarDatos(); // Llamada para actualizar datos después de insertar
    } else {
      alert("Ha habido un error al registrar el usuario");
    }

    handleClear();
  };

  const [tableData, setTableData] = useState([]);



  const actualizarDatos = async () => {
    const response: any = await getUserDatos();

    setTableData(response);

  };

  useEffect(() => {
    actualizarDatos(); // Este useEffect carga los datos iniciales
  }, []);





  //obtencion del rol 


  const userRol = useSelector((state: RootState) => state.authenticator.userRol);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form style={{padding: 20}} onSubmit={handleSubmit}>
        
        <Grid2 container spacing={1}>
  
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              value={userData.nombre}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="login"
              name="login"
              label="login"
              variant="outlined"
              fullWidth
              required
              value={userData.login}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="password"
              name="password"
              label="password"
              variant="outlined"
              fullWidth
              required
              type="password"
              value={userData.password}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="rol"
              name="rol"
              label="rol"
              variant="outlined"
              fullWidth
              required
              value={userData.rol}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Tooltip title="Enviar" arrow>
            <Button variant='contained' type="submit">
              <AddIcon />
              <Typography variant="h6" color="inherit" component="div">
                Insertar
              </Typography>
            </Button>
          </Tooltip>
          </Grid2>
        </Grid2>
      </form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Login</StyledTableCell>
              <StyledTableCell>Password</StyledTableCell>
              <StyledTableCell>Rol</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: itemtype) => (
              <TableRow key={row.nombre}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.login}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>{row.rol}</TableCell>
                <TableCell></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FormularioGestion;