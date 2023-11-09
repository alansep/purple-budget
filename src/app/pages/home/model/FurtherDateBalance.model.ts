export class FurtherDateBalance {

    private _date: string;
    private _value: string;
    private _difference: string = '';

    constructor(date: string, value: string) {
        this._date = date;
        this._value = value;
    }

    public get date(): string {
        return this._date;
    }

    public get value(): string {
        return this._value;
    }

    public get difference(): string {
        return this._difference;
    }

    public set difference(difference: string){
        this._difference = difference;
    }


}