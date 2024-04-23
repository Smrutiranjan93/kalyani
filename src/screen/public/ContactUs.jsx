import React, { useState, useEffect } from "react";
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

import { POSTNETWORK, GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Loading from "../../components/reusable/Loading";

import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  {
    /* API Integration */
  }

  {
    /* Contact Us Integration */
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formError, setFormError] = useState("");

  const handelContact = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !message) {
      setFormError("All fields are required.");
      setTimeout(() => {
        setFormError("");
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
      const loginResponse = await POSTNETWORK(ApiUrl.CONTACT_URL, loginPayload);
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

  {
    /* Contact logs Integration */
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

  {
    /* Loading logic */
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  {
    /* End */
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
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 64,
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
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 15,
      },
    },
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <ThemeProvider theme={styleTheme}>
            <Box sx={{ marginBottom: "50px" }}>
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
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "60vw", lg: "60vw" },
                  }}
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
                    {contactLogs &&
                      contactLogs.length > 0 &&
                      contactLogs[0] &&
                      contactLogs[0].location && (
                        <Typography
                          variant="h6"
                          fontWeight="700"
                          sx={{
                            color: colors.darkGreen[100],
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                            width: {
                              xs: "100%",
                              sm: "100%",
                              md: "20vw",
                              lg: "20vw",
                            },
                            fontSize: {
                              xs: "0.65rem",
                              sm: "0.75rem",
                              md: "0.90rem",
                            },
                          }}
                        >
                          <Link
                            to="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                            style={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                            }}
                          >
                            <GrLocation
                              style={{
                                fontSize: "50px",
                                marginRight: "15px",
                                backgroundColor: colors.darkGreen[100],
                                color: colors.yellow[100],
                                padding: "7px",
                              }}
                            />
                          </Link>

                          <Link
                            to="https://maps.app.goo.gl/e5jjvdM16zi5P6Ee8"
                            style={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                            }}
                          >
                            {contactLogs[0].location}
                          </Link>
                        </Typography>
                      )}

                    {contactLogs &&
                      contactLogs.length > 0 &&
                      contactLogs[0] &&
                      contactLogs[0].email && (
                        <Typography
                          variant="h6"
                          fontWeight="700"
                          sx={{
                            color: colors.darkGreen[100],
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: {
                              xs: "0.65rem",
                              sm: "0.75rem",
                              md: "0.90rem",
                            },
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              color: colors.darkGreen[100],
                            }}
                            rel="stylesheet"
                            to={`mailto:${contactLogs[0].email}`}
                          >
                            <AiOutlineMail
                              style={{
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
                            to={`mailto:${contactLogs[0].email}`}
                          >
                            Email Us : {contactLogs[0].email}
                          </Link>
                        </Typography>
                      )}

                    <Typography
                      variant="h6"
                      fontWeight="700"
                      sx={{
                        color: colors.darkGreen[100],
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: {
                          xs: "0.65rem",
                          sm: "0.75rem",
                          md: "0.90rem",
                        },
                      }}
                    >
                      <GiSmartphone
                        style={{
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
                        {contactLogs &&
                          contactLogs.length > 0 &&
                          contactLogs[0] &&
                          contactLogs[0].primaryNumber &&
                          contactLogs[0].secondaryNumber && (
                            <div>
                              <Link
                                to={`tel:+91${contactLogs[0].primaryNumber}`}
                                style={{
                                  textDecoration: "none",
                                  color: colors.darkblue[100],
                                  fontWeight: 700,
                                }}
                              >
                                +91 {contactLogs[0].primaryNumber}
                              </Link>{" "}
                              /{" "}
                              <Link
                                to={`tel:+91${contactLogs[0].secondaryNumber}`}
                                style={{
                                  textDecoration: "none",
                                  color: colors.darkblue[100],
                                  fontWeight: 700,
                                }}
                              >
                                {contactLogs[0].secondaryNumber}
                              </Link>
                            </div>
                          )}
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
                        fontSize: {
                          xs: "0.60rem",
                          sm: "0.90rem",
                          md: "1.2rem",
                        },
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
                    marginLeft: {
                      xs: "0px",
                      sm: "0px",
                      md: "50px",
                      lg: "50px",
                    },
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
                        data-aos="fade-up"
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
                        data-aos="fade-up"
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
                        data-aos="fade-up"
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
                        data-aos="fade-up"
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
                        data-aos="fade-up"
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
      )}
    </div>
  );
};

ContactUs.getInitialProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = "Loading";
  return { data };
};

export default ContactUs;
