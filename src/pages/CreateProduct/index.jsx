import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductForm } from '../../components/ProductForm';
import { createProduct } from '../../services/api';

import './styles.scss';

const initialData = {
  availableSizes: ['s', 'm'],
  name: '',
  category: '6151ed83a096f323c98c532e',
};

export const CreateProduct = () => {
  const history = useHistory();

  const onSubmit = async (values, file) => {
    const form = new FormData();
    form.append('image', file);
    try {
      await createProduct(values, form);
      history.replace('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <ProductForm onSubmit={onSubmit} initialValues={initialData} />
    </div>
  );
};
