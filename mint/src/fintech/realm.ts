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
  country: Country;
  reserves: Reserve[] = [];
  log: Trx[] = [];

  constructor(country: Country) {
    this.country = country;

    // create foreign reserve pools
    const values = Object.values(Country).filter((v) => !isNaN(Number(v)));
    for (let i = 0; i < values.length; i++) {
      const reserve = new Reserve(BigInt(i), 0);
      this.reserves.push(reserve);
    }
  }

  sendTrx(payer: Realm, payee: Realm, amount: number) {
    const trx = new Trx(payer, payee, amount);
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
