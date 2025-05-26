import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CityMgt from './adminviews/CityMgt';
import ProductCatgMgt from './adminviews/ProductCatgMgt';
import StateMgt from './adminviews/StateMgt';
import VenderHome from './venderviews/VenderHome';
import VenderLogin from './venderviews/VenderLogin';
import VenderReg from './venderviews/VenderReg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CityMgt />
    <ProductCatgMgt/>
    <StateMgt/>
    <VenderHome/>
    <VenderLogin/>
    <VenderReg/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
