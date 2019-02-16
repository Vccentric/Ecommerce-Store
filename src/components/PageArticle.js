import React from 'react';
import { Typography } from '@material-ui/core';

const PageArticle = ({ title, text }) => {
    return (
        <article className="page-article">
            <Typography className="title" variant="headline">{title}</Typography>
            <Typography className="content" component="p">{text}</Typography>
        </article>
    );
};

export default PageArticle;
