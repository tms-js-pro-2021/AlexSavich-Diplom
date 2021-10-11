import React from 'react';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { CartButton } from '../CartButton';
import { useAuthorized } from '../../hooks/useAuthorized';
import './styles.scss';
import { setToken } from '../../services/localstorage';

export const Controls = () => {
  const authorized = useAuthorized();
  const logout = () => {
    setToken('', 0);
    window.location.reload();
  };
  return (
    <div className="controls">
      {authorized && (
        <Link className="controls__item" to="/product-create">
          <AddBoxIcon /> Product
        </Link>
      )}
      {!authorized ? (
        <Link className="controls__item" to="/login">
          Log In
        </Link>
      ) : (
        <a onClick={logout} className="controls__item">
          Log out
        </a>
      )}
      <Link className="controls__item" to="/cart">
        <span className="controls__item-icon">
          <CartButton />
        </span>
      </Link>
    </div>
  );
};
