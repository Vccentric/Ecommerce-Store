import React from 'react';

const FooterBar = (props) => {
    return (
        <footer id="footerbar">
            <div className="links-container">
                <ul className="links-list">
                    <li className="header">Categories</li>
                    <li>Apparel</li>
                    <li>Shoes</li>
                    <li>Toys</li>
                </ul>
                <ul className="links-list">
                    <li className="header">Offers</li>
                    <li>Sale</li>
                    <li>Comming Soon</li>
                    <li>New!</li>
                </ul>
                <ul className="links-list">
                    <li className="header">Info Links</li>
                    <li>Shipping</li>
                    <li>Sitemap</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul className="links-list">
                    <li className="header">Services</li>
                    <li>Shipping Info</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <p>&copy; 2019 Demo Store Company. All rights reserved</p>
        </footer>
    );
};

export default FooterBar;
