//import { useState } from "react";
//CSS
import "../CSS/App.css";
//Components
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const Pricing: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Free</Typography>
              <Typography>Basic features for individual users</Typography>
              <Typography variant="h6">$0/month</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Pro</Typography>
              <Typography>Advanced features for frequent users</Typography>
              <Typography variant="h6">$5/month</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Enterprise</Typography>
              <Typography>Custom solutions for businesses</Typography>
              <Typography variant="h6">Contact Us</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
