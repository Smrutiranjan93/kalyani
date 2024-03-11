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
  Link,
  Button,
  Popper,
  Grid,
  Fade,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import MenuIcon from "@mui/icons-material/Menu";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../constants/theme";
import Logo from "../../assets/images/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

import { Tb360View } from "react-icons/tb";

import { POSTNETWORK, GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
        md2: 1196,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Kaushan Script", "cursive"].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 12,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <ElevationScroll>
        <AppBar
          sx={{ backgroundColor: colors.darkGreen[100], position: "fixed" }}
        >
          <Container sx={{ padding: "0px 0px" }}>
            <Toolbar sx={{ display: "contents" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  href={"/"}
                  sx={{
                    textDecoration: "none",
                    padding: {
                      xs: "11px",
                      sm: "11px",
                      md: "11px",
                      lg: "11px",
                      xl: "0px",
                    },
                  }}
                >
                  <img
                    alt="profile-user"
                    width="200px"
                    height="55px"
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
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          md2: "row",
          xl: "row",
        },
        width: { xs: 200, sm: 200, md: "100%" },
        padding: "20px",
        backgroundColor: colors.darkGreen[100],
        height: "100%",
        alignItems: {
          xs: "baseline",
          sm: "baseline",
          md: "baseline",
          md2: "center",
          lg: "center",
          xl: "center",
        },
      }}
    >
      {[
        { id: "home", label: "Home", to: "/" },
        { id: "amentities", label: "Amenities", to: "/amentities" },
        { id: "photo", label: "Photo Gallery", to: "/photo-gallery" },
        { id: "property", label: "Property", to: "/properties" },
        { id: "about", label: "About Us", to: "/about-us" },
        { id: "contact", label: "Contact Us", to: "/contact-us" },
      ].map((item) => (
        <Typography
          key={item.id}
          variant="h4"
          sx={{
            fontWeight: "600",
            cursor: "pointer",
            marginLeft: { md: "1rem", sm: "0" },
            color: select === item.id ? colors.yellow[100] : colors.white[100],
            marginRight: "1rem",
            fontSize: "16px",
            marginBottom: {
              xs: "10px",
              sm: "10px",
              md: "10px",
              md2: "0px",
              lg: "0px",
              xl: "0px",
            },
          }}
          onClick={() => {
            handleSectionClick(item.id);
          }}
        >
          <Link
            href={item.to}
            sx={{
              textDecoration: "none",
              color: "white",
              "&:hover": {
                textDecoration: "none",
                color: "white",
                fontWeight: 400,
              },
            }}
          >
            {item.label}
          </Link>
        </Typography>
      ))}

      {/* Modal */}
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              sx={{
                color: colors.white[100],
                backgroundColor: colors.yellow[300],
                padding: "5px 10px",
                border: "1px solid white",
                "&:hover": {
                  color: colors.darkblue[100],
                  backgroundColor: "white",
                  border: "1px solid black",
                },
              }}
            >
              360 Tour
            </Button>
            <Menu
              {...bindMenu(popupState)}
              sx={{
                ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                  background:
                    "linear-gradient(45deg, rgb(191, 149, 63), rgb(187 160 93), rgba(170, 119, 28, 0.82), rgb(172 139 77))",
                },
              }}
            >
              <MenuItem sx={{"&:hover": {
                backgroundColor: colors.darkGreen[100],
              }}}> 
                <Link
                  href="/orchid"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "#f9ff77",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  <Tb360View />
                </Link>
                <Link
                  href="/orchid"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "white",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  Orchid [2 BHK]
                </Link>
              </MenuItem>

              <MenuItem sx={{"&:hover": {
                backgroundColor: colors.darkGreen[100],
              }}}>
                <Link
                  href="/orchid"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "#f9ff77",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  <Tb360View />
                </Link>
                <Link
                  href="/mogra"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "white",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  Mogra [2 BHK]
                </Link>
              </MenuItem>

              <MenuItem sx={{"&:hover": {
                backgroundColor: colors.darkGreen[100],
              }}}>
                <Link
                  href="/orchid"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "#f9ff77",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  <Tb360View />
                </Link>
                <Link
                  href="/neelkamal"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "white",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  Neelkamal [1 BHK]
                </Link>
              </MenuItem>

              <MenuItem sx={{"&:hover": {
                backgroundColor: colors.darkGreen[100],
              }}}>
                <Link
                  href="/orchid"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "#f9ff77",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  <Tb360View />
                </Link>
                <Link
                  href="/parijat"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      md2: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                    color: "white",
                    "&:hover": {
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        md2: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      color: colors.white[100],
                    },
                  }}
                >
                  Parijat [1 BHK]
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      {/*will add a profile icon*/}
      {/* <Link
        href="/profile"
        sx={{
          alignItems: "center",
          display: "flex",
          textDecoration: "none",
          marginLeft: "15px",
          borderRadius: "22px",
          backgroundColor: colors.white[100],
          padding: "6px",
          "&:hover": {
            alignItems: "center",
            display: "flex",
            textDecoration: "none",
            marginLeft: "15px",
            borderRadius: "22px",
            padding: "6px",
          },
        }}
      >
        <PersonIcon sx={{
          color:colors.black[100],
          "&:hover": {
            color:colors.darkGreen[100]
          }
          }}/>
      </Link> */}
      {/*End*/}
    </Box>
  );
};

const SecondNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isScrolled, setIsScrolled] = useState(false);

  {
    /* API Integration */
  }

  const [contactLogs, setContactLogs] = useState([]);

  useEffect(() => {
    const contactLogsData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.CONTACT_INFO_URL);
        if (response.status) {
          setContactLogs(response.data);
          console.log(response.data);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    contactLogsData();

    {
      /* Handle scroll logic */
    }

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

  {
    /* END API Integration */
  }

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
    typography: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Kaushan Script", "cursive"].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 14,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <Slide in={!isScrolled} direction="down">
        <AppBar
          sx={{
            background:
              "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
            position: "relative",
            zIndex: 1001,
            top: "76px",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Container
            sx={{
              padding: "5px 0px",
            }}
          >
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
                <Box sx={{ display: "flex", alignItems: "center" }}>
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

                {contactLogs &&
                  contactLogs.length > 0 &&
                  contactLogs[0] &&
                  contactLogs[0].email &&
                  contactLogs[0].primaryNumber &&
                  contactLogs[0].secondaryNumber && (
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "22px",
                        }}
                      >
                        <Link
                          sx={{
                            textDecoration: "none",
                            color: colors.darkGreen[100],
                          }}
                          rel="stylesheet"
                          href={`mailto:${contactLogs[0].email}`}
                        >
                          <EmailOutlinedIcon
                            sx={{
                              color: colors.darkGreen[100],
                              marginRight: "10px",
                            }}
                          />
                        </Link>
                        <Typography
                          variant="h6"
                          style={{
                            color: colors.darkGreen[100],
                            fontWeight: "700",
                          }}
                        >
                          <Link
                            sx={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.white[100],
                              },
                            }}
                            rel="stylesheet"
                            href={`mailto:${contactLogs[0].email}`}
                          >
                            {contactLogs[0].email}
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <PhoneOutlinedIcon
                          sx={{
                            color: colors.darkGreen[100],
                            marginRight: "10px",
                          }}
                        />
                        <Typography
                          variant="h6"
                          style={{ color: colors.darkGreen[100] }}
                        >
                          <Link
                            href={`tel:+91${contactLogs[0].primaryNumber}`}
                            sx={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                              fontWeight: 700,
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.white[100],
                              },
                            }}
                          >
                            +91 {contactLogs[0].primaryNumber}
                          </Link>{" "}
                          /{" "}
                          <Link
                            href={`tel:+91${contactLogs[0].secondaryNumber}`}
                            sx={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                              fontWeight: 700,
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.white[100],
                              },
                            }}
                          >
                            {contactLogs[0].secondaryNumber}
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </ThemeProvider>
  );
};

export { TopNavbar, SecondNavbar };
