import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './styles.css';

export const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <Container>{children}</Container>
    <Footer />
  </div>
);
