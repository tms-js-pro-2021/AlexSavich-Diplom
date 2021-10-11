import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ProductForm } from '../../components/ProductForm';
import { useProduct } from '../../hooks/useProduct';
import { updateProduct } from '../../services/api';
import './styles.scss';

export const EditProduct = () => {
  const params = useParams();
  const history = useHistory();
  const { product, loading } = useProduct(params.id);

  const onSubmit = async (values, file) => {
    const form = new FormData();
    form.append('image', file);
    try {
      await updateProduct(product.id, values, form);
      history.replace('/');
    } catch (e) {
      console.log(e);
    }
  };

  if (!product || loading) {
    return (
      <CircularProgress
        style={{ margin: '0 auto', transform: 'translateY(300px)' }}
      />
    );
  }

  return (
    <div>
      <h2>Update Product</h2>
      <ProductForm onSubmit={onSubmit} initialValues={product} />
    </div>
  );
};
