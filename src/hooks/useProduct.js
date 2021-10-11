import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';

export function useProduct(id) {
  const [product, setproduct] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const res = await getProductById(id);
      setproduct(res.data || []);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [id]);

  return { product, loading };
}
