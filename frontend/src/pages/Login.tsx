import { Button, TextField, Box, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock'
import * as React from 'react'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check';
import {useState} from 'react'

function Login() {

    const bduser = 'ismael'
    const bdpasswd = '1234'

    // useState para almacenar temporalmente las credenciales

    const [credentials, setCredentials] = useState({user: '', passwd: ''})

    //useState para ver si son válidas o no

    const [isValid, setIsValid] = useState(false) 
    const [hasSubmitted, setHasSubmitted] = useState(false) 


    const handleChange = (e: any) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const VerifyCredentials = ({ user, passwd} : {user: string, passwd: string}) => {
        //Lógica para verificar las credenciales
        return user === bduser && passwd === bdpasswd; 
    };


    const handleSubmit = (e: any) =>{
        e.preventDefault();
        //Desestructurar las credenciales para pausarlas correctamente
        const {user, passwd} = credentials;
        const valid = VerifyCredentials({user, passwd});
        setIsValid(valid);
        setHasSubmitted(true); 
    }

    return (
        <>
            <header>
                <Typography variant="h1" component="h2">
                    Ismael Valerón Hernández
                </Typography>
                <Typography variant="h5" component="h2">
                    Sistema de acceso
                </Typography>
                <LockIcon/>
            </header>
            <main>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                >
                    <TextField
                        name="user"
                        label= "Usuario"
                        variant= "outlined"
                        fullWidth
                        required
                        value={credentials.user}
                        onChange={handleChange}
                    />
                    <TextField
                        name="passwd"
                        label= "Contraseña"
                        type= "password"
                        variant="outlined"
                        fullWidth
                        required
                        value={credentials.passwd}
                        onChange={handleChange}
                    />
                                        
                    
                    <Button variant='contained' fullWidth type='submit'>Acceder</Button>
                    
                    {hasSubmitted && (
                        isValid? (
                        <Alert sx={{width: "100%"}} icon={<CheckIcon fontSize="inherit"/>} severity="success">
                         
                            Acceso correcto
                        </Alert>
                    ): (
                        <Alert severity="error">
                            Usuario o contraseña incorrectos
                        </Alert>
                    )
                        
                    )}
                </Box>
            </main>




        </>
    );
}

export default Login;