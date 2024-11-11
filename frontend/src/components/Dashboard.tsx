import { useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// MUI IMPORTS
import { Button, TextField, Typography, RadioGroup, Checkbox, Grid2, FormControl, FormControlLabel, Radio, Select, MenuItem, Rating, ButtonGroup, Box, InputLabel, FormLabel, IconButton, Icon, TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material'

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {getDatos, deleteItem} from "../api";

function Dashboard() {

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

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    insertarDatos();
  };

  const handleClear = () => {
    setData({
      nombre: '',
      marca: '',
      tipo: '',
      precio: 0,
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
    const response = await fetch(`http://localhost:3030/addItem?nombre=${data.nombre}&marca=${data.marca}&tipo=${data.tipo}&precio=${data.precio}`);
    const result = await response.json();
    if (result.length !== 0) {
      await actualizarDatos(); // Llamada para actualizar datos después de insertar
    } else {
      alert("Ha habido un error al insertar los datos");
    }
  };

  const [tableData, setTableData] = useState([]);

  const handleDeleteItem = async (row: itemtype) => {
    if (row.id !== undefined) {
      await deleteItem(row.id);
      await actualizarDatos(); // Llamada para actualizar datos después de eliminar
    }
  };

  const actualizarDatos = async () => {
    const response: any = await getDatos();
    setTableData(response);
  };

  useEffect(() => {
    actualizarDatos(); // Este useEffect carga los datos iniciales
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              value={data.nombre}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="marca"
              name="marca"
              label="Marca"
              variant="outlined"
              fullWidth
              required
              value={data.marca}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="tipo"
              name="tipo"
              label="Tipo"
              variant="outlined"
              fullWidth
              required
              value={data.tipo}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <TextField
              id="precio"
              name="precio"
              label="Precio"
              variant="outlined"
              fullWidth
              required
              type="number"
              value={data.precio}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Button variant='contained' onClick={handleSubmit} type="submit">
              <AddIcon />
              <Typography variant="h6" color="inherit" component="div">
                Insertar
              </Typography>
            </Button>
          </Grid2>
        </Grid2>
      </form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Marca</StyledTableCell>
              <StyledTableCell>Tipo</StyledTableCell>
              <StyledTableCell>Precio</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: itemtype) => (
              <TableRow key={row.id}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.marca}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.precio}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteItem(row)}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;