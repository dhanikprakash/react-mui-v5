import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Tour = () => {
  return (<Container>
    <div>Tour</div>
    <Grid container>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <AccessAlarmIcon />
      </Grid>
    </Grid>
  </Container >);
};

export default Tour;
