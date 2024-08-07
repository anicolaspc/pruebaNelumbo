import React, { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const FetchComponent = ({ urls, children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const results = await Promise.all(responses.map(res => res.json()));
                setData(results);
            } catch (err) {
                setError('Hubo un problema con la petición: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [urls]);

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return children(data);
};

export default FetchComponent;
