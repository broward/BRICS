import { Realm } from './realm';
import { FxRate } from './fxrate';
import { Trx } from './trx';

export class Visitor {
  realms: Realm[] = [];
  fxrates: FxRate[] = [];
  trx: Trx[] = [];

  rebalance = function () {
    for (let i = 0; i < this.realms.length; i++) {
      console.log('rebalancing');
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

      //his.realms[i].FxRate = null;
      console.log('rebalancing');
    }
  };

  constructor(realms: Realm[]) {
    this.realms = realms;
  }
}
