// foreign exchange funds
export class Reserve {
  realmID: bigint;
  amount: number;

  constructor(realmID: bigint, initialAmount: number) {
    this.realmID = realmID;
    this.amount = initialAmount;
  }

  adjustReserve(amount: number) {
    this.amount = amount;
  }
}
