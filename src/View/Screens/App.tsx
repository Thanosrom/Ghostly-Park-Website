//import { useState } from "react";
//CSS
import "../CSS/App.css";
//Components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "Center",
        }}
      >
        <Header />
        <Body />
        <Footer />
      </Container>
    </>
  );
}

export default App;
