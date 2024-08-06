import React from "react";
import { Modal, Box, Typography, Button, Link, Divider } from "@mui/material";
import banner from '../assets/banner.jpg';
import { Check } from "@mui/icons-material";

const Overlay = ({ open, handleClose, phone }) => {

    if (!phone) return null

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria_labellebdy="modal-modal-title"
                aria_describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 613,
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    backgroundColor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                }}>
                    <Box marginBottom="5px">
                        <img src={banner} alt="publicidad" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                            <img src={phone.image} alt={phone.phone_name} style={{ width: '100%' }} />
                        </Box>
                        <Box sx={{ flex: 3, pl: 2 }}>
                            <Typography variant="h6">{phone.phone_name}</Typography>
                            <Typography variant="body1">Característica 1</Typography>
                            <Typography variant="body1">Característica 2</Typography>
                            <Typography variant="body1">Característica 3</Typography>
                        </Box>
                        <Box sx={{ flex: 1, pl: 2 }}>
                            <Typography variant="h6" color="primary">$3.499</Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: 'grey.500' }} />
                    <Box sx={{ display: 'flex', mb: 2 }} >
                        <Box sx={{ flex: 3, pl: 2 }}>
                            <Typography variant="h6">1 item en tu carrito</Typography>
                            <Typography variant="body2">{phone.phone_name} - $3.499</Typography>
                        </Box>
                        <Box sx={{ flex: 1, pl: 2 }}>
                            <Typography variant="h6" color="primary">$3.499</Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: 'grey.500' }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mb: 2
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid #FFF',
                            borderRadius: '50%',
                            boxShadow: '10',
                            height: '90px',
                            width: '90px',
                            mb: '15px'
                        }} >
                            <Check sx={{
                                justifyItems: 'center',
                                border: '1px solid #FFD300',
                                borderRadius: '50%',
                                height: '70px',
                                width: '70px',
                                color: '#004AC1'
                            }} />
                        </Box>
                        <Box display="flex" flexDirection="column" textAlign="center">
                            <Typography variant="h6">Te vas a llevar este celular por solo</Typography>
                            <Typography variant="body2" fontWeight="bold" fontSize="30px">$120 p/semana</Typography>
                            <Button variant="contained" sx={{ 
                                backgroundColor: '#FFD300',
                                color: '#004AC1', 
                                fontSize: '20px', 
                                fontWeight: 'bold', 
                                padding: '10px',
                                '&:hover':{
                                    backgroundColor: '#FFD300'
                                } 
                                }}>
                                Comprar a Crédito
                                </Button>
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center', m: '0px 100px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box
                            component="span"
                            sx={{
                                flexGrow: 1,
                                borderBottom: '1px solid grey',
                                mr: 1,
                                height: 0
                            }}
                        />
                        <Typography color="#7D879C">o puedes</Typography>
                        <Box
                            component="span"
                            sx={{
                                flexGrow: 1,
                                borderBottom: '1px solid grey',
                                ml: 1,
                                height: 0
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center', m: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link
                            href="#"
                            onClick={handleClose}
                            sx={{ position: 'relative', zIndex: 1, background: 'white', px: 1 }}
                        >
                            Comprar de Contado
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default Overlay