import { OrderItemData } from '../shared/types';

interface OrderInfoProps {
  orderData: OrderItemData;
}

export const OrderInfo: React.FC<OrderInfoProps> = ({ orderData }) => {
  const { head, body, bottom } = orderData;

  return (
    <div className="order-info">
      <div className="order-info__block">
        <h2 className="order-info__title">{head.title}</h2>

        <p className="order-info__description">{head.description}</p>
      </div>

      <div className="order-info__block">
        <h2 className="order-info__name">{body.name}</h2>

        <p className="order-info__name-description">{body.nameDescription}</p>
      </div>

      <div className="order-info__block">
        <h2 className="order-info__title order-info__title--duration">
          {bottom.duration}
        </h2>

        <p className="order-info__price">{bottom.price}</p>
      </div>
    </div>
  );
};
