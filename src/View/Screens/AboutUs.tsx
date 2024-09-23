//import { useState } from "react";
//CSS
import "../CSS/App.css";
//Components
import { Container, Typography } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Ghostly Park
      </Typography>
      <Typography variant="body1">
        Ghostly Park is your ultimate solution to find and share parking spots.
        Our mission is simple: to make parking easier for everyone. When you
        find a spot, declare it so others can park efficiently. Together, we
        create better parking experiences!
      </Typography>
    </Container>
  );
};

export default AboutUs;
