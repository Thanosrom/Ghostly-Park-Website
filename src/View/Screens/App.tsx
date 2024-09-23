//import { useState } from "react";
//CSS
import "../CSS/App.css";
//Components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import AboutUs from "../Screens/AboutUs";
import Features from "../Screens/Features";
import Pricing from "../Screens/Pricing";
import ContactUs from "../Screens/Contact";

import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>{" "}
        <Footer />
      </Container>
    </>
  );
}

export default App;
