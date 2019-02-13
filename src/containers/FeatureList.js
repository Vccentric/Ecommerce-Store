import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from '../components/ProductCard';

const FeatureList = ({ title, products }) => {
    const cards = products.map((item, index) => {
        const { name, image, description, price, inStock } = item;
        const key = Date.now() + index;
        return (
            <Grid key={key} item xs={4}>
                <ProductCard
                    name={name}
                    image={image}
                    description={description}
                    price={price}
                    inStock={inStock}
                />
            </Grid>
        );
    });

    return (
        <section className="feature-list">
            <h2 className="title">{title}</h2>
            <Grid className="feature-list" container spacing={24}>
                {cards}
            </Grid >
        </section>
    );
};

export default FeatureList;
