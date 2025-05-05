import React from 'react';

const StepIndicator = () => (
  <div className="step-indicator">
    <div className="step completed">① Address</div>
    <div className="step completed">② Shipping</div>
    <div className="step current">③ Payment</div>
  </div>
);

export default StepIndicator;
