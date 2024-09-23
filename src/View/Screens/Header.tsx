import * as React from "react";
//CSS
import "../CSS/App.css";
//Components
import ghostLogo from "../../assets/ghost_1.png";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material/";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const matches = useMediaQuery("(min-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About Us", "Features", "Pricing", "Contact Us"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link}
                to={
                  text === "Home"
                    ? "/"
                    : `/${text.replace(" ", "").toLowerCase()}`
                }
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Container>
      <AppBar
        sx={{
          backgroundColor: "#000000",
        }}
        position="fixed"
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "Center",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ImageList
              rowHeight={100}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                padding: 2,
                margin: 0,
                width: { xs: "100%", md: "auto" },
              }}
            >
              <ImageListItem
                sx={{
                  padding: 0,
                  margin: 0,
                }}
              >
                <img
                  src={ghostLogo}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                  alt="Ghostly Park Logo"
                />
              </ImageListItem>
            </ImageList>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              Ghostly Park
            </Typography>
            {matches ? (
              <Stack direction="row" spacing={2}>
                <Button component={Link} to="/" color="inherit">
                  Home
                </Button>
                <Button component={Link} to="/aboutus" color="inherit">
                  About Us
                </Button>
                <Button component={Link} to="/features" color="inherit">
                  Features
                </Button>
                <Button component={Link} to="/pricing" color="inherit">
                  Pricing
                </Button>
                <Button component={Link} to="/contactus" color="inherit">
                  Contact Us
                </Button>
                <Button
                  href="https://ghostlypark-my.sharepoint.com/:p:/p/info/Ed3jevfqjb1Ehdl2sXAr3qQBNi_HmvpxRtO8OfUazEHGGw?e=9oRgNE"
                  color="inherit"
                >
                  Manual
                </Button>
              </Stack>
            ) : (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={!matches && drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList}
      </Drawer>
    </Container>
  );
}

export default Header;
