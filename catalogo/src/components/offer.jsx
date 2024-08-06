import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oferta from '../assets/oferta.png';
import { Box, Button } from "@mui/material";

const Offer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div style={{ width: '100vh', height: '45vh', margin: '0 auto', position: 'relative' }}>
                <Slider {...settings}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src={oferta} alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src={oferta} alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                </Slider>
                <Box
                sx={{
                    position: 'absolute',
                    top: '80%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    padding: 2
                }}
            >
                <Button variant="contained" sx={{
                    textTransform: 'none',
                    backgroundColor: '#2B3445',
                    color: '#FFD300'
                }}>
                    Sample Banner CTA
                </Button>
            </Box>
            </div>
        </>
    )
}

export default Offer