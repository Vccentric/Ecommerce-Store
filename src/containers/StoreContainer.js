import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import { Grid } from '@material-ui/core';

const StoreContainer = (props) => {
    return (
        <Grid id="main-container" container spacing={24}>
            <Grid item xs={12}>
                <HeaderBar />
            </Grid>
            <Grid id="left-container" item xs={4}>
                <h1>Left</h1>
            </Grid>
            <Grid id="right-container" item xs={8}>
                <h1>right</h1>
            </Grid>
            <Grid item xs={12}>
                <FooterBar />
            </Grid>
        </Grid>
    );
}

export default StoreContainer;
