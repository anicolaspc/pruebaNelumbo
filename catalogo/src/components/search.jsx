import React from "react";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Box className="search" sx={{ 
        pl: '24px', 
        display: 'flex' 
        }}>
            <Paper component="form" sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                borderRadius: '100px'
            }}>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="search phone" />
            </Paper>
        </Box>
    )
}

export default Search