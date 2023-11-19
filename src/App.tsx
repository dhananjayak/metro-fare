import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import CitySelect from './components/CitySelect';
import { LocationContext } from './context/location';
import { CityType } from './types';
import FareCalculatorForm from './components/FareCalculatorForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [selectedCity, setSelectedCity] = React.useState('');

  function handleCityChange(cityType: CityType) {
    setSelectedCity(cityType);
  }

  return (
    <LocationContext.Provider value={{selectedCity}}>
    <Box sx={{ flexGrow: 1 }}>
      <Header></Header>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <CitySelect city={selectedCity} onCityChange={handleCityChange}></CitySelect>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            {selectedCity && <FareCalculatorForm></FareCalculatorForm>}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </LocationContext.Provider>
  );
}
