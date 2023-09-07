// exchange rate with realmID
export class FxRate {
  realmID: number;
  rate: number;

  constructor(realmID: number, rate: number) {
    this.realmID = realmID;
    this.rate = rate;
  }
}
