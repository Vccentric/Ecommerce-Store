import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import Categories from '../components/Categories';
import FeatureList from './FeatureList';
import FeatureListSidebar from './FeatureListSidebar';
import { Grid } from '@material-ui/core';

import img1 from '../assets/bananas.jpg';
import img2 from '../assets/oranges.jpg';
import img3 from '../assets/red-pepper.jpg';
import img4 from '../assets/red-tomatoes.jpg';

const StoreContainer = (props) => {
    const products = [
        {
            name: 'Product 1',
            image: img1,
            description: 'This is product-1.',
            price: '$10.55',
            inStock: true
        },
        {
            name: 'Product 2',
            image: img2,
            description: 'This is product-2.',
            price: '$5.10',
            inStock: true
        },
        {
            name: 'Product 3',
            image: img3,
            description: 'This is product-3.',
            price: '$22.30',
            inStock: false
        },
        {
            name: 'Product 4',
            image: img4,
            description: 'This is product-4.',
            price: '$1.30',
            inStock: false
        }
    ];

    return (
        <Grid id="main-container" container spacing={24}>
            <Grid item xs={12}>
                <HeaderBar />
            </Grid>
            <Grid id="left-container" item xs={4}>
                <Categories />
                <FeatureListSidebar title="New Products" products={products} />
                <FeatureListSidebar title="On Sale" products={products} />
            </Grid>
            <Grid id="right-container" item xs={8}>
                <FeatureList title="Feature Products" products={products} />
                <FeatureList title="Best Sellers" products={products} />
            </Grid>
            <Grid item xs={12}>
                <FooterBar />
            </Grid>
        </Grid>
    );
}

export default StoreContainer;
