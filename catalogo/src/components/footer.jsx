import React from "react";
import { Box, Grid, IconButton, Link, TextField, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, WhatsApp, Send } from '@mui/icons-material';
import logo from '../assets/logo.svg';
const Footer = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #EBEFF4 20%, #D2AE00 30%, #FFD300 99%)'
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 2,

                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#FFD300', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#D2AE00', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs><path fill="url(#grad2)" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,58.7C640,85,800,171,960,197.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    zIndex: 1
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#013E9B', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#0E6BFD', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs><path fill="url(#grad1)" fillOpacity="1" d="M0,288L80,288C160,288,320,288,480,245.3C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </Box>
                <Box sx={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '180px 20px 20px',
                }}>
                    <Grid container justifyContent="space-between">
                        <Grid>
                            <Typography variant="h5" gutterBottom sx={{
                                color: '#013E9B',
                                fontSize: '15px'
                            }}>
                                Ofertas y promociones
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{
                                color: '#2B3445',
                                fontWeight: 'bold',
                                fontSize: '50px',
                                lineHeight: 1
                            }}>
                                No te pierdas <br /> nuestras ofertas!
                            </Typography>
                            <Box>
                                <TextField placeholder="Tu dirección de correo electrónico"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton>
                                                <Send />
                                            </IconButton>
                                        ),
                                        sx: {
                                            border: 'none',
                                            borderBottom: '1px solid #000',
                                            borderRadius: '0',
                                            '& fieldset': {
                                                border: 'none'
                                            }
                                        }
                                    }}
                                />
                                <Grid >
                                    <Grid item xs={30} marginTop="10%">
                                        <Box display="flex" alignItems="center">
                                            <IconButton sx={{ backgroundColor: 'blue', borderRadius: '20px' }}>
                                                <img src={logo} alt="Company Logo" style={{ height: 50 }} />
                                            </IconButton>
                                            <Box display="flex" flexDirection="column" sx={{}}>
                                                <Typography sx={{ m: 2, color:'#2B3445' }}>Envíos y devoluciones</Typography>
                                                <Typography sx={{ m: 2, color:'#2B3445' }}>Aviso de privacidad</Typography>
                                            </Box>
                                            <Box display="flex" flexDirection="column" sx={{}}>
                                                <Typography sx={{ m: 2, color:'#2B3445' }}>Preguntas frecuentes</Typography>
                                                <Typography sx={{ m: 2, color:'#2B3445' }}>Términos y condiciones</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography sx={{fontSize: '10px' , color:'#2B3445'}}>todos los derechos reservados -&copy; Macropay 2024</Typography>
                            </Box>
                        </Grid>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="12" r="2" fill="#0744A8" />
                                <circle cx="7" cy="19" r="1.5" fill="#0744A8" />
                                <circle cx="16" cy="12" r="2" fill="#0744A8" />
                                <circle cx="16" cy="19" r="1.5" fill="#0744A8" />
                                <path d="M7 19 C10 22, 16 20, 16 19" stroke="#0744A8" strokeWidth="3" fill="none" />
                            </svg>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            mt: '40px'
                        }}>
                            <Typography variant="h6" fontSize="50px" fontWeight="bold">Conversemos!</Typography>
                            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                gap: '16px', 
                                marginTop: '20px' 
                            }}>
                                <Link href="#" ><Facebook fontSize="large" sx={{ color: '#2B3445', width: '80px', height: '80px' }} /></Link>
                                <Link href="#" ><Instagram fontSize="large" sx={{ color: '#2B3445', width: '80px', height: '80px' }} /></Link>
                                <Link href="#" ><LinkedIn fontSize="large" sx={{ color: '#2B3445', width: '80px', height: '80px' }} /></Link>
                                <Link href="#" ><WhatsApp fontSize="large" sx={{ color: '#2B3445', width: '80px', height: '80px' }}/></Link>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )

}

export default Footer