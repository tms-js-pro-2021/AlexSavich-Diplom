import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

export const ProductItem = ({ id, name, img, price }) => {
  const history = useHistory();
  const goToProduct = () => history.push(`/product/${id}`);

  return (
    <div role="button" className="product-item" onClick={goToProduct}>
      <img src={img} alt="product el" />
      <div className="product-item-title">{name}</div>
      <div className="product-item-price">{price} BYN</div>
    </div>
  );
};
