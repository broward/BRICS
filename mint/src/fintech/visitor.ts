import { Realm } from './realm';
import { FxRate } from './fxrate';
import { Trx } from './trx';

export class Visitor {
  realms: Realm[] = [];
  fxrates: FxRate[] = [];
  trx: Trx[] = [];

  rebalance = function () {
    for (let i = 0; i < this.realms.length; i++) {
      for (let j = 0; j < this.realms[i].reserves.length; j++) {

        let currentReserve = this.realms[i].reserves[i];

        console.log('reserve = ' + this.realms[i].reserves[j].realmID);
        let targetReserve = this.realms[i].reserves[j];

        // don't execute upon ourselves
        if (currentReserve == targetReserve) {
          console.log('checking self reserve');
          continue;
        }

        if (currentReserve.amount > targetReserve.amount) {

        }
      }
    }
    console.log('running rebalance');
  };

  getTrx = function () {
    console.log('getting transactions');
    for (let i = 0; i < this.realms.length; i++) {
      this.trx = this.trx.concat(this.realms[i].log);
    }
  };

  setFXRates = function () {
    console.log('setting exchange rates');
    for (let i = 0; i < this.realms.length; i++) {
      // calculate rates for this realm
      const tempFxRate: FxRate[] = [];
      this.realms[i].FxRate = tempFxRate;
    }
  };

  constructor(realms: Realm[]) {
    this.realms = realms;
  }
}
