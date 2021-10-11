import { useEffect, useState } from 'react';
import { getToken, getTokenExperation } from '../services/localstorage';

export function useAuthorized() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(async () => {
    const token = getToken();
    const tokenExperationTime = getTokenExperation();

    setAuthorized(token && tokenExperationTime > Date.now());
  }, []);

  return authorized;
}
