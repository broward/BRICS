import {Realm} from './realm'

export class Visitor {
    realms: Realm[]
    rebalance = function() {
      console.log("running rebalance");
    }
    getTx = function() {
      console.log("getting transactions");
    }
    setFX = function() {
      console.log("setting exchange rates");
    }

    constructor(realms: Realm[]) {
      this.realms = realms
    }
}
