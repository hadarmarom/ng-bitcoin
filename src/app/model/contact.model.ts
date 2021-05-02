export class Contact {

    constructor(public name: string = '', public email: string = '', public phone: string = '', public coins: number , public _id?: string) {
    }

    setId?(length = 5) {
        var txt = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
}