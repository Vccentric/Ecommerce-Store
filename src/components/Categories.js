import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const Categories = (props) => {
    return (
        <aside id="categories">
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Item-1" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Item-2" />
                </ListItem>
            </List>
        </aside>
    );
};

export default Categories;
