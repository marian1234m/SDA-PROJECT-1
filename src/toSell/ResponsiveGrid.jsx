import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Advertisement from './Advertisement';

export default function ResponsiveGrid(props) {
    
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.advertisements.map(adv => {
                return (
                    <Grid item xs={2} sm={4} md={4}>
                        <Advertisement title={adv.title} description={adv.description} price={adv.price} image={adv.image} /> 
                    </Grid>
                )
            })}
        </Grid>
        </Box>
    </>
    )
}