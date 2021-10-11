import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { setupApi } from './services/api';
import AppContext from './AppContext';
import { LoginPage } from './pages/LoginPage';
import { Home } from './pages/Home';
import { MainLayout } from './components/MainLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { About } from './pages/About';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { CreateProduct } from './pages/CreateProduct';
import { EditProduct } from './pages/EditProduct';
import { Contacts } from './pages/Contacts';
import { getToken } from './services/localstorage';

const queryClient = new QueryClient({});

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    document.getElementById('loader').remove();

    const token = getToken();

    if (token) {
      setupApi(token);
    }

    setIsInitialized(true);
  }, []);

  if (!isInitialized) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <MainLayout>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>

              <Route path="/contacts" exact>
                <Contacts />
              </Route>
              <ProtectedRoute path="/product-create" exact>
                <CreateProduct />
              </ProtectedRoute>
              <ProtectedRoute path="/product-edit/:id" exact>
                <EditProduct />
              </ProtectedRoute>
              <Route path="/product/:id" exact>
                <Product />
              </Route>
            </MainLayout>

            <Route>
              404 not found <Link to="/login">login</Link>
            </Route>
          </Switch>
        </Router>
      </AppContext>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
