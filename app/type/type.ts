export enum PaymentMethodEnum {
  Cash = 'cash',
  DigitalWallet = 'digital-wallet',
  CreditCard = 'credit-card',
}

export type PaymentMethodTypes = `${PaymentMethodEnum}`;

export type ModalTypes = 'order' | 'payment' | 'success' | null;
