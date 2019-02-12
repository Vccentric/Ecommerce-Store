import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

const HeaderBar = (props) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Hot Deals</Button>
                <Button color="inherit">Shipping</Button>
                <Button color="inherit">Contact Us</Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
