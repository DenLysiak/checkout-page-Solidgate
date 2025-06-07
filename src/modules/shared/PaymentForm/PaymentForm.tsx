/* eslint-disable max-len */
import { ButtonType } from '../types';

import { PrimaryButton } from '../Buttons/PrimaryButton/PrimaryButton';

export const PaymentForm: React.FC = () => {
  return (
    <form className="payment-form">
      <div className="payment-form__input-group">
        <label htmlFor="card-num" className="payment-form__label">
          Card Number
        </label>

        <input
          id="card-num"
          type="text"
          className="payment-form__input"
          placeholder="1234 5678 9012 3456"
          autoComplete="cc-number"
          pattern="[0-9\s]{13,19}"
          inputMode="numeric"
          maxLength={19}
          required
          aria-label="Credit or debit card number"
          aria-required="true"
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

      <PrimaryButton buttonType={ButtonType.submit} />
    </form>
  );
};
