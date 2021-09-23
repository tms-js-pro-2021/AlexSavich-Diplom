import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/product/1">Product</Link>
  </div>
);
