import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { getCartItems } from '../../services/localstorage';

import './styles.scss';

const getCartItemsCount = () => getCartItems()?.length;

export const CartButton = () => {
  const [itemsCount, setItemsCount] = useState(getCartItemsCount());

  useEffect(() => {
    const handleLocalStorageChange = () => {
      setItemsCount(getCartItemsCount());
    };

    document.addEventListener('storage', handleLocalStorageChange, false);
    document.addEventListener(
      'cart-items-change',
      handleLocalStorageChange,
      false
    );

    return () => {
      document.removeEventListener('storage', handleLocalStorageChange);
      document.removeEventListener(
        'cart-items-change',
        handleLocalStorageChange
      );
    };
  }, []);

  return (
    <IconButton aria-label="cart">
      <Badge
        badgeContent={itemsCount}
        color="secondary"
        className="cart-items-count"
      >
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};
