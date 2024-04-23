import React, { useState, useEffect } from "react";
import {
  Box,
  useTheme,
  Typography,
  Slider,
  Button,
  Link,
  Modal,
} from "@mui/material";
import Layout from "../../components/global/Layout";
import { tokens } from "../../constants/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { propertyData } from "../../data/mockData";
import Carousel from "react-material-ui-carousel";

import PinDropIcon from "@mui/icons-material/PinDrop";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

import Loading from "../../components/reusable/Loading";

export default function PropertyDetails() {
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
      fontSize: 12,
      h1: {
        fontFamily: ["Kaushan Script", "cursive"].join(","),
        fontSize: 54,
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

  {
    /* Emi Modal */
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  {
    /* 2D Modal */
  }
  const [open2D, setOpen2D] = useState(false);
  const handleOpen2D = () => setOpen2D(true);
  const handleClose2D = () => setOpen2D(false);

  {
    /* Download pdf logic */
  }
  const downloadPDF = () => {
    const link = document.createElement("a");

    link.href = process.env.PUBLIC_URL + "/layout.pdf";

    link.setAttribute("download", "bivab_layout.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  {
    /* Id Routing */
  }
  const { id } = useParams();
  const property = propertyData.find((property) => property.id === id);

  {
    /* see more or less logic */
  }
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const description = showMore
    ? property.description
    : `${property.description.slice(0, 150)}...`;

  if (!property) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        Property not found
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <ThemeProvider theme={styleTheme}>
            <Box sx={{ marginTop: "55px" }}>
              {/* Heading */}
              <Box
                sx={{
                  backgroundColor: "#333",
                  position: "relative",
                  height: {
                    xs: "30vh",
                    sm: "30vh",
                    md: "50vh",
                    lg: "50vh",
                  },
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  overflow: "hidden",
                  marginBottom: "50px",
                }}
              >
                {/* Pseudo-element for the faded background image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(/${property.gallery[0].imageurl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.4,
                  }}
                />

                {/* Content box */}
                <Box
                  sx={{
                    width: { xs: "100vw", sm: "100vw", md: "45vw", lg: "45vw" },
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    zIndex: 1, // Ensure the content is above the pseudo-element
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: colors.white[100],
                      fontWeight: "900",
                      marginBottom: "5px",
                      fontSize: {
                        xs: "35px",
                        sm: "35px",
                        md: "54px",
                        lg: "54px",
                      },
                    }}
                  >
                    {property.name}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  margin: "auto",
                  width: "90%",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                }}
              >
                {/* Left Side Container for Details */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                    marginBottom: {
                      xs: "50px",
                      sm: "50px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  {/* Top Details */}
                  <Box>
                    {/* Name */}
                    <Typography
                      varient="h2"
                      fontWeight="900"
                      sx={{
                        color: colors.darkblue[100],
                        fontSize: {
                          xs: "24px",
                          sm: "35px",
                          md: "48px",
                          lg: "48px",
                        },
                        marginBottom: "5px",
                      }}
                    >
                      {property.name}
                    </Typography>

                    {/* Location */}
                    <Typography
                      varient="h4"
                      fontWeight="600"
                      sx={{
                        color: colors.darkblue[100],
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <PinDropIcon
                        sx={{
                          fontWeight: "700",
                          fontSize: "20px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {property.location}
                    </Typography>

                    {/* Size Area */}
                    <Typography
                      varient="h4"
                      fontWeight="600"
                      sx={{
                        color: colors.darkblue[100],
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <SquareFootIcon
                        sx={{
                          fontWeight: "700",
                          fontSize: "20px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {property.size}
                    </Typography>

                    {/* Rooms */}
                    <Typography
                      varient="h4"
                      fontWeight="600"
                      sx={{
                        color: colors.darkblue[100],
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ApartmentIcon
                        sx={{
                          fontWeight: "700",
                          fontSize: "20px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {property.rooms}
                    </Typography>

                    {/* Facing */}
                    <Typography
                      varient="h4"
                      fontWeight="600"
                      sx={{
                        color: colors.darkblue[100],
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FullscreenIcon
                        sx={{
                          fontWeight: "700",
                          fontSize: "20px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {property.facing}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="h2"
                      color={colors.black[100]}
                      fontWeight="700"
                      sx={{
                        marginBottom: "25px",
                        marginTop: "50px",
                        fontSize: {
                          xs: "32px",
                          sm: "32px",
                          md: "45px",
                          lg: "45px",
                        },
                        marginLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "0px",
                        },
                      }}
                    >
                      Overview
                    </Typography>

                    <Typography
                      varient="h6"
                      fontWeight="500"
                      sx={{
                        color: colors.black[100],
                        fontSize: "16px",
                        textAlign: "left",
                        marginTop: "20px",
                        paddingRight: "20px",
                      }}
                    >
                      {description}
                    </Typography>
                    {property.description.length > 150 && (
                      <Button
                        onClick={toggleShowMore}
                        style={{ color: colors.darkblue[100] }}
                      >
                        {showMore ? "See less" : "See more"}
                      </Button>
                    )}

                    {/* Range for Status */}
                    {/* <Box sx={{ width: 300, marginTop: "50px", display: "flex" }}>
                  <Typography
                    varient="h5"
                    fontWeight="500"
                    sx={{
                      color: colors.black[100],
                      fontSize: "16px",
                      textAlign: "left",
                      marginRight: "20px",
                    }}
                  >
                    <EngineeringIcon
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                        marginRight: "5px",
                      }}
                    />{" "}
                  </Typography>
                  <Slider
                    aria-label="Custom marks"
                    defaultValue={50}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    sx={{
                      "& .MuiSlider-thumb": {
                        backgroundColor: colors.darkGreen[100],
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: colors.darkblue[100],
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: colors.black[100],
                      },
                    }}
                  />
                </Box> */}
                  </Box>

                  {/* Price Buttons and EMI */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      marginTop: "50px",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                      },
                      justifyContent: {
                        xs: "center",
                        sm: "left",
                        md: "left",
                        lg: "left",
                      },
                    }}
                  >
                    {/* Price Buttons */}
                    {/* <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: {
                      xs: "0",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    },
                    marginBottom: {
                      xs: "20px",
                      sm: "0px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Typography
                    varient="h2"
                    fontWeight="700"
                    sx={{
                      color: colors.white[100],
                      backgroundColor: colors.darkblue[100],
                      fontSize: "28px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      padding: "0 25px",
                    }}
                  >
                    ₹ {property.price}
                    <Typography
                      varient="h4"
                      fontWeight="400"
                      sx={{
                        color: colors.white[100],
                        fontSize: "16px",
                        borderTop: "1px solid white",
                        margin: "auto",
                      }}
                    >
                      ₹ {property.price_per_sqft}
                    </Typography>
                  </Typography>
                </Box> */}

                    {/* EMI Button */}
                    <Button
                      variant="outlined"
                      sx={{
                        color: colors.white[100],
                        backgroundColor: colors.darkblue[100],
                        padding: "5px 15px",
                        border: "none",
                        fontSize: "15px",
                        fontWeight: "600",
                        padding: "20px 22px",
                        "&:hover": {
                          fontSize: "15px",
                          fontWeight: "700",
                          backgroundColor: colors.darkGreen[100],
                          border: "none",
                          boxShadow:
                            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                          padding: "20px 22px",
                        },
                      }}
                      onClick={handleOpen}
                    >
                      EMI Partners
                    </Button>

                    {/* EMI BUtton Modal */}
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: { xs: 320, sm: 350, md: 450, lg: 450 },
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: "5px",
                        }}
                      >
                        <CloseIcon
                          sx={{
                            color: colors.darkblue[100],
                            fontSize: "25px",
                            cursor: "pointer",
                          }}
                          onClick={handleClose}
                        />

                        {property.emipartner.map((bank) => (
                          <Box
                            key={bank.id}
                            sx={{
                              display: "flex",
                              marginBottom: "20px",
                              marginTop: "20px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              alt="profile-user"
                              width="35px"
                              height="35px"
                              src={`/${bank.imageurl}`}
                              style={{
                                cursor: "pointer",
                                marginRight: "40px",
                                objectFit: "contain",
                              }}
                            />
                            <Typography
                              variant="h4"
                              color={colors.black[100]}
                              fontWeight="400"
                            >
                              {bank.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Modal>
                    {/* EMI BUtton End */}
                  </Box>
                </Box>

                {/* Right Side Container for Carousel */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                  }}
                >
                  <Carousel indicators={true}>
                    {property.gallery.map((imageurl) => (
                      <Box
                        key={imageurl.id}
                        sx={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          marginRight: "3px",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={`/${imageurl.imageurl}`}
                          alt={"Property image"}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    ))}
                  </Carousel>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "50px",
                    }}
                  >
                    {/* 360 Tour button */}
                    <Link
                      href={`${property.three60url}`}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        textDecoration: "none",
                        marginRight: "10px",
                        "&:hover": {
                          alignItems: "center",
                          display: "flex",
                          textDecoration: "none",
                        },
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: colors.white[100],
                          backgroundColor: colors.darkGreen[100],
                          padding: "5px 15px",
                          border: "none",
                          fontSize: "15px",
                          fontWeight: "600",
                          "&:hover": {
                            fontSize: "15px",
                            fontWeight: "700",
                            color: colors.white[100],
                            backgroundColor: colors.darkblue[100],
                            border: "none",
                            boxShadow:
                              "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                          },
                        }}
                      >
                        360 Tour
                      </Button>
                    </Link>

                    {/* 2D button */}
                    {/* <Button
                  variant="outlined"
                  sx={{
                    color: colors.white[100],
                    backgroundColor: colors.darkGreen[100],
                    padding: "5px 15px",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    "&:hover": {
                      fontSize: "15px",
                      fontWeight: "700",
                      color: colors.white[100],
                      backgroundColor: colors.darkblue[100],
                      border: "none",
                      boxShadow:
                        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                    },
                  }}
                  onClick={handleOpen2D}
                >
                  2D Plan
                </Button> */}

                    <Modal
                      open={open2D}
                      onClose={handleClose2D}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: { xs: 375, sm: 650, md: 900, lg: 1100 },
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: "5px",
                        }}
                      >
                        <CloseIcon
                          sx={{
                            color: colors.darkblue[100],
                            fontSize: "25px",
                            cursor: "pointer",
                          }}
                          onClick={handleClose2D}
                        />
                        <Box
                          sx={{
                            width: "100%",
                            height: "500px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            alt="profile-user"
                            width="100%"
                            height="100%"
                            src={`/${property.brochure}`}
                            style={{
                              cursor: "pointer",
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                      </Box>
                    </Modal>
                  </Box>
                </Box>
              </Box>

              {/* Project Highlights */}
              <Box
                sx={{
                  width: { xs: "90%", sm: "60%", md: "90%", lg: "90%" },
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h2"
                  color={colors.black[100]}
                  fontWeight="700"
                  sx={{
                    marginBottom: "25px",
                    marginTop: "50px",
                    fontSize: {
                      xs: "32px",
                      sm: "32px",
                      md: "45px",
                      lg: "45px",
                    },
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "0px",
                    },
                  }}
                >
                  Highlights
                </Typography>
                <Box
                  sx={{
                    boxShadow: "0px 0px 10px -5px",
                    display: "flex",
                    padding: "30px 0px",
                    alignItems: "center",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                    },
                    width: "100%",
                  }}
                >
                  {/* Left data*/}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRight: {
                        xs: "none",
                        sm: "none",
                        md: `1px solid ${colors.darkGreen[100]}`,
                        lg: `1px solid ${colors.darkGreen[100]}`,
                      },
                      width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                      padding: {
                        xs: "0px 40px",
                        sm: "0px 40px",
                        md: "40px 40px",
                        lg: "40px 40px",
                      },
                    }}
                  >
                    {/* One*/}
                    {/* <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon1.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          UNITS
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.unit}
                        </Typography>
                      </Box>
                    </Box> */}

                    {/* Two*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon2.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          APPROVAL
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.approval}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Three*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon3.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          ELEVATOR
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.elevator}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Four*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon4.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          SECURITY
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.security}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Right data*/}
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                      padding: {
                        xs: "0px 40px",
                        sm: "0px 40px",
                        md: "40px 40px",
                        lg: "40px 40px",
                      },
                      paddingLeft: "40px",
                    }}
                  >
                    {/* Five*/}
                    {/* <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon5.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          FLOORS
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.floors}
                        </Typography>
                      </Box>
                    </Box> */}

                    {/* Six*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="20px"
                        height="35px"
                        src={"/icon6.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "35px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          POWER BACKUP
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.powerbackup}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Seven*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon7.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          PARKING
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.parking}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Eight*/}
                    <Box sx={{ display: "flex", marginBottom: "40px" }}>
                      <img
                        alt="profile-user"
                        width="35px"
                        height="35px"
                        src={"/icon8.png"}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          marginRight: "20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          color={colors.darkGreen[100]}
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "16px",
                              sm: "16px",
                              md: "24px",
                              lg: "24px",
                            },
                          }}
                        >
                          INTERCOM
                        </Typography>
                        <Typography
                          variant="h4"
                          color={colors.black[100]}
                          fontWeight="400"
                        >
                          {property.intercom}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Mobile App link */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  {/* Play Store */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: "20px 65px",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px -5px",
                    }}
                  >
                    {/* Text */}
                    <Typography
                      variant="h3"
                      color={colors.black[100]}
                      fontWeight="400"
                      sx={{ marginBottom: "10px" }}
                    >
                      Download it now.
                    </Typography>

                    {/* Image with link for app store */}
                    <Link
                      href="#"
                      sx={{
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "none",
                        },
                      }}
                    >
                      <img
                        alt="profile-user"
                        width="250px"
                        src={`/androidapp.png`}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </Layout>
      )}
    </div>
  );
}


PropertyDetails.getInitialProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = "Loading";
  return { data };
};