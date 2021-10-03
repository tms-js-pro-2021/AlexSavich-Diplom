import React from 'react';
import { Logo } from '../Logo';
import { Controls } from '../Controls';
import { Navigation } from '../Navigation';
import { Link } from 'react-router-dom';
import './styles.scss';


export const Header = () => <div className='header'>
   <Link className='header__logo' to="/"><Logo /></Link>
    <Navigation />
    <Controls />
    
</div>;
