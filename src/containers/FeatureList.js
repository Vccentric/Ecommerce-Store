import React from 'react';
import ProductCard from '../components/ProductCard';

const FeatureList = ({ title, products }) => {
    const cards = products.map((item, index) => {
        const { name, image, description, price, inStock } = item;
        const key = Date.now() + index;
        return (
            <ProductCard
                key={key}
                name={name}
                image={image}
                description={description}
                price={price}
                inStock={inStock}
            />
        );
    });

    return (
        <section className="feature-list">
            <h2 className="title">{title}</h2>
            <div className="cards-container">
                {cards}
            </div>
        </section>
    );
};

export default FeatureList;
