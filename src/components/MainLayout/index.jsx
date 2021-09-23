import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from '../Header';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

import './styles.css';

export const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header>
      <Logo />
      <Navigation />
    </Header>
    <Container>{children}</Container>
    <Footer />
  </div>
);
