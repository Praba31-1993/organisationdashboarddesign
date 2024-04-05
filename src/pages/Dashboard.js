import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
function Dashboard(props) {
    return (
        <Grid container spacing={2}>
            <Grid Typography xs={8}>
                <Typography>xs=8</Typography>
            </Grid>
            <Grid Typography xs={4}>
                <Typography>xs=4</Typography>
            </Grid>

        </Grid>
    );
}

export default Dashboard;