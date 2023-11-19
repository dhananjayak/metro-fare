import { Amount, CityType, StopPoint } from "../types";

const BASIC_FARE = Amount.INR(10);

const TrainJourneyStore: Record<CityType, Record<string, StopPoint>> = {
    "Hyderabad": {
        "Nagole": { name: "Nagole", stop: 0, type: "Start" },
        "Uppal": { name: "Uppal", stop: 1, type: "Intermediate" },
        "NGRI": { name: "NGRI", stop: 2, type: "Intermediate" },
        "Habsiguda": { name: "Habsiguda", stop: 3, type: "Intermediate" },
        "Tarnaka": { name: "Tarnaka", stop: 4, type: "Intermediate" },
        "Mettuguda": { name: "Mettuguda", stop: 5, type: "Intermediate" },
        "Raidurg": { name: "Raidurg", stop: 6, type: "Stop" },
    },
    "Chennai": {
        "AGDMS": { name: "AGDMS", stop: 0, type: "Start" },
        "Anna Nagar East": { name: "Anna Nagar East", stop: 1, type: "Intermediate" },
        "Anna Nagar Tower": { name: "Anna Nagar Tower", stop: 2, type: "Intermediate" },
        "Arumbakkam": { name: "Arumbakkam", stop: 3, type: "Intermediate" },
        "Wimco Nagar": { name: "Wimco Nagar", stop: 4, type: "Stop" },
    },
    "Delhi": {
            "Dwarka Sector 21": { name: "Dwarka Sector 21", stop: 0, type: "Start" },
            "Rajiv Chowk": { name: "Rajiv Chowk", stop: 1, type: "Intermediate" },
            "Kashmere Gate": { name: "Kashmere Gate", stop: 2, type: "Intermediate" },
            "Janakpuri West": { name: "Janakpuri West", stop: 3, type: "Intermediate" },
            "Rajouri Garden": { name: "Rajouri Garden", stop: 4, type: "Intermediate" },
            "Chhattarpur": { name: "Chhattarpur", stop: 5, type: "Intermediate" },
            "Anand Vihar": { name: "Anand Vihar", stop: 6, type: "Stop" },
    },
}

export function allCities(): CityType[] {
    return Object.keys(TrainJourneyStore) as CityType[];
}

export function allPoints(city: CityType): StopPoint[] {
    return Object.values(TrainJourneyStore[city]);
}

export function getStop(city: CityType, stopName: string): StopPoint {
    return TrainJourneyStore[city][stopName];
}

export function totalFare(city: CityType, from: string, to: string): Amount {
    if (!city) return Amount.INR(0);
    if (!from) return Amount.INR(0);
    if (!to) return Amount.INR(0);

    const fromStop = getStop(city, from);
    const toStop = getStop(city, to);

    if (!fromStop) return Amount.INR(0);
    if (!toStop) return Amount.INR(0);

    const totalStops = Math.abs(toStop.stop - fromStop.stop);

    return BASIC_FARE.multiply(totalStops);
}