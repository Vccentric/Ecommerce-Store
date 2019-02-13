import React from 'react';
import { List, Typography } from '@material-ui/core';
import ProductListItem from '../components/ProductListItem';

const FeatureListSidebar = ({ title, products }) => {
    const listItems = products.map((item, index) => {
        return (
            <ProductListItem
                name={item.name}
                image={item.image}
                price={item.price}
            />
        );
    });

    return (
        <aside className="feature-list-sidebar">
            <List>
                <Typography className="title" variant="headline">{title}</Typography>
                {listItems}
                <Typography className="title" variant="span">More Items</Typography>
            </List>
        </aside>
    );
};

export default FeatureListSidebar;
