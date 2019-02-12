import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import productImage from '../assets/oranges.jpg';

const ProductCard = (props) => {
    return (
        <Card className="product-card">
            <CardHeader title="Product Name" />
            <CardMedia
                classes={{ root: 'product-card-image' }}
                image={productImage}
                title="sample product"
            />
            <CardContent>
                <Typography component="p">
                    This is only a test product. blah blah.
                </Typography>
                <Typography component="span">
                    $10.54
                </Typography>
                <Typography component="span">
                    In Stock
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="inherit">Add Item</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
