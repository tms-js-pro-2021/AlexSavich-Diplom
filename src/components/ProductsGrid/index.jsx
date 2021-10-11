import React from 'react';
import { ProductItem } from '../ProductItem';
import { useProducts } from '../../hooks/useProducts';
import './styles.scss';

export const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="products-grid">
      {products.map(({ id, name, imgUri, price, avalibleSizes }) => (
        <ProductItem
          key={id}
          id={id}
          name={name}
          img={imgUri}
          price={price}
          sizes={avalibleSizes}
        />
      ))}
    </div>
  );
};
