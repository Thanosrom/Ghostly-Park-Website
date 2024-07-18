//import * as React from "react";
//CSS
import "../CSS/App.css";
//Images
import LogIn from "../../assets/Screenshots/LogIn.png";
import Menu from "../../assets/Screenshots/Menu.png";
import Home_FirstTime from "../../assets/Screenshots/Home_FirstTime.png";
import Searching from "../../assets/Screenshots/Searching.png";
import Search_Results from "../../assets/Screenshots/Search_Results.png";
import Route_3 from "../../assets/Screenshots/Route_3.png";
//Videos
import DemoVideo from "../../assets/Videos/DemoVideo.mp4";
//Components
import Carousel from "react-material-ui-carousel";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

function Body() {
  const carousel_1 = [
    {
      image: LogIn,
      description: `Effortlessly access Ghostly Park with our secure login feature. Start your parking journey seamlessly, ensuring every visit begins with ease.`,
    },
    {
      image: Menu,
      description: `Explore Ghostly Park's comprehensive menu options. Navigate through features and settings effortlessly to customize your parking experience.`,
    },
    {
      image: Home_FirstTime,
      description: `Welcome to Ghostly Park! Discover the app's intuitive interface for the first time. Get started quickly and find available parking spots with just a few taps.`,
    },
  ];
  const carousel_2 = [
    {
      image: Searching,
      description: `Initiate your parking search with Ghostly Park's powerful search feature. Find nearby available spots efficiently to save time and reduce stress.`,
    },
    {
      image: Search_Results,
      description: `View real-time search results instantly with Ghostly Park. Find detailed information about nearby parking availability and make informed decisions.`,
    },
    {
      image: Route_3,
      description: `Optimize your route with Ghostly Park's advanced navigation. Receive precise directions to your chosen parking spot, ensuring a smooth arrival.`,
    },
  ];
  return (
    <>
      <Container
        sx={{
          height: "auto",
          marginTop: "200px",
          marginBottom: "150px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: "0.5rem",
            marginBottom: "2rem",
            textDecoration: "none",
            fontSize: "3rem",
            letterSpacing: "0.05em",
            textShadow: "0px 50px 5px rgba(255, 0, 255, 0.3)",
            background: "linear-gradient(45deg, #6407df 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          gutterBottom
        >
          Welcome to Your Parking App
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "0.5rem",
            marginBottom: "2rem",
            fontSize: "1.5rem",
            background: "linear-gradient(45deg,  #FF8E53 30%, #6407df 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          paragraph
        >
          Simplify your parking experience with our advanced features.
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5em",
            marginBottom: "5rem",
          }}
        >
          <video
            width="100%"
            height="auto"
            style={{ borderRadius: "1em" }}
            controls
            autoPlay
            muted
          >
            <source src={DemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignContent="center"
        >
          {/* Grid Item 1 */}
          <Grid item xs={12} sm={6} md={6}>
            <Carousel>
              {carousel_1.map((card, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 550,
                    maxHeight: 700,
                    margin: "auto",
                    background: "transparent",
                    border: "1px solid #000000",
                  }}
                >
                  <CardMedia
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    component="img"
                    height="350em"
                    width="25em"
                    image={card.image}
                    alt="Log In"
                  />
                  <CardContent>
                    <Typography variant="body2" color="#ffffff">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Grid>
          {/* Grid Item 2 */}
          <Grid item xs={12} sm={6} md={6}>
            <Carousel>
              {carousel_2.map((card, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 550,
                    maxHeight: 700,
                    margin: "auto",
                    background: "transparent",
                    border: "1px solid #000000",
                  }}
                >
                  <CardMedia
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    component="img"
                    height="350em"
                    width="25em"
                    image={card.image}
                    alt="Log In"
                  />
                  <CardContent>
                    <Typography variant="body2" color="#ffffff">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{
            marginTop: "100px",
            borderBottom: "1px solid #ffffff",
            fontSize: "1.5rem",
            fontWeight: 600,
            textShadow: "0px 50px 5px rgba(255, 0, 255, 0.3)",
            background: "linear-gradient(45deg, #ffffff 30%, #6407df 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          gutterBottom
        >
          Ghostly Park is your go-to mobile app for seamless parking. Simply tap
          to log your parking spot anonymously, and Ghostly Park will update a
          live map for fellow users to find available spots nearby. Never circle
          the block again—join the community and navigate effortlessly to your
          next open parking space with Ghostly Park.
        </Typography>
      </Container>
    </>
  );
}

export default Body;
