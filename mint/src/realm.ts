export enum Country {
  'BRAZIL',
  'RUSSIA',
  'INDIA',
  'CHINA',
  'SOUTH_AFRICA'
}


export class Realm {
    country: Country

    constructor(country: Country) {
            this.country = country
    }

    getPool() : number {
        console.log('it worked for ' + this.country.valueOf());
        return this.country.valueOf()
    }
}

export var realms: Realm[] = [
    new Realm(Country.BRAZIL),
    new Realm(Country.RUSSIA),
    new Realm(Country.INDIA),
    new Realm(Country.CHINA),
    new Realm(Country.SOUTH_AFRICA),
  ];
