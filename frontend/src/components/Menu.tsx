import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

//imports para el enrutamiento
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { authActions, AuthState } from '../store/authSlice';
import { Link } from "react-router-dom";


import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import { useState } from "react";


//useEffect

import { useEffect } from 'react'

function Menu() {

    const dispatch = useDispatch()

    const userData = useSelector((state: RootState) => state.authenticator)

    console.log(userData)


    const userName = useSelector((state: RootState) => state.authenticator.userName);
    const userRol = useSelector((state: RootState) => state.authenticator.userRol);
alert(userRol)




    const handleLogout = () => {

        dispatch(authActions.logout())

    }
    const navigate = useNavigate()


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    const [open, setOpen] = useState(false);


    //useEffect para evitar que se muestre la página home y la de reports  si userData.isAutenticted cambia a false para navegar a la ruta padre

    const isLoggedin = userData.isAutenticated

    useEffect(() => {
        if (!isLoggedin) {
        navigate('/')
        }
        }, [isLoggedin, navigate])

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between", alignItems: "space-between" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        {userName}
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <AdminPanelSettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Toolbar />
                <List>



               
               
                        <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Inicio"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        {(userRol === "admin") ? 
                        
                        <Link to={'/reports'} style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem  disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                <FeedIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Informes"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    : null}
                        
                        <Link to={'/ayuda'} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Ayuda"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} onClick={handleLogout}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Salir"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                
                </List>
            </Drawer>
        </Box>



    );
}

export default Menu;