//import { useState } from "react";
//CSS
import "../CSS/App.css";
//Components
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Features: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Find parking spots in real-time" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Declare available spots for others to find" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Get notified when a spot becomes available" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Rate and review parking experiences" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Features;
