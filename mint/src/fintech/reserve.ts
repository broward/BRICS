// foreign exchange funds
export class Reserve {
  realmID: bigint;
  amount: number;

  constructor(realmID: bigint, initialAmount: number) {
    this.realmID = realmID;
    this.amount = initialAmount;
  }

  credit(credit: number) {
    this.amount = this.amount + credit;
  }

  debit(debit: number) {
    if (debit > this.amount) {
      // throw an error here
    }
    this.amount = this.amount - debit;
  }
}
