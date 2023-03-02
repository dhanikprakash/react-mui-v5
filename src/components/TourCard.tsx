import { AccessTime } from "@mui/icons-material";
import { createTheme, Rating, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import React from "react";
import img1 from "../images/test.jpeg";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard: React.FC<any> = ({ tour }) => {
  return (
    <>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <img src={tour.image} alt={tour.name} className="img"></img>
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={3}
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body1" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews})
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h4" marginLeft={0.5}>
                  from {tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default TourCard;
