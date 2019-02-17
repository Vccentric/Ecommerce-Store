import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const MenuBar = (props) => {
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

export default MenuBar;
