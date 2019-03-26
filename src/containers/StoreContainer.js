import React from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import Categories from '../components/Categories';
import PageArticle from '../components/PageArticle';
import FeatureList from './FeatureList';
import FeatureListSidebar from './FeatureListSidebar';

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
            <div id="page-container">
                <div id="header-container">
                    <HeaderBar />
                </div>
                <div id="body-content-container">
                    <div id="sidebar-container">
                        <Categories />
                        <FeatureListSidebar title="New Products" products={items} />
                        <FeatureListSidebar title="On Sale" products={items} />
                    </div>
                    <div id="main-content-container">
                        <PageArticle title="Welcome to the Demo Store!!" text={text} />
                        <FeatureList title="Feature Products" products={items} />
                        <FeatureList title="Best Sellers" products={items} />
                    </div>
                </div>
                <div id="footer-container">
                    <FooterBar />
                </div>
            </div>
        );
    }
}

export default StoreContainer;
