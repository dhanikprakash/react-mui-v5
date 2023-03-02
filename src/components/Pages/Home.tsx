import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import "../../App.css";
import TourCard from "../TourCard";
import citys from "../../data.json";
const Home = () => {
  return (
    <>
      <Container>
        {citys.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name}
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;
