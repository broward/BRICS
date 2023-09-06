import { Realm } from './realm';

export class Trx {
  payer: Realm;
  payee: Realm;
  amount: number;
  date: Date;

  constructor(payer: Realm, payee: Realm, amount: number) {
    this.payer = payer;
    this.payee = payee;
    this.amount = amount;
    this.date = new Date();
  }
}
