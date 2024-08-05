import React from "react";
import '../styles/brands.css';
import FetchComponent from "./fetchConecction";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FormControl, MenuItem, InputLabel, Select, Grid, Typography, Box } from '@mui/material';

const BrandList = () => {
    const [orderBy, setOrderBy] = React.useState('mejores_review');

    const handleChange = (event) => {
        setOrderBy(event.target.value);
    };

    return (
        <FetchComponent url={'https://phone-specs-api-git-master-azharimm.vercel.app/brands'}>
            {(data) => {
                const brands = data?.data || []

                return (
                    <>
                        <div className="order">
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item className="grid_item">
                                        <Typography className="ordenar_por" sx={{ fontSize: '0.875rem', margin: '2px' }}>Ordenar por:</Typography>
                                    </Grid>
                                    <Grid>
                                        <FormControl variant="outlined">
                                            <InputLabel id="orden"></InputLabel>
                                            <Select labelId="orden" value={orderBy} onChange={handleChange} sx={{ fontSize: '0.875rem', padding: '0px' }}>
                                                <MenuItem value="mejores_review">Mejores Review</MenuItem>
                                                <MenuItem value="precio_bajo">Precio más bajo</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                        </div>
                        <div className="container-brands">
                            <div className="brands">
                                <h1 className="brand-title">Marcas</h1>
                                <div className="brand">
                                    {brands.length > 0 ? (
                                        brands.map((brand, index) => (
                                            <div key={index}>
                                                <h2 className="name">{brand.brand_name}</h2>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No hay marcas disponibles</p>
                                    )}
                                </div>
                            </div>
                            <div className="price">
                                <h1 className="brand-title">Precio</h1>
                                <div className="price-range">
                                    <input className="input_price" type="text" placeholder="100" disabled />
                                    <label>-</label>
                                    <input className="input_price" type="text" placeholder="5.000" disabled />
                                </div>
                            </div>
                            <div className="review">
                                <h1 className="brand-title">Reviews</h1>
                                <StarIcon sx={{ color: '#FFD300' }}></StarIcon>
                                <StarBorderIcon sx={{ color: '#FFD300' }}></StarBorderIcon>
                            </div>
                            <div className="memory">
                                <h1 className="brand-title">Memoria</h1>
                            </div>
                            <div className="range">
                                <h1 className="brand-title">Rango</h1>
                            </div>
                            <div className="camera">
                                <h1 className="brand-title">Cámara</h1>
                            </div>
                        </div>
                    </>
                )
            }}
        </FetchComponent>
    )
}

export default BrandList