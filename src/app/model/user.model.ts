export class User {

    constructor(public name: string = '', public coins: number = null, public moves: Array<string> = []) {

    }

    setId?() {
        // Implement your own set Id
        // this._id = makeId()
    }
}