import React from "react";
import '../styles/brands.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FormControl, MenuItem, Select, Grid, Typography, Box, TextField } from '@mui/material';

const BrandList = ({ brands }) => {
    const [orderBy, setOrderBy] = React.useState('mejores_review');

    const handleChange = (event) => {
        setOrderBy(event.target.value);
    };

    return (
        <>
            <Box sx={{ margin: 1 }}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid display='flex' justifyContent="space-between" item sx={{
                        p: '2%',
                        border: '1px solid, #7D879C',
                        borderRadius: '6px'
                    }} className="grid_item">
                        <Typography variant="h6" className="ordenar_por" sx={{
                            fontSize: '0.875rem',
                            margin: '2px',
                            color: '#7D879C',
                            padding: '5px'
                        }}
                        >Ordenar por:</Typography>
                    </Grid>
                    <Grid>
                        <FormControl variant="outlined">
                            <Select labelId="orden" value={orderBy} onChange={handleChange} sx={{ fontSize: '0.875rem' }}>
                                <MenuItem value="mejores_review">Mejores Review</MenuItem>
                                <MenuItem value="precio_bajo">Precio más bajo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <Box className="container-brands">
                <Box className="brands">
                    <Typography variant="h5" sx={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                    >Marcas</Typography>
                    <Box className="brand">
                        {brands.length > 0 ? (
                            brands.map((brand, index) => (
                                <Typography key={index} variant="h6" sx={{
                                    fontSize: '16px',
                                    margin: '10px'
                                }}>
                                    {brand.brand_name}
                                </Typography>
                            ))
                        ) : (
                            <Typography>No hay marcas disponibles</Typography>
                        )}
                    </Box>
                </Box>
                <Box className="price">
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Precio</Typography>
                    <Box className="price-range" sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                        <TextField
                            label="minimo"
                            variant="outlined"
                            type="text"
                            defaultValue="100"
                            size="small"
                            sx={{
                                border: '0.5px solid',
                                borderRadius: '4px',
                                backgroundColor: '#FFFFFF',
                                color: '#B4B4B4',
                                width: '90px',
                            }}
                        />
                        <Typography sx={{ marginX: '8px' }}>-</Typography>
                        <TextField
                            label="maximo"
                            variant="outlined"
                            type="text"
                            defaultValue="5.000"
                            size="small"
                            sx={{
                                border: '0.5px solid',
                                borderRadius: '4px',
                                backgroundColor: '#FFFFFF',
                                color: '#B4B4B4',
                                width: '90px',
                            }}
                        />
                    </Box>
                </Box>
                <Box className="review">
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Reviews</Typography>
                    <StarIcon sx={{ color: '#FFD300' }}></StarIcon>
                    <StarBorderIcon sx={{ color: '#FFD300' }}></StarBorderIcon>
                </Box>
                <Box className="memory">
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Memoria</Typography>
                </Box>
                <Box className="range">
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Rango</Typography>
                </Box>
                <Box className="camera">
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold' }}>Cámara</Typography>
                </Box>
            </Box>
        </>
    );
}

export default BrandList;
