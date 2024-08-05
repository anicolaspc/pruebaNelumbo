import React from "react";
import "../styles/phones.css"
import FetchComponent from './fetchConecction'
import Card from '@mui/material/Card'
import { CardActionArea, CardContent, CardMedia, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const PhoneList = () => {
    return (
        <FetchComponent url="https://phone-specs-api-git-master-azharimm.vercel.app/latest">
            {(data) => {
                const phones = data?.data?.phones || []

                return (
                    <>
                        <div className="contenedor">
                            <div className="search">
                                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '100px' }}>
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="search phone" />
                                </Paper>
                            </div>
                            <div className="phones">
                                {phones.length > 0 ? (
                                    phones.map((phone) => (
                                        <Card key={phone.phone_name} sx={{ maxWidth: 230, minWidth: 230, }}>
                                            <CardActionArea style={{ height: '100%' }}>
                                                <CardMedia
                                                    component="img"
                                                    height="240"
                                                    image={phone.image}
                                                    alt={phone.phone_name}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {phone.phone_name}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    ))
                                ) : (
                                    <p>No hay teléfonos disponibles</p>
                                )}
                            </div>
                        </div>
                    </>
                )
            }}
        </FetchComponent>
    )

}

export default PhoneList