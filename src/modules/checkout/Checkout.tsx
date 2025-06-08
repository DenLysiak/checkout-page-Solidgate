/* eslint-disable max-len */
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import { ApplePayButton } from '../shared/Buttons/ApplePayButton/ApplePayButton';
import { LanguageSelector } from '../shared/LanguageSelector/LanguageSelector';
import { NoteMessage } from '../shared/noteMessage/NoteMessage';
import { OrderTitle } from '../shared/OrderTitle/OrderTitle';
import { PaymentForm } from '../shared/PaymentForm/PaymentForm';
import { LanguageView, OrderTitleItem } from '../shared/types';

interface CheckoutProps {
  titleData: OrderTitleItem;
  productName: string;
}

export const Checkout: React.FC<CheckoutProps> = ({
  titleData,
  productName,
}) => {
  return (
    <div className="checkout">
      <div className="checkout__top">
        <Breadcrumb pathName="checkout" />

        <LanguageSelector view={LanguageView.Mobile} />
      </div>

      <OrderTitle orderTitleItem={titleData} />

      <ApplePayButton />

      <div className="checkout__divider">
        <div className="checkout__divider-line" />

        <p className="checkout__divider-text">or pay with card</p>

        <div className="checkout__divider-line" />
      </div>

      <PaymentForm />

      <NoteMessage productName={productName} />
    </div>
  );
};
