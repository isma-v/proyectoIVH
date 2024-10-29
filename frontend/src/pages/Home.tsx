
import { useSelector,  useDispatch } from 'react-redux'

import { RootState, AppDispatch} from '../store/index'

import { authActions, AuthState } from '../store/authSlice';
import { Button, Typography } from '@mui/material';


import { useNavigate } from "react-router-dom";


export default function Home(){

    const dispatch = useDispatch()


const userData = useSelector((state: RootState) => state.authenticator)

console.log(userData)


const userName = useSelector((state: RootState) => state.authenticator.userName);    
const userRol = useSelector((state: RootState) => state.authenticator.userRol);
const handleClick = () => {

    dispatch(authActions.logout())
    navigate('/')

}
const navigate = useNavigate()


return <>
<Typography variant="h1" component="h2">
Nombre usuario: {userName}

</Typography>
<Typography variant="h1" component="h2">
Rol: {userRol}
</Typography>

<Button onClick={handleClick} variant="text">Cerrar sesión</Button>
</>
}
