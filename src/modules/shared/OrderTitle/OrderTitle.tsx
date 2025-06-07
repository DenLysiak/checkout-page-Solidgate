import { OrderTitleItem } from '../types';

interface OrderTitleProps {
  orderTitleItem: OrderTitleItem;
}

export const OrderTitle: React.FC<OrderTitleProps> = ({ orderTitleItem }) => {
  const { head, bottom } = orderTitleItem;

  return (
    <div className="order-title">
      <h1 className="order-title__h1">{head}</h1>

      <h2 className="order-title__h2">{bottom}</h2>
    </div>
  );
};
