import React, { useState } from "react";
import Layout from "../../components/global/Layout";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Grid,
  TextField,
  Snackbar,
} from "@mui/material";
import { tokens } from "../../constants/theme";
import contactBg from "../../assets/images/contact-bg.jpeg";

import ExploreIcon from "@mui/icons-material/Explore";
import ContactsIcon from "@mui/icons-material/Contacts";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { POSTNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const ContactUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formError, setFormError] = useState("");

  const handelContact = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !message) {
      setFormError('All fields are required.');
      setTimeout(() => {
        setFormError('');
      }, 2000);
      return;
    }

    const loginPayload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      datafrom: "Yashila",
    };

    try {
      const loginResponse = await POSTNETWORK(ApiUrl.LOGIN_URL, loginPayload);
      if (loginResponse.status) {
        console.log("Login successful:", loginResponse);
        setOpenSnackbar(true);
      } else {
        console.error("Login failed. No token in the response.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
    <Layout>
      <ThemeProvider theme={styleTheme}>
        <Box>
          {/* Intro bg Details */}
          <Box
            sx={{
              backgroundColor: "#333",
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <Box
              sx={{
                marginLeft: "16px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  color: colors.white[100],
                  fontWeight: "900",
                  marginBottom: "5px",
                  fontSize: "42px",
                  textAlign: "center",
                }}
              >
                CONTACT US
              </Typography>
            </Box>
          </Box>
          {/* End */}

          {/* Contact Info Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
              padding: {
                xs: "0px 10px",
                sm: "0px 10px",
                md: "0px 100px",
                lg: "0px 100px",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "100%", md: "60vw", lg: "60vw" } }}
            >
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{
                  color: colors.darkGreen[100],
                  marginBottom: "50px",
                  fontSize: { xs: "20px", sm: "26px", md: "36px" },
                }}
              >
                GET IN TOUCH
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "100%", sm: "100%", md: "20vw", lg: "20vw" },
                    fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.90rem" },
                  }}
                >
                  <Link to='https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8' style={{textDecoration:'none', color:colors.darkGreen[100]}}>
                  <ExploreIcon
                    sx={{
                      fontSize: "50px",
                      marginRight: "15px",
                      backgroundColor: colors.darkGreen[100],
                      color: colors.yellow[100],
                      padding: "7px",
                    }}
                  />
                    </Link>
                  
                  <Link to='https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8' style={{textDecoration:'none', color:colors.darkGreen[100]}}>
                  4th Floor, Bivab Gulmohar Commercial Nayapalli, Bhubaneswar –
                  751012, Odisha
                    </Link>
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.90rem" },
                  }}
                >
                  <Link
                  style={{
                    textDecoration: "none",
                    color: colors.darkGreen[100],
                  }}
                  rel="stylesheet"
                  to="mailto:sales@bivabyashila.com"
                >
                  <MarkEmailReadIcon
                    sx={{
                      fontSize: "50px",
                      marginRight: "15px",
                      backgroundColor: colors.darkGreen[100],
                      color: colors.yellow[100],
                      padding: "7px",
                    }}
                  /> 
                </Link>
                  
                  <Link
                  style={{
                    textDecoration: "none",
                    color: colors.darkGreen[100],
                  }}
                  rel="stylesheet"
                  to="mailto:sales@bivabyashila.com"
                >
                  Email Us : sales@bivabyashila.com
                </Link>
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.90rem" },
                  }}
                >
                  <ContactsIcon
                    sx={{
                      fontSize: "50px",
                      marginRight: "15px",
                      backgroundColor: colors.darkGreen[100],
                      color: colors.yellow[100],
                      padding: "7px",
                    }}
                  />
                  Phone : &nbsp;
                  <Typography
                      variant="p"
                      style={{ color: colors.darkblue[100] }}
                    >
                      <Link to="tel:+919437345524" style={{textDecoration:'none', color: colors.darkblue[100], fontWeight:700}}>
                        +91 9437345524
                      </Link>{" "}
                      /{" "}
                      <Link to="tel:+917381863666" style={{textDecoration:'none', color: colors.darkblue[100], fontWeight:700}}>
                        7381863666
                      </Link>{" "}
                      /{" "}
                      <Link to="tel:+919937129034" style={{textDecoration:'none', color: colors.darkblue[100], fontWeight:700}}>
                        9937129034
                      </Link>
                    </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "20px",
                  borderTop: "1px solid",
                  width: { xs: "100%", sm: "100%", md: "20vw", lg: "20vw" },
                  paddingTop: "10px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="700"
                  sx={{
                    color: colors.darkblue[100],
                    fontSize: { xs: "0.60rem", sm: "0.90rem", md: "1.2rem" },
                  }}
                >
                  Follow Us :
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link to="https://www.facebook.com/BivabDevelopers/">
                <FacebookIcon
                    sx={{
                      backgroundColor: "#4d68a1",
                      color: colors.white[100],
                      marginRight: "10px",
                      fontSize: "32px",
                      padding: "2px",
                      marginLeft: "15px",
                    }}
                  />
                </Link>

                  <Link to="https://www.instagram.com/bivab_developers/">
                  <InstagramIcon
                    sx={{
                      backgroundColor: "#262626",
                      color: colors.white[100],
                      fontSize: "32px",
                      padding: "2px",
                      marginRight: "10px",
                    }}
                  />
                  </Link>
                  
                  <Link to="https://twitter.com/BivabOfficial">
                  <TwitterIcon
                    sx={{
                      backgroundColor: "#1da0f0",
                      color: colors.white[100],
                      marginRight: "10px",
                      fontSize: "32px",
                      padding: "2px",
                    }}
                  />
                  </Link>
                  
                  <Link to="https://www.youtube.com/@bivabyashila">
                  <YouTubeIcon
                    sx={{
                      backgroundColor: "#cb201f",
                      color: colors.white[100],
                      fontSize: "32px",
                      padding: "2px",
                    }}
                  />
                  </Link>
                  
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: { xs: "0px", sm: "0px", md: "50px", lg: "50px" },
                backgroundColor: colors.darkGreen[100],
                padding: "82px 56px",
                marginTop: { xs: "15px", sm: "15px", md: "0px", lg: "0px" },
              }}
            >
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{
                  color: colors.yellow[100],
                  marginBottom: "40px",
                  fontSize: { xs: "20px", sm: "26px", md: "36px" },
                }}
              >
                Send Us A Message.
              </Typography>

              {/* Contact form */}
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                message="Form submitted successfully!"
                sx={{
                  color: "#FFFFFF",
                  position: "relative",

                  "& .MuiSnackbarContent-message": {
                    flex: "auto",
                  },
                }}
              />
              <form onSubmit={handelContact}>
                <Grid container spacing={2}>
                  {/* First Row */}
                  <Grid item xs={6}>
                    <TextField
                      InputLabelProps={{
                        sx: {
                          color: colors.darkGreen[100],
                        },
                      }}
                      variant="outlined"
                      fullWidth
                      sx={{
                        backgroundColor: colors.darkblue[200],
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: colors.darkGreen[100], // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkblue[100], // Border color when focused
                          },
                        },
                      }}
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      InputLabelProps={{
                        sx: {
                          color: colors.darkGreen[100],
                        },
                      }}
                      variant="outlined"
                      fullWidth
                      sx={{
                        backgroundColor: colors.darkblue[200],
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: colors.darkGreen[100], // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkblue[100], // Border color when focused
                          },
                        },
                      }}
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>

                  {/* Second Row */}
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        sx: {
                          color: colors.darkGreen[100],
                        },
                      }}
                      variant="outlined"
                      fullWidth
                      sx={{
                        backgroundColor: colors.darkblue[200],
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: colors.darkGreen[100], // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkblue[100], // Border color when focused
                          },
                        },
                      }}
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  {/* Third Row */}
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        sx: {
                          color: colors.darkGreen[100],
                          borderRadius: "10px",
                        },
                      }}
                      variant="outlined"
                      fullWidth
                      sx={{
                        backgroundColor: colors.darkblue[200],
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: colors.darkGreen[100], // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkblue[100], // Border color when focused
                          },
                        },
                      }}
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>

                  {/* Fourth Row */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "10vw",
                        color: colors.darkGreen[100],
                        backgroundColor: colors.white[100],
                        fontWeight: "bold",
                        "&:hover": {
                          color: colors.darkGreen[100],
                          backgroundColor: colors.yellow[100],
                        },
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                  
                  {/* Display error message */}
                  {formError && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "red", textAlign: "center" }}
                    >
                      {formError}
                    </Grid>
                  )}
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default ContactUs;
