import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import StepLabel from '@material-ui/core/StepLabel';
import { RadioGroupCustom } from '../../components/RadioGroup';
import { OrderForm } from '../../components/OrderForm';
import { CartItemsList } from '../../components/CartItemsList';
import { getCartItems, resetCart } from '../../services/localstorage';

import './styles.scss';

const steps = ['Order Detatils', 'Payment Type', 'Customer Data'];
const paymentTypes = [
  {
    label: 'Cash to Courier',
    val: 'cash',
  },
  {
    label: 'By card to Courier',
    val: 'card',
  },
];

export const Cart = () => {
  const [products, setProducts] = useState(getCartItems());
  const [step, setStep] = useState(0);
  const [paymentType, setPaymentType] = useState('cash');
  const history = useHistory();

  const onProductRemove = () => setProducts(getCartItems());
  const onNextClick = () => {
    setStep(s => s + 1);
  };
  const onBackClick = () => {
    setStep(s => s - 1);
  };

  const onSubmit = ({ name, phone, address }) => {
    console.log('Order success', {
      name,
      phone,
      address,
      products: products.map(({ id }) => id),
      paymentType,
    });
    resetCart();
    history.replace('/');
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <Stepper activeStep={step} alternativeLabel className="cart-stepper">
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {step === 0 && (
        <CartItemsList onProductRemove={onProductRemove} products={products} />
      )}
      {step === 1 && (
        <RadioGroupCustom
          btns={paymentTypes}
          title="Payment Type"
          onSelect={setPaymentType}
          value={paymentType}
          horizontal={false}
        />
      )}
      {step === 2 && <OrderForm onSubmit={onSubmit} />}

      <div className="stepper-controls">
        <Button onClick={onBackClick} disabled={step === 0}>
          Back
        </Button>
        <Button
          onClick={onNextClick}
          disabled={step === 2 || products?.length === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
