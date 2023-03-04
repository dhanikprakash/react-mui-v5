import { Button, FormControl, Grid, InputLabel, MenuItem, Select, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#81c784',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize:12,
  },
  components:{
    MuiSvgIcon:{
      styleOverrides:{
          root:{
            color:"blueviolet",
            ":hover": {cursor: "pointer"}
          }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            border: `2px dashed blue`,
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            border: `4px dashed blue`,
          },
        },
      ],
    },
  }
});

const Tour = () => {
  return (<Container>

    <Grid marginTop={10} container>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <Select
            variant="standard"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            IconComponent={({ ...props }) => { console.log(JSON.stringify({ ...props })); return (<AccessAlarmIcon {...props} sx={{ fill: 'green' }} />) }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" sx={{height:40}} >Secondary</Button>
          <Typography variant="body1">This is a test message </Typography>
          <AccessAlarmIcon  />
        </ThemeProvider>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  </Container >);
};

export default Tour;
