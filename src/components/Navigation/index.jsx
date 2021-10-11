import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const Navigation = () => (
  <div className="navigation">
    <Link className="navigation__item" to="/about">
      About
    </Link>
    <Link className="navigation__item" to="/contacts">
      Contacts
    </Link>
  </div>
);
