import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/logo.svg';
import Box from "@mui/material/Box";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <img src={logo} alt="Company Logo" style={{ height: 50, marginLeft: 20 }} />
                </IconButton>
                <Box
                    sx={{
                        position: 'absolute',
                        top: -45,
                        right: -45,
                        background: 'linear-gradient(90deg, #f1c907 10%, #ddba10 30%, #bda220 90%)',
                        width: 200,
                        height: 200,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        transform: 'rotate(45deg)',
                        zIndex: 1
                    }}
                >
                    <Typography variant="h6" align="center">
                        COMPRA A CRÉDITO
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', gap: 2, mr: 20 }}>
                    <Button color="inherit" sx={{ textTransform: 'none', background: '#FFD300', color: '#004AC1' }}>Crea Tu Cuenta</Button>
                    <Button color="inherit" sx={{ textTransform: 'none', color: '#FFD300' }}>Iniciar Sesión</Button>
                    <IconButton color="inherit"sx={{
                            background: '#EBEFF4',
                            color: 'black',
                            borderRadius: '50%',
                            height: '35px',
                            width: '35px'
                        }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
