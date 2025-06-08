/* eslint-disable max-len */
import { ButtonType, CardDataKeys, CardDataType } from '../types';

import { PrimaryButton } from '../Buttons/PrimaryButton/PrimaryButton';
import { CheckoutContext } from '../../../store/CheckoutStore';
import { useContext, useState } from 'react';
import {
  formatCardNumber,
  formatCvc,
  formatExpiry,
  resetStringData,
  validateCvc,
  validateDate,
  validateLuhn,
} from './utils';
import classNames from 'classnames';

export const PaymentForm: React.FC = () => {
  const { checkoutData, setCheckoutData } = useContext(CheckoutContext);
  const [isNotValid, setIsNotValid] = useState({
    num: false,
    date: false,
    cvc: false,
  });

  const keyMap: Record<CardDataKeys, keyof typeof isNotValid> = {
    [CardDataKeys.Cvc]: 'cvc',
    [CardDataKeys.Num]: 'num',
    [CardDataKeys.Expiry]: 'date',
  };

  const handleCardChange = (key: CardDataKeys, newValue: string) => {
    const field = keyMap[key];

    if (field) {
      setIsNotValid({ ...isNotValid, [field]: false });
    }

    setCheckoutData({ ...checkoutData, [key]: newValue });
  };

  const validateCardData = () => {
    const newValid = {
      num: !validateLuhn(checkoutData.cardNumber),
      date: !validateDate(checkoutData.cardExpiry),
      cvc: !validateCvc(checkoutData.cardCVC),
    };

    setIsNotValid(newValid);

    return Object.values(newValid).some(v => v);
  };

  const handleSubmit = () => {
    const resetData = resetStringData<CardDataType>(checkoutData, '');
    const resetErrors = {
      num: false,
      date: false,
      cvc: false,
    };

    setIsNotValid(resetErrors);
    setCheckoutData(resetData);
  };

  return (
    <form className="payment-form">
      <div className="payment-form__input-group">
        <label htmlFor="card-num" className="payment-form__label">
          Card Number
        </label>

        <input
          id="card-num"
          type="text"
          className={classNames('payment-form__input', {
            'payment-form__input--not-valid': isNotValid.num,
          })}
          placeholder="XXXX XXXX XXXX XXXX"
          autoComplete="cc-number"
          maxLength={19}
          required
          onBlur={() => {
            setIsNotValid({
              ...isNotValid,
              num: !validateLuhn(checkoutData.cardNumber),
            });
          }}
          onChange={event =>
            handleCardChange(
              CardDataKeys.Num,
              formatCardNumber(event.target.value),
            )
          }
          value={checkoutData.cardNumber}
        />

        {isNotValid.num && (
          <span className="payment-form__text-not-valid">Not valid number</span>
        )}
      </div>

      <div className="payment-form__input-bottom">
        <div className="payment-form__input-group">
          <label htmlFor="exp-date" className="payment-form__label">
            Expiration Date
          </label>

          <input
            id="exp-date"
            type="text"
            className={classNames('payment-form__input', {
              'payment-form__input--not-valid': isNotValid.date,
            })}
            placeholder="MM/YY"
            required
            onBlur={() =>
              setIsNotValid({
                ...isNotValid,
                date: !validateDate(checkoutData.cardExpiry),
              })
            }
            onChange={event =>
              handleCardChange(
                CardDataKeys.Expiry,
                formatExpiry(event.target.value),
              )
            }
            value={checkoutData.cardExpiry}
          />

          {isNotValid.date && (
            <span className="payment-form__text-not-valid">Not valid date</span>
          )}
        </div>

        <div className="payment-form__input-group payment-form__input-group--cvc">
          <label htmlFor="cvc" className="payment-form__label">
            CVC
          </label>

          <input
            id="cvc"
            type="password"
            className={classNames(
              'payment-form__input payment-form__input--cvc',
              {
                'payment-form__input--not-valid': isNotValid.cvc,
              },
            )}
            placeholder="•••"
            pattern="[0-9]{3}"
            maxLength={3}
            required
            value={checkoutData.cardCVC}
            onBlur={() =>
              setIsNotValid({
                ...isNotValid,
                cvc: !validateCvc(checkoutData.cardCVC),
              })
            }
            onChange={event =>
              handleCardChange(CardDataKeys.Cvc, formatCvc(event.target.value))
            }
          />

          {isNotValid.cvc && (
            <span className="payment-form__text-not-valid">Not valid CVC</span>
          )}

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
        onClick={handleSubmit}
        validateData={validateCardData}
        buttonType={ButtonType.submit}
      />
    </form>
  );
};
