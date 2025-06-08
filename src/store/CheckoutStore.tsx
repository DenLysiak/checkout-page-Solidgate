import React, { createContext, useMemo } from 'react';
import {
  CardDataType,
  SessionStorageCredentials,
} from '../modules/shared/types';
import { useSessionStorage } from '../hooks/useSessionStorage';

export const defaultCheckoutValue: CardDataType = {
  cardNumber: '',
  cardExpiry: '',
  cardCVC: '',
};

export const CheckoutContext = createContext({
  checkoutData: defaultCheckoutValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCheckoutData: (_newValue: CardDataType) => {},
});

export const CheckoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [checkoutData, setCheckoutData] = useSessionStorage(
    SessionStorageCredentials.cardData,
    defaultCheckoutValue,
  );

  const value = useMemo(
    () => ({ checkoutData, setCheckoutData }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkoutData],
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
