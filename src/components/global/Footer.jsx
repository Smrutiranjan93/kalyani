import React from "react";
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

const FirstFooter = () => {
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
  });
  return (
    <ThemeProvider theme={styleTheme}>
      <footer
        style={{
          marginTop: "50px",
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
                variant="h5"
                fontWeight="bold"
                style={{ color: colors.yellow[100] }}
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
                  variant="p"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    HOME{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/amentities"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    AMENTITIES{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/photo-gallery"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    PHOTO GALLERY{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/about-us"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    ABOUT US{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: colors.white[100], marginBottom: "5px" }}
                >
                  <Link
                    href={"/contact-us"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    CONTACT US{" "}
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

                <Typography variant="p" style={{ color: colors.white[100] }}>
                  Coastal elegance meets modern living in Puri, Odisha.
                  Experience serenity by the sea and elevate your lifestyle with
                  timeless sophistication.
                </Typography>
                <Box sx={{ display: "flex", marginTop: "18px" }}>
                  {/* Twitter */}
                  <Link href="https://twitter.com/BivabOfficial">
                    <TwitterIcon
                      sx={{ color: colors.yellow[100], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Facebook */}
                  <Link href="https://www.facebook.com/BivabDevelopers/">
                    <FacebookIcon
                      sx={{ color: colors.yellow[100], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Instagram */}
                  <Link href="https://www.instagram.com/bivab_developers/">
                    <InstagramIcon
                      sx={{ color: colors.yellow[100], marginRight: "22px" }}
                    />
                  </Link>

                  {/* Youtube */}
                  <Link href="https://www.youtube.com/@bivabyashila">
                    <YouTubeIcon sx={{ color: colors.yellow[100] }} />
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
                  variant="h5"
                  fontWeight="bold"
                  style={{ color: colors.yellow[100], marginBottom: "12px" }}
                >
                  CONTACT INFO
                </Typography>
                <Box
                  sx={{
                    marginLeft: { xs: "0px", sm: "27%", md: "27%", lg: "27%" },
                  }}
                >
                  <Box sx={{ display: "flex", marginBottom: "12px" }}>
                  <Link
                        href="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                        style={{
                          textDecoration: "none",
                          color: colors.white[100],
                        }}
                      >
                        <PinDropIcon
                      sx={{
                        color: colors.yellow[100],
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
                      variant="p"
                      style={{ color: colors.white[100] }}
                    >
                      <Link
                        href="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                        style={{
                          textDecoration: "none",
                          color: colors.white[100],
                        }}
                      >
                        4th Floor, Bivab Gulmohar Commercial Nayapalli,
                        Bhubaneswar – 751012, Odisha
                      </Link>
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", marginBottom: "12px" }}>
                    <PhoneOutlinedIcon
                      sx={{ color: colors.yellow[100], marginRight: "10px" }}
                    />
                    <Typography
                      variant="p"
                      style={{ color: colors.white[100] }}
                    >
                      <Link href="tel:+919437345524" color="inherit" style={{textDecoration:'none'}}>
                        +91 9437345524
                      </Link>{" "}
                      /{" "}
                      <Link href="tel:+917381863666" color="inherit" style={{textDecoration:'none'}}>
                        7381863666
                      </Link>{" "}
                      /{" "}
                      <Link href="tel:+919937129034" color="inherit" style={{textDecoration:'none'}}>
                        9937129034
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
                        href="mailto:info@bivabdevelopers.com"
                      >
                        <EmailOutlinedIcon
                      sx={{ color: colors.yellow[100], marginRight: "10px" }}
                    />
                      </Link>
                    <Typography
                      variant="p"
                      style={{ color: colors.white[100] }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: colors.white[100],
                        }}
                        rel="stylesheet"
                        href="mailto:info@bivabdevelopers.com"
                      >
                        info@bivabdevelopers.com
                      </Link>
                    </Typography>
                  </Box>
                </Box>
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
  return (
    <footer
      style={{
        backgroundColor: colors.darkblue[100],
        color: colors.white[100],
        padding: "20px 0",
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
        <Typography variant="h6">
          Copyright ©2021 Bivab Developers (P) Limited. All Rights Reserved. |
          Privacy Policy | Sitemap | Created by brandflik
        </Typography>
      </Container>
    </footer>
  );
};

export { FirstFooter, SecondFooter };
