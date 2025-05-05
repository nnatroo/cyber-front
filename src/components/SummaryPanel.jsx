import React from 'react';

const SummaryPanel = () => (
  <div className="summary-panel">
    <h3>Summary</h3>
    <div className="product">
      <span>Apple iPhone 14 Pro Max 128Gb</span>
      <span>$1399</span>
    </div>
    <div className="product">
      <span>AirPods Max Silver</span>
      <span>$549</span>
    </div>
    <div className="product">
      <span>Apple Watch Series 9 GPS 41mm</span>
      <span>$399</span>
    </div>
    <p>Address: 1131 Dusty Townline, Jacksonville, TX 40322</p>
    <p>Shipment method: Free</p>
    <hr />
    <div className="totals">
      <div><span>Subtotal</span><span>$2347</span></div>
      <div><span>Estimated Tax</span><span>$50</span></div>
      <div><span>Estimated shipping & Handling</span><span>$29</span></div>
      <div className="total"><span>Total</span><span>$2426</span></div>
    </div>
  </div>
);

export default SummaryPanel;
