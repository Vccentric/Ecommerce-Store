import React from 'react';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {

};

const HeaderBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Demo Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(HeaderBar);
