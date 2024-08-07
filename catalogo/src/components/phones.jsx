import React, { useState } from "react";
import "../styles/phones.css";
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography, Button, Box, Rating } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Overlay from "./overlay";

const PhoneList = ({ phones, title, handleDetail }) => {
    const [open, setOpen] = useState(false);
    const [selectPhone, setSelectPhone] = useState(null);

    const handleOpen = (phone) => {
        setSelectPhone(phone);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectPhone(null);
        setOpen(false);
    };

    return (
        <>
            <Box className="contenedor" sx={{ p: 3 }}>
                <Typography variant="h4" component="div" gutterBottom sx={{
                    fontSize: '24px',
                    color: '#2B3445',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                }}>
                    {title}
                </Typography>
                <Box className="phones" sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
                    {phones.length > 0 ? (
                        phones.map((phone, index) => (
                            <Card key={index} sx={{ maxWidth: 270, minWidth: 270, position: 'relative', boxShadow: 5 }}>
                                <IconButton arial-label="add to favorite" sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    zIndex: 1,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                }}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <CardActionArea onClick={() => handleOpen(phone)}>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={phone.image}
                                        alt={phone.phone_name}
                                        style={{ objectFit: 'contain' }}
                                    />
                                    <CardContent>
                                        <Box display="flex" justifyContent="space-between">
                                            <Typography gutterBottom variant="h6" component="div" sx={{
                                                fontSize: '14px',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {phone.phone_name}
                                                <Box display="flex" alignItems="center" sx={{ my: 1 }}>
                                                    <Rating value={4} readOnly />
                                                    <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                                                        4/5
                                                    </Typography>
                                                </Box>
                                            </Typography>
                                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                                <Typography variant="h6" component="div" sx={{
                                                    color: 'blue',
                                                    fontSize: '18px',
                                                    fontWeight: 'bold'
                                                }}>
                                                    3.499
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
                                                    <span style={{ textDecoration: 'line-through', color: 'gray' }}>4.100</span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                                <CardContent sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end'
                                    }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                                            $120 p/semana
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                                            $520 p/mes
                                        </Typography>
                                    </Box>
                                    <Button onClick={() => handleDetail(phone)} variant="contained" fullWidth sx={{
                                        mb: 1,
                                        backgroundColor: '#FFD300',
                                        color: '#004AC1',
                                        width: 140,
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: '#004AC1',
                                            color: '#FFD300'
                                        }
                                    }}>
                                        Lo quiero
                                    </Button>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body1">No hay teléfonos disponibles</Typography>
                    )}
                </Box>
            </Box>
            <Overlay open={open} handleClose={handleClose} phone={selectPhone} handleDetail={handleDetail} />
        </>
    );
}

export default PhoneList;
