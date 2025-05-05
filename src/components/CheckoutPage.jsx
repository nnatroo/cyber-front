import React from 'react';
import StepIndicator from './StepIndicator';
import SummaryPanel from './SummaryPanel';
import PaymentForm from './PaymentForm';
import '../styles/checkout.scss';

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <StepIndicator />
      <div className="checkout-content">
        <SummaryPanel />
        <PaymentForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
