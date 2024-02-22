import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useTheme } from "@mui/material";
import { tokens } from "../../constants/theme";
import LogoUp from "../../assets/images/logo-up.png";
import LogoDown from "../../assets/images/logo-down.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { POSTNETWORK, GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

const FirstFooter = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 14,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 13,
      },
    },
  });
  return (
    <ThemeProvider theme={styleTheme}>
      <footer
        style={{
          backgroundColor: colors.darkGreen[100],
          padding: "20px 0",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "start",
                  md: "start",
                  lg: "start",
                },
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  background: (theme) =>
                    `linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                QUICK LINKS
              </Typography>
              <Box
                sx={{
                  paddingLeft: "10px",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": {
                        textDecoration: "none",
                        color: colors.yellow[300],
                      },
                    }}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/amentities"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": {
                        textDecoration: "none",
                        color: colors.yellow[300],
                      },
                    }}
                  >
                    {" "}
                    Amentities{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/photo-gallery"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": {
                        textDecoration: "none",
                        color: colors.yellow[300],
                      },
                    }}
                  >
                    {" "}
                    Photo Gallery{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/about-us"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": {
                        textDecoration: "none",
                        color: colors.yellow[300],
                      },
                    }}
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/contact-us"}
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      "&:hover": {
                        textDecoration: "none",
                        color: colors.yellow[300],
                      },
                    }}
                  >
                    {" "}
                    Contact Us{" "}
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{}}>
                  <img
                    alt="profile-user"
                    width="45%"
                    height="70%"
                    src={LogoUp}
                    style={{
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    alt="profile-user"
                    width="70%"
                    height="70%"
                    src={LogoDown}
                    style={{
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  />
                </Box>

                <Typography variant="h5" style={{ color: colors.white[100] }}>
                  Coastal elegance meets modern living in Puri, Odisha.
                  Experience serenity by the sea and elevate your lifestyle with
                  timeless sophistication.
                </Typography>
                <Box sx={{ display: "flex", marginTop: "18px" }}>
                  {/* Twitter */}
                  <Link href="https://twitter.com/BivabOfficial">
                    <TwitterIcon
                      sx={{ color: colors.yellow[300], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Facebook */}
                  <Link href="https://www.facebook.com/BivabDevelopers/">
                    <FacebookIcon
                      sx={{ color: colors.yellow[300], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Instagram */}
                  <Link href="https://www.instagram.com/bivab_developers/">
                    <InstagramIcon
                      sx={{ color: colors.yellow[300], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Youtube */}
                  <Link href="https://www.youtube.com/@bivabyashila">
                    <YouTubeIcon sx={{ color: colors.yellow[300] }} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    background: (theme) =>
                      `linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    marginBottom: "12px",
                  }}
                >
                  CONTACT INFO
                </Typography>
                {contactLogs &&
                  contactLogs.length > 0 &&
                  contactLogs[0] &&
                  contactLogs[0].email &&
                  contactLogs[0].primaryNumber &&
                  contactLogs[0].secondaryNumber &&
                  contactLogs[0].location && (
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "0px",
                          sm: "27%",
                          md: "27%",
                          lg: "27%",
                        },
                        textAlign: {
                          xs: "center",
                          sm: "left",
                          md: "left",
                          lg: "left",
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {
                          xs: "center",
                          sm: "center",
                          md: "start",
                          lg: "start",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", marginBottom: "12px" }}>
                        <Link
                          href="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                          style={{
                            textDecoration: "none",
                            color: colors.white[300],
                          }}
                        >
                          <PinDropIcon
                            sx={{
                              color: colors.yellow[300],
                              marginRight: {
                                xs: "0px",
                                sm: "10px",
                                md: "10px",
                                lg: "10px",
                              },
                            }}
                          />
                        </Link>
                        <Typography
                          variant="h6"
                          style={{ color: colors.white[100] }}
                        >
                          <Link
                            href="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                            sx={{
                              textDecoration: "none",
                              color: "white",
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.yellow[300],
                              },
                            }}
                          >
                            {contactLogs[0].location}
                          </Link>
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", marginBottom: "12px" }}>
                        <PhoneOutlinedIcon
                          sx={{
                            color: colors.yellow[300],
                            marginRight: "10px",
                          }}
                        />
                        <Typography
                          variant="h6"
                          style={{ color: colors.white[100] }}
                        >
                          <Link
                            href={`tel:+91${contactLogs[0].primaryNumber}`}
                            color="inherit"
                            sx={{
                              textDecoration: "none",
                              color: "white",
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.yellow[300],
                              },
                            }}
                          >
                            +91 {contactLogs[0].primaryNumber}
                          </Link>{" "}
                          /{" "}
                          <Link
                            href={`tel:+91${contactLogs[0].secondaryNumber}`}
                            color="inherit"
                            sx={{
                              textDecoration: "none",
                              color: "white",
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.yellow[300],
                              },
                            }}
                          >
                            {contactLogs[0].secondaryNumber}
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", marginBottom: "12px" }}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: colors.white[100],
                          }}
                          rel="stylesheet"
                          href={`mailto:${contactLogs[0].email}`}
                        >
                          <EmailOutlinedIcon
                            sx={{
                              color: colors.yellow[300],
                              marginRight: "10px",
                            }}
                          />
                        </Link>
                        <Typography
                          variant="h6"
                          sx={{ color: colors.white[100] }}
                        >
                          <Link
                            sx={{
                              textDecoration: "none",
                              color: "white",
                              "&:hover": {
                                textDecoration: "none",
                                color: colors.yellow[300],
                              },
                            }}
                            rel="stylesheet"
                            href={`mailto:${contactLogs[0].email}`}
                          >
                            {contactLogs[0].email}
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </ThemeProvider>
  );
};

const SecondFooter = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        fontSize: 20,
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
      <footer
        style={{
          background:
            "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
          color: colors.darkGreen[100],
          padding: "10px 0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="700">
            Copyright ©2021 Bivab Developers (P) Limited. All Rights Reserved. |
            Privacy Policy | Sitemap | Created by brandflik
          </Typography>
        </Container>
      </footer>
    </ThemeProvider>
  );
};

export { FirstFooter, SecondFooter };
