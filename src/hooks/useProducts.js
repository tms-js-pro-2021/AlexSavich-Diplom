import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';

export function useProducts() {
  const [products, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getAllProducts();
      setproduct(res.data || []);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(async () => {
    getProducts();
  }, []);

  return { products, loading, refetch: getProducts };
}
