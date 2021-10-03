import React from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from '../CartButton';
import './styles.scss';

export const Controls = () => (
  <div className="controls">
    <Link className="controls__item" to="/">
      Log In
    </Link>
    <Link className="controls__item" to="/cart">
      <span className="controls__item-icon">
        <CartButton />
      </span>
    </Link>
  </div>
);
