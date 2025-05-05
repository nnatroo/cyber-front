import React, { useState } from 'react';
import cardImg from '../assets/card.png';

const PaymentForm = () => {
  const [sameAsBilling, setSameAsBilling] = useState(true);

  return (
    <div className="payment-form">
      <h3>Payment</h3>
      <div className="tabs">
        <span className="active">Credit Card</span>
        <span>PayPal</span>
        <span>PayPal Credit</span>
      </div>

      <div className="card-preview">
        <img src={cardImg} alt="Credit Card Preview" />
      </div>

      <form>
        <input type="text" placeholder="Cardholder Name" />
        <input type="text" placeholder="Card Number" />
        <div className="inline">
          <input type="text" placeholder="Exp. Date" />
          <input type="text" placeholder="CVV" />
        </div>
        <label>
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
          />
          Same as billing address
        </label>
        <div className="buttons">
          <button type="button" className="back">Back</button>
          <button type="submit" className="pay">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
