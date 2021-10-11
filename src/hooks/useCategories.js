import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/api';

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const res = await getAllCategories();
      setCategories(res.data || []);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return { categories, loading };
}
