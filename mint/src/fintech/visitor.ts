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
        console.log('reserve = ' + this.realms[i].reserves[j].realmID);
        let currentReserve = i;
        let targetReserve = this.realms[i].reserves[j].realmID;

        // don't execute upon ourselves
        if (currentReserve == targetReserve) {
          console.log('checking self reserve');
          continue;
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
