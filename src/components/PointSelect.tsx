import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StopPoint } from '../types';

export default function PointSelect({label, points, selected, onPointChange}: {label: string, points: StopPoint[], selected: string, onPointChange: (point: string) => void}) {
  
  const handleChange = (event: SelectChangeEvent) => {
    onPointChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="point-select-input-label">{label} Point</InputLabel>
        <Select
          labelId="point-select-label"
          id="point-select"
          value={selected}
          label="{label}"
          onChange={handleChange}
        >
          {
            points.map((point) => (<MenuItem  value={point.name}>{point.name}</MenuItem>))
          }
        </Select>
      </FormControl>
    </Box>
  );
}