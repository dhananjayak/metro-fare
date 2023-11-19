import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState, useMemo } from 'react';
import { LocationContext } from '../context/location';
import { allPoints } from '../store/location-store';
import PointSelect from './PointSelect';
import { CityType } from '../types';
import FareCalculator from './FareCalculator';



export default function FareCalculatorForm() {
    const {selectedCity} = useContext(LocationContext);

    const [fromPoint, setFromPoint] = useState('');
    const [toPoint, setToPoint] = useState('');

    const points = useMemo(() => {
        return selectedCity ? allPoints(selectedCity as CityType) : [];
    }, [selectedCity]);

    const canShowFare = useMemo(() => {
        return selectedCity && fromPoint && toPoint;
    }, [fromPoint, toPoint]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    function handleFromPointChange(point: string) {
        setFromPoint(point);
    }

    function handleToPointChange(point: string) {
        setToPoint(point);
    }

    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                    <PointSelect label="From" points={points} selected={fromPoint} onPointChange={handleFromPointChange}></PointSelect>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <PointSelect label="To" points={points} selected={toPoint} onPointChange={handleToPointChange}></PointSelect>
                    </Item>
                </Grid>
                {canShowFare && (
                <Grid item xs={8}>
                    <Item>
                        <FareCalculator city={selectedCity as CityType} from={fromPoint} to={toPoint}></FareCalculator> 
                    </Item>
                </Grid>)
                }
            </Grid>
        </Paper>
    );
}