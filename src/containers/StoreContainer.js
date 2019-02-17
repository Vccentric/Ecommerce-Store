import React from 'react';
import HeaderBar from '../components/HeaderBar';
import MenuBar from '../components/MenuBar';
import FooterBar from '../components/FooterBar';
import Categories from '../components/Categories';
import PageArticle from '../components/PageArticle';
import FeatureList from './FeatureList';
import FeatureListSidebar from './FeatureListSidebar';
import { Grid } from '@material-ui/core';

class StoreContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const items = this.props.products;
        this.setState({ products: items });
    }

    render() {
        const items = this.state.products;
        const text = `It illustrates operation and features of X-Cart - all-in-one eCommerce solution for swift and easy launch of a professional online store. 
        Orders placed here cannot be fulfilled as all the sample products listed in this store are for demonstration and testing purposes only.`;
        
        return (
            <Grid id="main-container" container spacing={24}>
                <Grid item xs={12}>
                    <HeaderBar />
                    <MenuBar />
                </Grid>
                <Grid id="left-container" item xs={4}>
                    <Categories />
                    <FeatureListSidebar title="New Products" products={items} />
                    <FeatureListSidebar title="On Sale" products={items} />
                </Grid>
                <Grid id="right-container" item xs={8}>
                    <PageArticle title="Welcome to the Demo Store!!" text={text} />
                    <FeatureList title="Feature Products" products={items} />
                    <FeatureList title="Best Sellers" products={items} />
                </Grid>
                <Grid item xs={12}>
                    <FooterBar />
                </Grid>
            </Grid>
        );
    }
}

export default StoreContainer;
