import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Shield from '@mui/icons-material/Shield';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';

const Detail = ({ phone, handleBack }) => {
    if (!phone) return null;

    return (
        <>
            <Button
                onClick={handleBack}
                sx={{ 
                    mb: 2,
                    border:'1px solid grey',
                    color: '#707070'
                 }}
            >
                Volver a resultados
            </Button>
            <Box sx={{ display: 'flex', gap: 3 }} margin="20px">
                <Box display="flex" gap={2}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <img src="https://via.placeholder.com/80" alt="imagen 1" style={{ width: '80px', height: '80px' }} />
                        <img src="https://via.placeholder.com/80" alt="imagen 2" style={{ width: '80px', height: '80px' }} />
                        <img src="https://via.placeholder.com/80" alt="imagen 3" style={{ width: '80px', height: '80px' }} />
                        <img src="https://via.placeholder.com/80" alt="imagen 4" style={{ width: '80px', height: '80px' }} />
                    </Box>
                    <Box>
                        <img src={phone.image} alt="imagen principal" style={{ width: 'auto', height: '350px' }} />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" position="relative">
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Typography variant="h6" sx={{ color: '#2B3445', fontSize: '40px' }}>
                            {phone.phone_name}
                        </Typography>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Rating value={4} readOnly />
                        </Box>
                        <Typography variant="body2" sx={{ m: '20px ', fontSize: '15px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio hic accusamus ipsum consectetur autem quibusdam nam, quae doloremque, cumque quasi unde dolore nemo. Temporibus qui eum sapiente hic enim.
                        </Typography>
                        <Grid container spacing={2} sx={{
                            alignItems: 'center',
                            justifyContent: 'end',
                            paddingRight: '20px'
                        }}>
                            <Grid item>
                                <Shield />
                            </Grid>
                            <Grid item>
                                <Typography>Compra segura con Macropay Protect</Typography>
                                <Typography>Devoluciones gratis (30 Dias)/12 meses de garantía de fábrica</Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ position: 'relative', width: '200px', height: '200px' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    height: '125%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography position="absolute" sx={{
                                    zIndex: 3,
                                    color: '#013E9B',
                                    fontSize: '40px',
                                    fontWeight: 'bold'
                                }} >
                                    HOY
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#ffd300',
                                        borderRadius: '100%',
                                        width: '150px',
                                        height: '150px',
                                        zIndex: 2,
                                    }}
                                />
                            </Box>
                            <svg
                                style={{ position: 'absolute', top: 0, left: 100, zIndex: 1 }}
                                width="90%"
                                height="190"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M200,0 L200,0 L200,200 L0,200 L0,130 Z" fill="#013e9b" stroke="#013e9b" />
                                <text x="70" y="100" fill="white" fontSize="15px">DESDE</text>
                                <text x="60" y="145" fill="white" fontSize="50px" fontWeight="bold">$196</text>
                                <text x="80" y="160" fill="white" fontSize="15px">SEMANAL</text>
                            </svg>
                            <Box position="relative" sx={{
                                backgroundColor: '#FFFFFF',
                                top: '15%',
                                left: '130%',
                                width: '300%',
                                height: '150px',
                            }}>
                                <Box display="flex" textAlign="center" height="100%">
                                    <Box sx={{
                                        flex: 1,
                                        borderRight: '1px solid #ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <LooksOneIcon sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 40,
                                            borderRadius: '50%',
                                            backgroundColor: '#f0f0f0',
                                            padding: '4px',
                                        }} />
                                        <Typography>Aplica a tu crédito</Typography>
                                        <ChevronRight />
                                    </Box>
                                    <Box sx={{
                                        flex: 1,
                                        borderRight: '1px solid #ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <LooksTwoIcon sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 40,
                                            borderRadius: '50%',
                                            backgroundColor: '#f0f0f0',
                                            padding: '4px',
                                        }} />
                                        <Typography>Verifica tu compra</Typography>
                                        <ChevronRight />
                                    </Box>
                                    <Box sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <Looks3Icon sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 40,
                                            borderRadius: '50%',
                                            backgroundColor: '#f0f0f0',
                                            padding: '4px',
                                        }} />
                                        <Typography>Disfruta tu celular</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box position="absolute" display="flex" flexDirection="column" right={0} textAlign="center" sx={{
                        height: '400px',
                        justifyContent: 'space-between'
                    }}>
                        <Box textAlign="right">
                            <Typography variant="h5" sx={{ 
                                color: '#004AC1', 
                                fontSize: '40px', 
                                fontWeight: 'bold' }}>
                                $3,499
                            </Typography>
                            <Typography variant="body1" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                                $4,100
                            </Typography>
                            <Box display="flex" gap={1} justifyContent="end">
                                <img src={visa} alt="logo visa" style={{ width: '25px', height: '25px' }} />
                                <img src={mastercard} alt="logo mastercard" style={{ width: '25px', height: '25px' }} />
                                <img src={visa} alt="logo visa" style={{ width: '25px', height: '25px' }} />
                                <img src={mastercard} alt="logo mastercard" style={{ width: '25px', height: '25px' }} />
                            </Box>
                        </Box>
                        <Box variant="contained" display="flex" sx={{
                            backgroundColor: '#FFD300',
                            borderRadius: '5px',
                            color: '#004AC1',
                            width: '250px',
                            padding: '5px',
                        }}>
                            <Button onClick={handleBack} fullWidth sx={{
                                fontWeight: 'bold',
                                justifyContent:'space-evenly'
                            }}>
                                LO QUIERO A CRÉDITO
                                <ArrowCircleRight />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Detail;
