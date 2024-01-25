import React from "react";
import { Box, Container, Grid, Typography,Link } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useTheme } from "@mui/material";
import { tokens } from "../../constants/theme";
import Logo from '../../assets/images/logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
          <Grid item xs={12} sm={4} sx={{textAlign:{ xs: 'center',sm: 'center', md: 'start', lg: 'start'}}}>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{ color: colors.yellow[100] }}
            >
              QUICK LINKS
            </Typography>
            <Box sx={{ paddingLeft: "10px", marginTop: "10px", display: 'flex', flexDirection:'column' }}>
              <Typography
                variant="p"
                sx={{ color: colors.white[100], marginBottom: "5px" }}
              >
                <Link
                    to={"/"}
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
                    to={"/amentities"}
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
                    to={"/photo-gallery"}
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
                    to={"/contact-us"}
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
              <img
                alt="profile-user"
                width="70%"
                height="70%"
                src={Logo}
                style={{
                  cursor: "pointer",marginBottom: "10px"
                }}
              />
              <Typography variant="p" style={{ color: colors.white[100] }}>
              Coastal elegance meets modern living in Puri, Odisha. Experience serenity by the sea and elevate your lifestyle with timeless sophistication.
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
                <InstagramIcon sx={{ color: colors.yellow[100], marginRight: "22px" }} />
                </Link>

                {/* Youtube */}
                <Link href="https://www.youtube.com/@bivabyashila">
                <YouTubeIcon sx={{ color: colors.yellow[100] }} />
                </Link>
                
                
                
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <Typography
                variant="h5"
                fontWeight="bold"
                style={{ color: colors.yellow[100] , marginBottom:'12px'}}
              >
                CONTACT INFO
              </Typography>
              <Box sx={{marginLeft:'27%'}}>
                <Box sx={{ display: "flex", marginBottom:'12px' }}>
                  <PinDropIcon
                    sx={{ color: colors.yellow[100], marginRight: "10px" }}
                  />
                  <Typography variant="p" style={{ color: colors.white[100] }}>
                  4th Floor, Bivab Gulmohar Commercial Nayapalli, Bhubaneswar – 751012, Odisha
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", marginBottom:'12px' }}>
                  <PhoneOutlinedIcon
                    sx={{ color: colors.yellow[100], marginRight: "10px" }}
                  />
                  <Typography variant="p" style={{ color: colors.white[100] }}>
                    +91 7381863666
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginBottom:'12px' }}>
                  <EmailOutlinedIcon
                    sx={{ color: colors.yellow[100], marginRight: "10px" }}
                  />
                  <Typography variant="p" style={{ color: colors.white[100] }}>
                  sales@bivabyashila.com
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
