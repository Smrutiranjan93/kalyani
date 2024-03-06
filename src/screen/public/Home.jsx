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

import heroImage from "../../assets/images/hero-image-for-bivab.jpg";
import ViewImage from "../../assets/images/view-2.jpg";
import ReraQRCode from "../../assets/images/rera-qrcode.jpeg";
import ReraLogo from "../../assets/images/rera-logo.png";

import React, { useState, useEffect } from "react";

import AodIcon from "@mui/icons-material/Aod";
import ExploreIcon from "@mui/icons-material/Explore";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormProps from "../../components/reusable/FormPopup";

import Link from "@mui/material/Link";

import AmentitiesComponent from "../../components/reusable/AmentitiesComponent";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rera from "../../components/reusable/Rera";

import { POSTNETWORK, GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

import Carousel from "react-material-ui-carousel";

const Home = () => {
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
  const [ourVideo, setOurVideo] = useState([]);
  const [bivabCommercial, setBivabCommercial] = useState([]);

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

    const ourVideoData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.OUR_VIDEO_URL);
        if (response.status) {
          setOurVideo(response.data);
          console.log(response.data);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    ourVideoData();

    const bivabCommercialData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.BIVAB_COMMERCIAL_URL);
        if (response.status) {
          setBivabCommercial(response.data);
          console.log(response.data);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    bivabCommercialData();
  }, []);

  {
    /* END API Integration */
  }

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
        sm2: 750,
        md: 900,
        md2: 1024,
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

  const [gallery, setGallery] = useState([
    { id: "1", imageurl: "carousel-one.jpg" },
    { id: "2", imageurl: "carousel-two.jpg" },
    { id: "3", imageurl: "carousel-three.jpg" },
    { id: "4", imageurl: "carousel-four.jpg" },
    { id: "5", imageurl: "carousel-five.jpg" },
  ]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change interval as needed

    return () => clearInterval(interval);
  }, [gallery]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Layout>
      <ThemeProvider theme={styleTheme}>
        <FormProps open={showPopup} onClose={handleClosePopup} />
        <Box sx={{ marginTop: "-11px", position: "relative" }}>
          {/* ReRa Sticky side Botton */}
          <Box>
            <Rera />
          </Box>

          {/* Sticky Call for Enquiry */}
          <Box
            sx={{
              position: "fixed",
              bottom: "9px",
              left: "20px",
              zIndex: "100",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: colors.darkGreen[100],
                background:
                  "linear-gradient(45deg, rgb(191, 149, 63), rgb(211, 204, 131), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
                borderRadius: "100px",
                fontWeight: "900",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                border: "none",
                padding: "19px 18px",
                "&:hover": {
                  color: colors.white[100],
                  backgroundColor: colors.darkGreen[100],
                  border: "none",
                  padding: "19px 18px",
                },
              }}
              onClick={handleOpenPopup}
            >
              <LocalPostOfficeIcon />
            </Button>
          </Box>

          {/* Hero Section Carousel */}
          <Box
            sx={{
              position: "relative",
              height: {
                xs: "45vh",
                sm: "55vh",
                sm2: "62",
                md: "80vh",
                md2: "97vh",
                lg: "97vh",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: {
                  xs: "77%",
                  sm: "50%",
                  sm2: "50%",
                  md: "50%",
                  md2: "50%",
                  lg: "50%",
                },
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "-25px",
                }}
              ></Box>
              <Carousel
                indicators={false}
                index={selectedImageIndex}
                autoPlay={false}
              >
                {gallery.map((image) => (
                  <div>
                    <img
                      key={image.id}
                      src={`/${image.imageurl}`}
                      alt={`Image ${image.id + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        marginTop: "30px",
                      }}
                    />
                    <Typography
                      variant="h1"
                      fontWeight="400"
                      sx={{
                        position: "absolute",
                        background: (theme) =>
                          `linear-gradient(45deg, #0a3c2c, #1f5a23, #4d5062, #0a3c2c)`,
                        WebkitBackgroundClip: "text",
                        color: "white",
                        display: "inline-block",
                        width: {
                          xs: "73vw",
                          sm: "55vw",
                          md: "47vw",
                          lg: "47vw",
                        },
                        zIndex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        fontSize: {
                          xs: "24px",
                          sm: "35px",
                          md: "54px",
                          lg: "54px",
                        },
                        marginLeft: "6vw",
                        top: {
                          xs: "35%",
                          sm: "35%",
                          sm2: "35%",
                          md: "37%",
                          md2: "37%",
                          lg: "38%",
                        },
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Wake Up To The Sound Of Sea In The Land Of Lord
                      <Typography
                        varient="h2"
                        fontWeight="400"
                        sx={{
                          color: colors.white[100],
                          marginTop: "4vh",
                          fontSize: {
                            xs: "12px",
                            sm: "15px",
                            md: "20px",
                            lg: "20px",
                          },
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        Bivab Yashila where every sunrise is a melody, and every
                        day is an ode to coastal living
                      </Typography>
                    </Typography>
                  </div>
                ))}
              </Carousel>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    md2: "flex",
                    lg: "flex",
                  },
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  zIndex: 100,
                  padding: "10px 34px",
                  paddingRight: "123px",
                  paddingTop: "98px",
                  paddingBottom: "35px",
                  backgroundColor: "#fefefea1",
                  height: {
                    xs: "45vh",
                    sm: "55vh",
                    sm2: "62",
                    md: "80vh",
                    md2: "97vh",
                    lg: "97vh",
                  },
                }}
              >
                {gallery.map((image, index) => (
                  <Box
                    key={index}
                    padding={index === selectedImageIndex ? "0" : "15px"} // Adjust padding based on whether the image is selected
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer", transition: "padding 0.3s" }}
                  >
                    <Box sx={{ boxShadow: "-9px 9px 7px -1px" }}>
                      <img
                        src={`/${image.imageurl}`}
                        alt={`Small Property ${index + 1}`}
                        style={{
                          width: "100%",
                          maxHeight: "85px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Rera Website */}
          <Box
            sx={{
              background:
                "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              alignItems: "center",
              height: "20px",
            }}
          ></Box>

          {/* About Section */}
          <Box
            sx={{
              display: "flex",
              backgroundColor: colors.darkGreen[100],
              padding: {
                xs: "100px 50px",
                sm: "100px",
                md: "100px",
                lg: "100px",
              },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
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
                  marginRight: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="700"
                  sx={{
                    color: colors.white[100],
                    marginBottom: "15px",
                  }}
                >
                  Why Our Company Is The Perfect Partner For You?
                </Typography>
                <Typography
                  variant="p"
                  fontWeight="400"
                  sx={{
                    color: colors.white[100],
                    marginBottom: "15px",
                  }}
                >
                  Welcome to BIVAB® Yashila, a distinctive residential enclave
                  in the heart of Puri, Odisha. Boasting over 300 meticulously
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
                  echoes the spirit of Puri. Each apartment at BIVAB Yashila is
                  a testament to our commitment to quality and excellence.
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
                  Explore the allure of Puri living at BIVAB Yashila—where home
                  is not just a place; it’s an experience. Welcome to a new era
                  of residential excellence.
                </Typography>
              </Box>
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
              variant="h2"
              fontWeight="700"
              sx={{
                color: colors.darkblue[100],
                marginBottom: "30px",
              }}
            >
              OUR VIDEO
            </Typography>
            {ourVideo &&
              ourVideo.length > 0 &&
              ourVideo[0] &&
              ourVideo[0].link &&
              ourVideo[0].title && (
                <Box
                  sx={{
                    height: {
                      xs: "100%",
                      sm: "100%",
                      md: "710px",
                      lg: "710px",
                    },
                    width: { xs: "100%", sm: "100%", md: "95vw", lg: "95vw" },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={ourVideo[0].link}
                    title={ourVideo[0].title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Box>
              )}
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
              padding: {
                xs: "30px 60px",
                sm: "30px 60px",
                md: "0px 0px",
                lg: "0px 0px",
              },
            }}
          >
            {bivabCommercial &&
              bivabCommercial.length > 0 &&
              bivabCommercial[0] &&
              bivabCommercial[0].title &&
              bivabCommercial[0].description && (
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50vw", lg: "50vw" },
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="900"
                    sx={{
                      background: (theme) =>
                        `linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      marginBottom: "20px",
                      filter: "brightness(100%)",
                    }}
                  >
                    {bivabCommercial[0].title}
                  </Typography>
                  <Typography
                    variant="p"
                    fontWeight="700"
                    sx={{
                      color: colors.white[100],
                      filter: "brightness(100%)",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {bivabCommercial[0].description}
                  </Typography>
                </Box>
              )}
          </Box>

          {/* AMENITIES Section */}
          <AmentitiesComponent />

          {/* GALLERY Section */}
          <Box sx={{ marginTop: "50px", marginBottom: "100px" }}>
            <PhotoGalleryComponent />
          </Box>

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
              padding: "0px 40px",
            }}
          >
            <Typography
              variant="h2"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.7529919752238!2d85.7823886!3d19.7910228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c53fa1abf977%3A0x188402cff8e2ca46!2sBivab%20Yashila%2C%20Nabakalebara%20Rd%2C%20Sipasurabali%2C%20Puri%2C%20Sipasurubili%2C%20Odisha%20752001!5e0!3m2!1sen!2sin!4v1646464512896!5m2!1sen!2sin"
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
              marginBottom: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
                marginRight: "20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "20px",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                marginBottom: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
              }}
            >
              {/* Section One */}
              <Box
                sx={{
                  backgroundColor: colors.darkGreen[100],
                  color: colors.white[100],
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  borderTopRightRadius: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  borderBottomRightRadius: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  padding: "20px 50px",
                  width: { xs: "95vw", sm: "95vw", md: "50vw", lg: "50vw" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="700"
                  sx={{
                    marginBottom: "50px",
                    color: colors.white[100],
                  }}
                >
                  Feel Free To Ask Any Questions To Us
                </Typography>
                <Box>
                  {contactLogs &&
                    contactLogs.length > 0 &&
                    contactLogs[0] &&
                    contactLogs[0].location && (
                      <Typography
                        variant="p"
                        fontWeight="700"
                        sx={{
                          color: colors.white[100],
                          marginBottom: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          href="https://maps.app.goo.gl/5pccSjmyZpB91k3s5"
                          style={{
                            textDecoration: "none",
                            color: colors.yellow[300],
                          }}
                        >
                          <ExploreIcon
                            sx={{ fontSize: "24px", marginRight: "15px" }}
                          />
                        </Link>

                        <Link
                          href="https://maps.app.goo.gl/5pccSjmyZpB91k3s5"
                          style={{
                            textDecoration: "none",
                            color: colors.white[100],
                          }}
                        >
                          {contactLogs[0].location}
                        </Link>
                      </Typography>
                    )}

                  {contactLogs &&
                    contactLogs.length > 0 &&
                    contactLogs[0] &&
                    contactLogs[0].primaryNumber &&
                    contactLogs[0].secondaryNumber && (
                      <Typography
                        variant="p"
                        fontWeight="700"
                        sx={{
                          color: colors.yellow[300],
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
                          style={{ color: colors.white[100] }}
                        >
                          <Link
                            href={`tel:+91${contactLogs[0].primaryNumber}`}
                            style={{
                              textDecoration: "none",
                              color: colors.white[100],
                              fontWeight: 700,
                            }}
                          >
                            +91 {contactLogs[0].primaryNumber}
                          </Link>{" "}
                          /{" "}
                          <Link
                            href={`tel:+91${contactLogs[0].secondaryNumber}`}
                            style={{
                              textDecoration: "none",
                              color: colors.white[100],
                              fontWeight: 700,
                            }}
                          >
                            {contactLogs[0].secondaryNumber}
                          </Link>
                        </Typography>
                      </Typography>
                    )}

                  <Typography
                    variant="p"
                    fontWeight="700"
                    sx={{
                      color: colors.white[100],
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AccessTimeFilledIcon
                      sx={{
                        fontSize: "24px",
                        marginRight: "15px",
                        color: colors.yellow[300],
                      }}
                    />
                    Mon - Sat: 9:00am - 6:00pm
                  </Typography>

                  {contactLogs &&
                    contactLogs.length > 0 &&
                    contactLogs[0] &&
                    contactLogs[0].email && (
                      <Typography
                        variant="p"
                        fontWeight="700"
                        sx={{
                          color: colors.white[100],
                          marginBottom: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                            color: colors.yellow[300],
                          }}
                          href={`mailto:${contactLogs[0].email}`}
                        >
                          <MarkEmailReadIcon
                            sx={{ fontSize: "24px", marginRight: "15px" }}
                          />
                        </Link>

                        <Link
                          style={{
                            textDecoration: "none",
                            color: colors.white[100],
                          }}
                          href={`mailto:${contactLogs[0].email}`}
                        >
                          {contactLogs[0].email}
                        </Link>
                      </Typography>
                    )}
                </Box>
              </Box>

              {/* Section Two */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
                  padding: "20px 50px",
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
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Grid>

                    {/* Thirt Row */}
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

                    {/* Fourth Row */}
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

                    {/* Fifth Row */}
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

            {/* Section Three */}
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
                marginRight: "20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "column",
                  lg: "column",
                },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "30px",
                  width: { xs: "100%", sm: "50%", md: "100%", lg: "100%" },
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
                    "&:hover": {
                      textDecoration: "none",
                      color: "black",
                    },
                  }}
                >
                  <img
                    alt="profile-user"
                    width="100%"
                    height="100%"
                    src={ReraQRCode}
                    style={{
                      cursor: "pointer",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://pacms.orera.in/PromoterDetails/pdfviewNew/1302"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none",
                    color: colors.darkblue[100],
                    "&:hover": {
                      textDecoration: "none",
                      color: "black",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="700"
                    sx={{
                      color: colors.darkGreen[100],
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "30px",
                      overflowX: "auto",
                      scrollBehavior: "smooth",
                    }}
                  >
                    ORERA MP/26/23/01025 &nbsp;
                  </Typography>
                </Link>
              </Box>
              {/* rera website link */}
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Link
                    target="_blank"
                    href="https://pacms.orera.in"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      color: colors.yellow[300],
                      "&:hover": {
                        textDecoration: "none",
                        color: "black",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="700"
                      sx={{
                        color: colors.darkblue[100],
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "30px",
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                      }}
                    >
                      www.pacms.orera.in
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ padding: "30px" }}>
                  <Link
                    target="_blank"
                    href="https://pacms.orera.in/PromoterDetails/pdfviewNew/1302"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      color: colors.darkblue[100],
                      "&:hover": {
                        textDecoration: "none",
                        color: "black",
                      },
                    }}
                  >
                    <img
                      alt="profile-user"
                      width="100%"
                      height="100%"
                      src={ReraLogo}
                      style={{
                        cursor: "pointer",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default Home;
