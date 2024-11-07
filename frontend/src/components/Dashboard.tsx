import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';


// MUI IMPORTS
import { Button, TextField, Typography, RadioGroup, Checkbox, Grid2, FormControl, FormControlLabel, Radio, Select, MenuItem, Rating, ButtonGroup, Box, InputLabel, FormLabel, IconButton, Icon, TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material'

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import  { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

function Dashboard() {

    interface itemtype {
        id?: number
        nombre: string
        marca: string
        tipo: string
        precio: number
    }
    //Inicializo los valores del item. Aquí no pongo el id porque no lo necesito
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
        setOpen(true);
        handleInsertClick(data);
        
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

    const [item, setItem] = useState(itemInitialState)







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
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(
        nombre: string,
        tipo: number,
        marca: number,
        precio: number,
      ) {
        return { nombre, tipo, marca, precio };
      }
      
      const rows: any = [];
      



      async function handleInsertClick(data: itemtype ) {
        try {
            // Realizamos el fetch al endpoint /addItem
            const response = await fetch('/addItem', {
              method: 'POST', // Método HTTP que se usará
              headers: {
                'Content-Type': 'application/json' // Especificamos que vamos a enviar JSON
              },
              body: JSON.stringify({ data }) // Convertimos el array 'data' en una cadena JSON
            });
        
            // Esperamos la respuesta
            const result = await response.json();
        
            // Si la respuesta es 0, mostramos el mensaje de éxito
            if (result === 0) {
              alert('Datos guardados con éxito');
            } else {
              alert('Hubo un error al guardar los datos');
            }
          } catch (error) {
            // Si ocurre un error con el fetch, lo mostramos en la consola
            console.error('Error al insertar los datos:', error);
            alert('Hubo un error al realizar la solicitud');
          }
      }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <form onSubmit={handleSubmit}>
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



                        <Button variant='contained' onSubmit={handleSubmit} type="submit" >
                           
                                <AddIcon />
                          
                            <Typography variant="h6" color="inherit" component="div">
                                Insertar
                            </Typography>

                        </Button>

                    </Grid2>


                </Grid2>


            </form>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            <Grid2 container spacing={1} >
                <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>

                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                    <Typography variant="h6" color="inherit" component="div">
                                Nombre
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                    <Typography variant="h6" color="inherit" component="div">
                                Marca
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                    <Typography variant="h6" color="inherit" component="div">
                                Tipo
                    </Typography>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                    <Typography variant="h6" color="inherit" component="div">
                                Precio
                    </Typography>
                </Grid2>
               
            </Grid2>


        </Box>

    );
}

export default Dashboard;