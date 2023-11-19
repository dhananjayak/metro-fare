import * as React from 'react';
import { useMemo } from 'react';
import { CityType } from '../types';
import { totalFare } from '../store/location-store';
import { Typography } from '@mui/material';

export default function FareCalculator({city, from, to}: {city: CityType, from: string, to: string}) {
    const fare = useMemo(() => totalFare(city, from, to), [city, from, to]);

    return (
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            Fare : {fare.toString()}
        </Typography>
    );
}