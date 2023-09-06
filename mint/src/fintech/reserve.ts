import { Realm } from './realm';

// foreign exchange funds
export class Reserve {
  realm: Realm;
  amount: number;

  constructor(realm: Realm, initialAmount: number) {
    this.realm = realm;
    this.amount = initialAmount;
  }

  adjustReserve(amount: number) {
    this.amount = amount;
  }
}
