import React from 'react';
import { ListItem, Typography } from '@material-ui/core';

const ProductListItem = ({ name, image, price }) => {
    return (
        <ListItem className="product-list-item" alignItems="flex-start">
            <img className="product-list-item-image" src={image} alt={name} />
            <div className="product-list-item-details">
                <Typography component="h3">{name}</Typography>
                <Typography component="span">{price}</Typography>
            </div>
        </ListItem>
    );
};

export default ProductListItem;
