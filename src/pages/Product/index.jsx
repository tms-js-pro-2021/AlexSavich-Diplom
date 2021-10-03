import React, { useState } from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';

import { useProduct } from '../../hooks/useProduct';
import { RadioGroupCustom } from '../../components/RadioGroup';
import { setItemToCart } from '../../services/localstorage';

import './styles.scss';

const sizes = [
  {
    label: 'S',
    val: 's',
  },
  {
    label: 'M',
    val: 'm',
  },
  {
    label: 'L',
    val: 'l',
  },
  {
    label: 'XL',
    val: 'xl',
  },
];

export const Product = () => {
  const params = useParams();
  const { product, loading } = useProduct(params.id);
  const [size, setSize] = useState('m');

  const pushToCart = () => {
    setItemToCart({ id: product.id, size });
  };

  if (!product && !loading) {
    return <h1>Product not found</h1>;
  }

  const btnsSizes = sizes.map(s => ({
    ...s,
    disabled: !product.avalibleSizes.includes(s.val),
  }));

  return (
    <div className="product-wrapper">
      <div className="product-section product-represent">
        <h1 className="product-title">{product.name}</h1>
        <img className="product-img" src={product.imgUri} alt="" />
      </div>

      <div className="product-section product-details">
        <h1 className="product-price">{product.price} BYN</h1>
        <p className="product-desc">{product.description}</p>
        <RadioGroupCustom
          btns={btnsSizes}
          title="Sizes"
          onSelect={setSize}
          value={size}
        />
        <Button variant="outlined" onClick={pushToCart}>
          To Cart
        </Button>
      </div>
    </div>
  );
};
