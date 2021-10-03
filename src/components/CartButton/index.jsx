import React from 'react';
import CartImg from '../../assets/cart.jpg';
import './styles.scss';

export const CartButton = () => (
  <img className="cart" src={CartImg} alt="Cart" />
);
