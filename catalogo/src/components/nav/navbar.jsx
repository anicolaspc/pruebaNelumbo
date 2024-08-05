import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@mui/material";

const Navigation = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                textColor="primary"
                TabIndicatorProps={{ style: { display: 'none' } }}
                sx={{
                    '& .MuiTab-root': {
                        color: '#2B3445',
                        fontSize: '16px',
                        minWidth: 'auto',
                        position: 'relative',
                        paddingBottom: '10px',
                        textTransform: 'none',
                        '&.Mui-selected::after': {
                            content: '""',
                            display: 'block',
                            width: '25%', 
                            height: '3px',
                            backgroundColor: '#FFD300',
                            position: 'absolute',
                            bottom: '11px',
                            left: 'center',
                        }
                    },
                    '& .Mui-selected': {
                        color: '#013E9B',
                        fontWeight: 'bold'
                    },
                    paddingLeft: 5,
                    height: '60px',
                    alignItems: 'center'
                }}
            >
                <Tab label="Home" />
                <Tab label="Celulares" />
                <Tab label="Motocicletas" />
                <Tab label="Tus préstamos" />
                <Tab label="Tiendas" />
                <Tab label="Tracking" />
                <Tab label="Club Macropay" />
            </Tabs>
        </AppBar>
    );
}

export default Navigation;
