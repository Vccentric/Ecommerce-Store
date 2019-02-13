import React from 'react';
import { List, Typography } from '@material-ui/core';
import ProductListItem from '../components/ProductListItem';

const FeatureListSidebar = ({ title, products }) => {
    const listItems = products.map((item, index) => {
        const { name, image, price } = item;
        const key = Date.now() + index;
        return (
            <ProductListItem
                key={key}
                name={name}
                image={image}
                price={price}
            />
        );
    });

    return (
        <aside className="feature-list-sidebar">
            <List>
                <Typography className="title" variant="headline">{title}</Typography>
                {listItems}
                <Typography className="title" component="span">More Items</Typography>
            </List>
        </aside>
    );
};

export default FeatureListSidebar;
