import React from 'react';
import { Cart } from '../Cart';
import { Link } from 'react-router-dom';
import './styles.scss';


export const Controls = () => <div className='controls'>

    <Link className='controls__item' to="/">Log In</Link>
    <Link className='controls__item' to="/cart">
        <span className='controls__item-icon'><Cart /></span>
    </Link>

</div>;