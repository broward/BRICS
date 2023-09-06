export class Realm {
    realmID: number;
    realmName: string;

    constructor(id: number, name: string) {
            this.realmName = name;
            this.realmID = id;
    }

    getPool() : number {
        console.log('it worked');
        return 10000;
    }
}
