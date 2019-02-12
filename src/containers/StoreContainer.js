import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { Grid } from '@material-ui/core';

const StoreContainer = (props) => {
    return (
        <Grid id="main-container" container spacing={24}>
            <Grid item xs={12}>
                <HeaderBar />
            </Grid>
            <Grid id="left-container" item xs={4}>
                <Categories />
            </Grid>
            <Grid id="right-container" item xs={8}>
                <ProductCard />
            </Grid>
            <Grid item xs={12}>
                <FooterBar />
            </Grid>
        </Grid>
    );
}

export default StoreContainer;
