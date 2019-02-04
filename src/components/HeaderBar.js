import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const HeaderBar = (props) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Demo Store
                    </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
