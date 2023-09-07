import { Realm } from './realm';

// financial transactions
export class Trx {
  orderID: number;
  payerID: number;
  payeeID: number;
  amount: number;
  date: Date;

  constructor(orderID: number, payer: Realm, payee: Realm, amount: number) {
    this.orderID = orderID;
    this.payerID = payer.realmID;
    this.payeeID = payee.realmID;
    this.amount = amount;
    this.date = new Date();
  }
}
