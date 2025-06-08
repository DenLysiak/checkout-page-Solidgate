export interface OrderItemData {
  productName: string;
  head: {
    title: string;
    description: string;
  };
  body: {
    name: string;
    nameDescription: string;
  };
  bottom: {
    duration: string;
    price: string;
  };
}

export interface OrderTitleItem {
  head: string;
  bottom: string;
}

export enum ButtonType {
  submit = 'submit',
}

export interface CardDataType {
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
}

export enum CardDataKeys {
  Num = 'cardNumber',
  Expiry = 'cardExpiry',
  Cvc = 'cardCVC',
}

export enum SessionStorageCredentials {
  cardData = 'cardData',
}
