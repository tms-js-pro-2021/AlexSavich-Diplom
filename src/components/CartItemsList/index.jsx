import React from 'react';
import { CartItem } from '../CartItem';

import './styles.scss';

export const CartItemsList = ({ products, onProductRemove }) => {
  if (!products?.length) {
    return <h1>There is no items in cart</h1>;
  }

  const orderPrice = products.reduce((summ, { price }) => summ + price, 0);

  return (
    <>
      {products.map(product => (
        <CartItem
          key={product.id}
          onItemRemove={onProductRemove}
          {...product}
        />
      ))}
      <div className="order-summary">
        <div className="order-summary-price">Price: {orderPrice} BYN</div>
      </div>
    </>
  );
};
