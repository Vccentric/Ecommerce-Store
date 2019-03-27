import React from 'react';

const ProductDetail = (props) => {
    return (
        <article className="product-detail-container">
            <div className="product-content-container">
                <div className="product-image-container">Image</div>
                <div className="product-info-container">
                    <h1>Product Name</h1>
                    <p>Price</p>
                </div>
            </div>
            <div className="product-description">This is the product description.</div>
        </article>
    );
};

export default ProductDetail;
