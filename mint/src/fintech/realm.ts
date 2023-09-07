import { Reserve } from './reserve';
import { Trx } from './trx';

export enum Country {
  BRAZIL,
  RUSSIA,
  INDIA,
  CHINA,
  SOUTH_AFRICA,
}

// financial realms
export class Realm {
  realmID: number;
  country: Country;
  reserves: Reserve[] = [];
  log: Trx[] = [];

  constructor(country: Country) {
    this.country = country;
    this.realmID = Object.keys(Country).indexOf(country.toString()); 

    // create reserve pools
    const keys = Object.keys(Country).filter((v) => !isNaN(Number(v)));
    for (let i = 0; i < keys.length; i++) {
      const reserve = new Reserve(BigInt(i), 0);
      this.reserves.push(reserve);
    }
  }

  executeTrx(trx: Trx) {
    // modify reserve pools here
    const payerRealm = realms[trx.payerID];
    const payeeRealm = realms[trx.payeeID];
    const payerReserve = payerRealm.reserves[trx.payerID];
    const PayeeReserve = payeeRealm.reserves[trx.payeeID];
    payerReserve.adjustReserve(trx.amount);
    PayeeReserve.adjustReserve(trx.amount);

    this.log.push(trx);
  }
}

export const realms: Realm[] = [
  new Realm(Country.BRAZIL),
  new Realm(Country.RUSSIA),
  new Realm(Country.INDIA),
  new Realm(Country.CHINA),
  new Realm(Country.SOUTH_AFRICA),
];
