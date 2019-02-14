import React from 'react';
import ReactDOM from 'react-dom';
import StoreContainer from './containers/StoreContainer';
import './App.css';
import data from './data/data.js';

ReactDOM.render(<StoreContainer products={data.products} />, document.getElementById('root'));
