import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useProduct } from '../../hooks/useProduct';
import { RadioGroupCustom } from '../../components/RadioGroup';
import { setItemToCart } from '../../services/localstorage';
import { useAuthorized } from '../../hooks/useAuthorized';
import { deleteProduct } from '../../services/api';

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
  const history = useHistory();
  const { product, loading } = useProduct(params.id);
  const [size, setSize] = useState('m');
  const isAuthorized = useAuthorized();

  const pushToCart = () => {
    setItemToCart({ ...product, size });
  };

  const onProductDelete = async () => {
    try {
      await deleteProduct(params.id);
      history.replace('/');
    } catch (e) {
      console.log(e);
    }
  };

  if (!product && !loading) {
    return <h1>Product not found</h1>;
  }

  if (!product && loading) {
    return (
      <CircularProgress
        style={{ margin: '0 auto', transform: 'translateY(300px)' }}
      />
    );
  }

  const btnsSizes = sizes.map(s => ({
    ...s,
    disabled: !product.availableSizes?.includes(s.val),
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
        {isAuthorized && (
          <div className="admin-controls">
            <Link className="controls__item" to={`/product-edit/${params.id}`}>
              <Edit /> Product
            </Link>

            <IconButton aria-label="cart" onClick={onProductDelete}>
              <DeleteForever />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};
