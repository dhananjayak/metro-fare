export type CityType = "Hyderabad" | "Chennai" | "Delhi";
export type StopType = "Start" | "Stop" | "Intermediate";
export type Currency = "INR"

export type StopPoint = {
    name: string;
    stop: number;
    type: StopType;
}

export class Amount {
    constructor(public value: number, public currency: Currency) { }
    static INR(value: number): Amount {
        return new Amount(value, "INR");
    }

    multiply(multiplier: number): Amount {
        return new Amount(multiplier * this.value, this.currency);
    }

    toString(): string {
        return `${this.value} ${this.currency}`;
    }
}
