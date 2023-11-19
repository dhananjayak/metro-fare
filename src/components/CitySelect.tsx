import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { allCities } from '../store/location-store';
import { CityType } from '../types';

export default function CitySelect({city, onCityChange}: {city:string, onCityChange: (cityType: CityType) => void}) {
  const cities = React.useMemo(allCities, []);

  const handleChange = (event: SelectChangeEvent) => {
    onCityChange as any as (cityType: CityType) => void;
    onCityChange(event.target.value as CityType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-city">City</InputLabel>
        <Select
          labelId="select-city-label"
          id="select-city-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          {
            cities.map((cityType) => (<MenuItem  value={cityType}>{cityType}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
  );
}
