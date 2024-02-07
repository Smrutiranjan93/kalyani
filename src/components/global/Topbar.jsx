import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../constants/theme";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const TopNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [select, setSelect] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSectionClick = (sectionId) => {
    setSelect(sectionId);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const styleTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <ElevationScroll>
        <AppBar
          sx={{ backgroundColor: colors.darkGreen[100], position: "relative" }}
        >
          <Container sx={{ padding: "15px 0px" }}>
            <Toolbar sx={{ display: "contents" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="profile-user"
                    width="150px"
                    height="50px"
                    src={Logo}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Link>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "centers",
                  }}
                >
                  {isMobile ? (
                    // Hamburger Menu Icon for Mobile
                    <MenuIcon
                      sx={{
                        color: "white",
                        fontSize: "2rem",
                        cursor: "pointer",
                        marginRight: "15px",
                      }}
                      onClick={() => toggleDrawer(true)}
                    />
                  ) : (
                    // Desktop Navigation Links
                    <NavigationLinks
                      select={select}
                      handleSectionClick={handleSectionClick}
                    />
                  )}
                </Box>
              </Box>
            </Toolbar>
          </Container>

          {/* Responsive Drawer for Mobile */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <NavigationLinks
              select={select}
              handleSectionClick={handleSectionClick}
            />
          </Drawer>
        </AppBar>
      </ElevationScroll>
    </ThemeProvider>
  );
};

const NavigationLinks = ({ select, handleSectionClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        width: { xs: 200, sm: 200, md: "100%" },
        padding: "20px",
        backgroundColor: colors.darkGreen[100],
        height: "100%",
      }}
    >
      {[
        { id: "home", label: "Home", to: "/" },
        { id: "amentities", label: "Amenities", to: "/amentities" },
        { id: "photo", label: "Photo Gallery", to: "/photo-gallery" },
        { id: "about", label: "About Us", to: "/about-us" },
        { id: "contact", label: "Contact Us", to: "/contact-us" },
        { id: "virtualtour", label: "Parijat 360 V-Tour", to: "/virtualtour" },
      ].map((item) => (
        <Typography
          key={item.id}
          variant="h6"
          sx={{
            color: select === item.id ? colors.yellow[100] : colors.white[100],
            marginBottom: "15px",
            fontWeight: "700",
            cursor: "pointer",
            marginLeft: { md: "2rem", sm: "0" },
          }}
          onClick={() => {
            handleSectionClick(item.id);
          }}
        >
          <Link
            to={item.to}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {item.label}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

const SecondNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styleTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <Slide in={!isScrolled} direction="down">
        <AppBar
          style={{
            backgroundColor: colors.yellow[100],
            position: "relative",
            zIndex: 1001,
          }}
        >
          <Container sx={{ padding: "15px 0px" }}>
            <Toolbar sx={{ display: "contents" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                  },
                  marginLeft: { xs: "15px", sm: "0px", md: "0px", lg: "0px" },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  {/* Twitter */}
                  <Link to="https://twitter.com/BivabOfficial">
                    <TwitterIcon
                      sx={{
                        color: colors.darkGreen[100],
                        marginRight: {
                          xs: "5px",
                          sm: "5px",
                          md: "22px",
                          lg: "22px",
                        },
                      }}
                    />
                  </Link>

                  {/* Facebook */}
                  <Link to="https://www.facebook.com/BivabDevelopers/">
                    <FacebookIcon
                      sx={{
                        color: colors.darkGreen[100],
                        marginRight: {
                          xs: "5px",
                          sm: "5px",
                          md: "22px",
                          lg: "22px",
                        },
                      }}
                    />
                  </Link>

                  {/* Instagram */}
                  <Link to="https://www.instagram.com/bivab_developers/">
                    <InstagramIcon
                      sx={{
                        color: colors.darkGreen[100],
                        marginRight: {
                          xs: "5px",
                          sm: "5px",
                          md: "22px",
                          lg: "22px",
                        },
                      }}
                    />
                  </Link>

                  {/* Youtube */}
                  <Link to="https://www.youtube.com/@bivabyashila">
                    <YouTubeIcon
                      sx={{
                        color: colors.darkGreen[100],
                        marginRight: {
                          xs: "5px",
                          sm: "5px",
                          md: "22px",
                          lg: "22px",
                        },
                      }}
                    />
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                    marginRight: "15px",
                  }}
                >
                  <Box sx={{ display: "flex", marginRight: "22px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: colors.darkGreen[100],
                      }}
                      rel="stylesheet"
                      to="mailto:info@bivabdevelopers.com"
                    >
                      <EmailOutlinedIcon
                        sx={{
                          color: colors.darkGreen[100],
                          marginRight: "10px",
                        }}
                      />
                    </Link>
                    <Typography
                      variant="p"
                      style={{
                        color: colors.darkGreen[100],
                        fontWeight: "700",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: colors.darkGreen[100],
                        }}
                        rel="stylesheet"
                        to="mailto:info@bivabdevelopers.com"
                      >
                        info@bivabdevelopers.com
                      </Link>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <PhoneOutlinedIcon
                      sx={{ color: colors.darkGreen[100], marginRight: "10px" }}
                    />
                    <Typography
                      variant="p"
                      style={{ color: colors.darkblue[100] }}
                    >
                      <Link
                        to="tel:+917381097302"
                        style={{
                          textDecoration: "none",
                          color: colors.darkblue[100],
                          fontWeight: 700,
                        }}
                      >
                        +91 7381097302
                      </Link>{" "}
                      /{" "}
                      <Link
                        to="tel:+917381262666"
                        style={{
                          textDecoration: "none",
                          color: colors.darkblue[100],
                          fontWeight: 700,
                        }}
                      >
                        7381262666
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </ThemeProvider>
  );
};

export { TopNavbar, SecondNavbar };
