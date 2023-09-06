export enum Country {
  'BRAZIL',
  'RUSSIA',
  'INDIA',
  'CHINA',
  'SOUTH_AFRICA',
}

// financial realms
export class Realm {
  country: Country;

  constructor(country: Country) {
    this.country = country;
  }

  getPool(): number {
    console.log('it worked for ' + this.country.valueOf());
    return this.country.valueOf();
  }
}

export const realms: Realm[] = [
  new Realm(Country.BRAZIL),
  new Realm(Country.RUSSIA),
  new Realm(Country.INDIA),
  new Realm(Country.CHINA),
  new Realm(Country.SOUTH_AFRICA),
];
