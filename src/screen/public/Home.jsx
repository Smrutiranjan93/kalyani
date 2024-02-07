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
import heroImage from "../../assets/images/hero-image-for-bivab.png";
import ViewImage from "../../assets/images/view-2.jpeg";
import React, { useState, useEffect } from "react";

import AodIcon from "@mui/icons-material/Aod";
import ExploreIcon from "@mui/icons-material/Explore";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import FormProps from "../../components/reusable/FormPopup";

import Link from "@mui/material/Link";

import { POSTNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";
import AmentitiesComponent from "../../components/reusable/AmentitiesComponent";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Home = () => {
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

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setShowPopup(true);
    return () => {};
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
    <Layout>
      <ThemeProvider theme={styleTheme}>
        <FormProps open={showPopup} onClose={handleClosePopup} />
        <Box>
          {/* Hero Section */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="start"
            alignItems="start"
          >
            <img
              alt="profile-user"
              width="100%"
              height="100%"
              src={heroImage}
              style={{
                cursor: "pointer",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="h5"
              fontWeight="400"
              sx={{
                position: "absolute",
                color: colors.darkGreen[100],
                width: { xs: "60vw", sm: "35vw", md: "35vw", lg: "35vw" },
                zIndex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                fontSize: { xs: "15px", sm: "20px", md: "50px", lg: "50px" },
                marginLeft: "6vw",
                fontFamily: "cursive",
              }}
            >
              Wake Up To The Sound Of Sea In The Land Of Lord
              <Typography
                varient="h6"
                fontWeight="700"
                sx={{
                  color: colors.black[200],
                  marginTop: "4vh",
                  fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "18px" },
                }}
              >
                Bivab Yashila where every sunrise is a melody, and every day is
                an ode to coastal living
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: colors.darkGreen[100],
                  backgroundColor: colors.yellow[100],
                  borderRadius: "9px",
                  fontWeight: "900",
                  marginTop: { xs: "10px", sm: "15px", md: "32px", lg: "32px" },
                  width: { xs: "40vw", sm: "22vw", md: "15vw", lg: "12vw" },
                  padding: {
                    xs: "7px 0px",
                    sm: "10px 0px",
                    md: "21px 0px",
                    lg: "21px 0px",
                  },
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  "&:hover": {
                    color: colors.yellow[100],
                    backgroundColor: colors.darkGreen[100],
                  },
                }}
                onClick={handleOpenPopup}
              >
                CALL REQUEST
              </Button>
            </Typography>
          </Box>

          {/* Rera Website */}
          <Box
            sx={{
              background: colors.yellow[100],
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{
                color: colors.darkGreen[100],
                display: "flex",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <Link
                target="_blank"
                href="https://pacms.orera.in/PromoterDetails/pdfviewNew/1302"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  textDecoration: "none",
                  color: colors.darkblue[100],
                }}
              >
                RERA &nbsp; <ArrowForwardIcon /> &nbsp; MP/26/23/01025
              </Link>
            </Typography>
          </Box>

          {/* About Section */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: colors.darkGreen[100],
              padding: "100px 50px",
            }}
          >
            <Box
              sx={{
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Why Our Company Is The Perfect Partner For You?
              </Typography>
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{
                  color: colors.yellow[100],
                  marginBottom: "15px",
                }}
              >
                TALK TO AN EXPERT
              </Typography>
              <Typography
                variant="p"
                fontWeight="400"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Welcome to BIVAB® Yashila, a distinctive residential enclave in
                the heart of Puri, Odisha. Boasting over 300 meticulously
                crafted apartments, BIVAB Yashila is set to redefine modern
                living in this serene coastal town.
              </Typography>
              <Typography
                variant="p"
                fontWeight="400"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Nestled in the tranquil ambiance of Puri, our latest project
                reflects the essence of luxury, comfort, and innovation. BIVAB
                Yashila is more than just a collection of homes; it’s a
                lifestyle curated for those who seek the perfect blend of
                tranquility and convenience.
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="p"
                fontWeight="400"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Discover a harmonious living experience with thoughtfully
                designed spaces, modern amenities, and a scenic backdrop that
                echoes the spirit of Puri. Each apartment at BIVAB Yashila is a
                testament to our commitment to quality and excellence.
              </Typography>
              <Typography
                variant="p"
                fontWeight="400"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Immerse yourself in the coastal charm of Puri and elevate your
                living standards with BIVAB Yashila. Your dream home awaits in
                this coastal paradise, where the beauty of the surroundings
                meets the sophistication of modern architecture.
              </Typography>
              <Typography
                variant="p"
                fontWeight="400"
                sx={{
                  color: colors.white[100],
                  marginBottom: "15px",
                }}
              >
                Explore the allure of Puri living at BIVAB Yashila—where home is
                not just a place; it’s an experience. Welcome to a new era of
                residential excellence.
              </Typography>
            </Box>
          </Box>

          {/* Video Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{
                color: colors.black[100],
                marginBottom: "30px",
              }}
            >
              OUR VIDEO
            </Typography>
            <Box
              sx={{
                height: { xs: "100%", sm: "100%", md: "710px", lg: "710px" },
                width: { xs: "100%", sm: "100%", md: "95vw", lg: "95vw" },
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Fi0liGmAbTQ"
                title="BIVAB YASHILA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>

          {/* Short Intro Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "70vh",
              backgroundColor: colors.darkGreen[100],
              marginTop: "20px",
              backgroundImage: `url(${ViewImage})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "100%", md: "50vw", lg: "50vw" } }}
            >
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{
                  color: colors.yellow[100],
                  marginBottom: "20px",
                  filter: "brightness(100%)",
                }}
              >
                BIVAB Yashila Commercial
              </Typography>
              <Typography
                variant="p"
                fontWeight="700"
                sx={{
                  color: colors.white[100],
                  filter: "brightness(100%)",
                }}
              >
                BIVAB Yashila Commercial redefines business in Puri with a prime
                location designed for success. Our commercial spaces offer a
                strategic address, merging coastal allure with professional
                efficacy. Elevate your enterprise in an environment that fosters
                innovation and growth. BIVAB Yashila Commercial is not just a
                workspace; it’s a gateway to a thriving business community,
                where the vibrancy of Puri converges with your entrepreneurial
                aspirations.
              </Typography>
            </Box>
          </Box>

          {/* AMENITIES Section */}
          <AmentitiesComponent />

          {/* GALLERY Section */}
          <PhotoGalleryComponent />

          {/* Location Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{
                color: colors.black[100],
                marginBottom: "30px",
              }}
            >
              OUR LOCATION
            </Typography>
            <Box width="100%">
              <iframe
                loading="lazy"
                width="100%"
                height="400px"
                src="https://maps.google.com/maps?q=Bivab%20Yashila%2C%20Puri&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                title="Bivab Yashila, Puri"
                aria-label="Bivab Yashila, Puri"
              ></iframe>
            </Box>
          </Box>

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
            <Box>
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{
                  color: colors.darkGreen[100],
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AodIcon sx={{ fontSize: "40px", marginRight: "15px" }} />
                Free Quote
              </Typography>
              <Typography
                variant="h4"
                fontWeight="700"
                sx={{
                  color: colors.darkGreen[100],
                  marginBottom: "50px",
                }}
              >
                Feel Free To Ask Any Questions To Us
              </Typography>
              <Box>
                <Typography
                  variant="p"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="https://maps.app.goo.gl/5pccSjmyZpB91k3s5"
                    style={{
                      textDecoration: "none",
                      color: colors.darkGreen[100],
                    }}
                  >
                    <ExploreIcon sx={{ fontSize: "24px", marginRight: "15px" }} />
                  </Link>
                  
                  <Link
                    href="https://maps.app.goo.gl/5pccSjmyZpB91k3s5"
                    style={{
                      textDecoration: "none",
                      color: colors.darkGreen[100],
                    }}
                  >
                    Bivab Yashila, Puri
                  </Link>
                </Typography>
                <Typography
                  variant="p"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ContactsIcon
                    sx={{ fontSize: "24px", marginRight: "15px" }}
                  />
                  <Typography
                    variant="p"
                    style={{ color: colors.darkblue[100] }}
                  >
                    <Link
                      href="tel:+917381097302"
                      style={{
                        textDecoration: "none",
                        color: colors.darkGreen[100],
                        fontWeight: 700,
                      }}
                    >
                      +91 7381097302
                    </Link>{" "}
                    /{" "}
                    <Link
                      href="tel:+917381262666"
                      style={{
                        textDecoration: "none",
                        color: colors.darkGreen[100],
                        fontWeight: 700,
                      }}
                    >
                      7381262666
                    </Link>
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeFilledIcon
                    sx={{ fontSize: "24px", marginRight: "15px" }}
                  />
                  Mon - Sat: 9:00am - 6:00pm
                </Typography>
                <Typography
                  variant="p"
                  fontWeight="700"
                  sx={{
                    color: colors.darkGreen[100],
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: colors.darkGreen[100],
                    }}
                    href="mailto:info@bivabdevelopers.com"
                  >
                    <MarkEmailReadIcon
                    sx={{ fontSize: "24px", marginRight: "15px" }}
                  />
                  </Link>
                  
                  <Link
                    style={{
                      textDecoration: "none",
                      color: colors.darkGreen[100],
                    }}
                    href="mailto:info@bivabdevelopers.com"
                  >
                    sales@bivabyashila.com
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: { xs: "0px", sm: "0px", md: "50px", lg: "50px" },
              }}
            >
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

export default Home;
