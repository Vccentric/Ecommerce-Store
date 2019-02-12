import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';

const ProductCard = ({ name, image, description, price, inStock }) => {
    return (
        <Card className="product-card">
            <CardHeader title={name} />
            <CardMedia
                classes={{ root: 'product-card-image' }}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography component="p">{description}</Typography>
                <Typography component="span">{price}</Typography>
                <Typography component="span">{inStock ? 'In Stock' : 'Out of Stock'}</Typography>
            </CardContent>
            <CardActions>
                <Button color="inherit">Add Item</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
