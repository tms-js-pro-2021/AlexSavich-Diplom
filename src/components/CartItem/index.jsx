import React from 'react';
import Button from '@material-ui/core/Button';
import { removeFromCart } from '../../services/localstorage';

import './styles.scss';

export const CartItem = ({ id, name, imgUri, price, size, onItemRemove }) => {
  const handleRemoveItem = () => {
    removeFromCart(id);
    onItemRemove();
  };

  return (
    <div className="cart-item">
      <h3 className="cart-item-name">{name}</h3>
      <img src={imgUri} alt="" className="cart-item-image" />
      <span className="cart-item-size">{size} size</span>
      <span className="cart-item-price">{price} BYN</span>
      <Button onClick={handleRemoveItem}>Remove</Button>
    </div>
  );
};
