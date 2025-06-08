/* eslint-disable max-len */
import { ButtonType, CardDataKeys, CardDataType } from '../types';

import { PrimaryButton } from '../Buttons/PrimaryButton/PrimaryButton';
import { CheckoutContext } from '../../../store/CheckoutStore';
import { useContext } from 'react';
import { formatCardNumber, formatCvc, formatExpiry } from './utils';

export const PaymentForm: React.FC = () => {
  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);

  //console.log(checkoutData);

  const handleCardChange = (key: CardDataKeys, newValue: string) => {
    setCheckoutData({ ...checkoutData, [key]: newValue });
  };

  const resetCardData = () => {
    const resetData: CardDataType = {
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
    };

    setCheckoutData(resetData);
  };

  const initialButtonText = 'Pay 99.00 USD';
  const processText = 'Processing payment';
  const successText = 'Successful payment!';

  return (
    <form className="payment-form" onSubmit={e => e.preventDefault()}>
      <div className="payment-form__input-group">
        <label htmlFor="card-num" className="payment-form__label">
          Card Number
        </label>

        <input
          id="card-num"
          type="text"
          className="payment-form__input"
          placeholder="XXXX XXXX XXXX XXXX"
          autoComplete="cc-number"
          pattern="[0-9\s]{13,19}"
          inputMode="numeric"
          maxLength={19}
          required
          aria-label="Credit or debit card number"
          aria-required="true"
          onChange={event =>
            handleCardChange(
              CardDataKeys.Num,
              formatCardNumber(event.target.value),
            )
          }
          value={checkoutData.cardNumber}
        />
      </div>

      <div className="payment-form__input-bottom">
        <div className="payment-form__input-group">
          <label htmlFor="exp-date" className="payment-form__label">
            Expiration Date
          </label>

          <input
            id="exp-date"
            type="text"
            className="payment-form__input"
            placeholder="MM/YY"
            required
            onChange={event =>
              handleCardChange(
                CardDataKeys.Expiry,
                formatExpiry(event.target.value),
              )
            }
            value={checkoutData.cardExpiry}
          />
        </div>

        <div className="payment-form__input-group payment-form__input-group--cvc">
          <label htmlFor="cvc" className="payment-form__label">
            CVC
          </label>

          <input
            id="cvc"
            type="password"
            className="payment-form__input payment-form__input--cvc"
            placeholder="•••"
            inputMode="numeric"
            pattern="[0-9]{3}"
            maxLength={3}
            required
            value={checkoutData.cardCVC}
            onChange={event =>
              handleCardChange(CardDataKeys.Cvc, formatCvc(event.target.value))
            }
          />

          <div className="payment-form__tooltip">
            <div className="payment-form__tooltip-container">
              <span className="payment-form__tooltip-icon" />

              <div className="payment-form__tooltip-text">
                The CVC is a 3 digit number on the back or front of your card.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrimaryButton
        initialText={initialButtonText}
        processingText={processText}
        successText={successText}
        buttonType={ButtonType.submit}
        onClick={resetCardData}
      />
    </form>
  );
};
