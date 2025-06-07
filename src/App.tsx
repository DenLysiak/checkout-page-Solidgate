/* eslint-disable max-len */
import React from 'react';
import { Footer } from './modules/footer/Footer';
import { OrderInfo } from './modules/OrderInfo/OrderInfo';
import { Checkout } from './modules/checkout/Checkout';

const mockOrderData = {
  productName: 'Pro Plan',
  head: {
    title:
      'Support Pro Plan – priority help, updates, and expert assistance, renewed automatically.',
    description:
      'Support Pro gives you priority access to our support team, faster response times, and expert assistance whenever you need it. Stay up to date with the latest features and updates. Your subscription renews automatically, ensuring uninterrupted access to premium support services.',
  },
  body: {
    name: 'Subscription to Solid Pro Plan',
    nameDescription: 'Support Pro Plan',
  },
  bottom: {
    duration: '7 Days Free Trial',
    price: 'then $99.00 per month',
  },
};

const mockOderTitleData = {
  head: mockOrderData.bottom.duration,
  bottom: mockOrderData.bottom.price,
};

const mockProductName = mockOrderData.productName;

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Checkout titleData={mockOderTitleData} productName={mockProductName} />

        <OrderInfo orderData={mockOrderData} />
      </div>

      <Footer />
    </div>
  );
};
