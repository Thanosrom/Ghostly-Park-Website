//import * as React from "react";
//CSS
import "../CSS/App.css";
//Components
import { Container, Typography, Button } from "@mui/material";

function Footer() {
  return (
    <>
      <Container sx={{ height: "auto", marginTop: "auto" }}>
        <Typography variant="h6" align="center">
          Contact Information
        </Typography>
        <Typography variant="body2" align="center">
          Ghostly Park <br />
          {/* Address Terma Tropaiouchou, 53100 <br /> */}
          Phone: +23850 46629 <br />
          Email: info@ghostlypark.com
        </Typography>
        <Button
          color="inherit"
          onClick={() =>
            (window.location.href =
              "https://ghostlypark.com/privacy_Policy_And_Terms")
          }
        >
          <Typography variant="body2" align="center">
            Terms of Service | Privacy Policy
          </Typography>
        </Button>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Ghostly Park. All rights reserved.
        </Typography>
      </Container>
    </>
  );
}

export default Footer;
