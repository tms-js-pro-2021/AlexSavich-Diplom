import React from 'react';
import { useParams } from 'react-router';
import './styles.css';

export const Product = () => {
  const params = useParams();

  return <div className="home">Product {params.id}</div>;
};
