import React from "react";
import { Box, Grid, List, ListItem, ListItemText, Typography, Slider, Button } from "@mui/material";
import Check from '@mui/icons-material/Check';

const ProductInformation = ({ phone }) => {
    if (!phone) return null;

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom>
                Información detallada del producto
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={5}>
                    <Box display="flex" flexDirection="column" alignItems="center" padding="5px">
                        <Grid container spacing={2} justifyContent="center">
                            {phone.phone_images.map((image, index) => (
                                <Grid item sm={6} key={index}>
                                    <img src={image} alt={`phone image ${index}`} style={{ width: '250px', marginBottom: '10px' }} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box display="flex" flexDirection="column" padding="5px">
                        <Typography variant="h6" gutterBottom>Otras especificaciones</Typography>
                        <Box marginBottom="20px">
                            <List>
                                <ListItem>
                                    <ListItemText primary="Nombre del teléfono" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Marca" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Dimensión" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Almacenamiento" />
                                </ListItem>
                            </List>
                        </Box>
                        <Grid item>
                            <Box padding="5px" sx={{
                                background: 'linear-Gradient(180deg, #164186 45%, #0E6BFD 100%)',
                                padding: 5
                            }}>
                                <Typography variant="h6" gutterBottom sx={{
                                    color: '#FFFFFF',
                                    fontSize:'25px',
                                }}>
                                    lleva este celular a credito
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="¿Que necesitas?" sx={{
                                            color: '#FFD300',
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <Check sx={{
                                            color: '#A2D456'
                                        }} />
                                        <ListItemText primary="Tu cuenta de Facebook" sx={{
                                            color: '#FFFFFF'
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <Check sx={{
                                            color: '#A2D456'
                                        }} />
                                        <ListItemText primary="Tu INE Vigente" sx={{
                                            color: '#FFFFFF'
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <Check sx={{
                                            color: '#A2D456'
                                        }} />
                                        <ListItemText primary="Correo electrónico" sx={{
                                            color: '#FFFFFF'
                                        }} />
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box display="flex" flexDirection="column" alignItems="center" padding="5px">
                        <Typography variant="h6" gutterBottom>Reviews</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary={phone.phone_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={phone.brand} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={phone.dimension} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={phone.storage} />
                            </ListItem>
                        </List>
                        <Grid item xs={6} sx={{ backgroundColor: '#FFFFFF', width: '100%' }}>
                            <Box padding="5px" display="flex" flexDirection="column" alignItems="center" >
                                <svg width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7" cy="12" r="2" fill="#0744A8" />
                                    <circle cx="7" cy="19" r="1.5" fill="#0744A8" />
                                    <circle cx="16" cy="12" r="2" fill="#0744A8" />
                                    <circle cx="16" cy="19" r="1.5" fill="#0744A8" />
                                    <path d="M7 19 C10 22, 16 20, 16 19" stroke="#0744A8" strokeWidth="3" fill="none" />
                                </svg>
                                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold' }}>¿Te falta una lanita?</Typography>
                                <Typography variant="h6" sx={{ fontSize: '15px', textAlign: 'center' }}>ENGANCHE $520,00 <br />PAGO SEMANAL $125,00</Typography>
                                <Slider
                                    defaultValue={50}
                                    aria-label="Credit Amount"
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={100}
                                    style={{ width: '100%' }}
                                />
                                <Typography variant="h6" sx={{ fontSize: '15px' }}>Enganche</Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                    Aplicar ahora
                                </Button>
                            </Box>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductInformation;
