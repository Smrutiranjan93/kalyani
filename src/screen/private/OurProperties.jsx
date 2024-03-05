import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Container,
  Button,
  Divider,
  Link,
  Modal,
} from "@mui/material";
import { tokens } from "../../constants/theme";
import Layout from "../../components/global/Layout";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Carousel from "react-material-ui-carousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { propertyData } from "../../data/mockData";

const OurProperties = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
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
    <Layout>
      <ThemeProvider theme={styleTheme}>
        <Container
          maxWidth="lg"
          sx={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              marginTop: "20px",
              marginLeft: "50px",
              fontWeight: "bold",
              fontSize: "32px",
              color: "darkGreen",
            }}
          >
            Our Products
          </Typography>

          {/* This Box is the parent of the entire List of a single project and Data Maping OF Property Data */}
          {/* You need to change the Box attributes */}
          {propertyData.map((item) => (
            <Box
              key={item}
              sx={{
                width: "80vw",
                height: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                backgroundColor: "#9b9a9a29",
                display: "flex",
                marginTop: "40px",
                borderRadius: "10px",
                boxShadow: "10px 10px 4px rgba(51, 51, 51, 0.2)",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
              }}
            >
              {/* Parent Section of Carousel and images*/}
              <Box
                sx={{
                  display: "flex",
                  width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
                  borderRadius: "10px",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  },
                  backgroundColor: colors.darkblue[100],
                }}
              >
                {/* Carousel Section */}
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "70%", lg: "70%" },
                  }}
                >
                  <Carousel indicators={false} autoPlay={true} height="257px">
                    {item.gallery.map((imageurl) => (
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
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius:'10px',
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    ))}
                  </Carousel>
                </Box>

                {/* Images Section */}
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                    width: "30%",
                    flexDirection: "column",
                  }}
                >
                  <Box marginBottom="2px">
                    <img
                      src={`/${item.gallery[0].imageurl}`}
                      alt="Image"
                      style={{ width: "100%", height: "11.5vh", borderTopRightRadius:'10px' }}
                    />
                  </Box>
                  <Box marginBottom="2px">
                    <img
                      src={`/${item.gallery[1].imageurl}`}
                      alt="Image"
                      style={{ width: "100%", height: "11.5vh" }}
                    />
                  </Box>
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={`/${item.gallery[2].imageurl}`}
                      alt="Image"
                      style={{ width: "100%", height: "11.5vh", borderBottomRightRadius:'10px' }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "#f0f8ff66",
                      }}
                    >
                      <Link
                        href="#"
                        onClick={handleOpenModal}
                        sx={{
                          textDecoration: "none",
                          color: colors.darkblue[100],
                          "&:hover": {
                            textDecoration: "none",
                            color: colors.black[100],
                          },
                        }}
                      >
                        See More
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Details Section */}
              <Box
                sx={{
                  display: "flex",
                  width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
                  flexDirection: "column",
                  marginTop: "10px",
                  borderBottomRightRadius: "20px",
                  borderTopRightRadius: "10px",
                }}
              >
                <Box sx={{ padding: "15px" }}>
                  {/* Name */}
                  <Typography
                    variant="h4"
                    sx={{
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Typography>

                  {/* Location */}
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "10px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon
                      sx={{ marginRight: "5px", color: "#74746e" }}
                    />
                    {item.location}
                  </Typography>

                  {/* Price , Sq. ft., BHK */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {/* Section One */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {/* Price */}
                      <Typography
                        variant="h4"
                        sx={{ marginRight: "30px", fontWeight: "bold" }}
                      >
                        {item.price}
                      </Typography>

                      {/* sq. ft. */}
                      <Typography variant="h6" sx={{ marginRight: "10px" }}>
                        {item.price_per_sqft}
                      </Typography>
                    </Box>

                    {/* Devider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginRight: "10px", height: "40px" }}
                    />

                    {/* Size */}
                    <Typography variant="h4" sx={{ marginRight: "10px" }}>
                      {item.size}
                    </Typography>

                    {/* Devider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        marginRight: "30px",
                        height: "40px",
                        fontWeight: "bold",
                      }}
                    />

                    {/* Rooms */}
                    <Typography
                      variant="h4"
                      sx={{
                        marginRight: "10px",
                        fontWeight: "600",
                        fontSize: "17px",
                      }}
                    >
                      {item.rooms}
                    </Typography>
                  </Box>

                  {/* Description Section */}
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "10px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Buttons */}
                <Box
                  sx={{
                    backgroundColor: "#a9a9a930",
                    height: "100%",
                    borderBottomRightRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "start",
                      lg: "start",
                    },
                    padding: {
                      xs: "20px 10px",
                      sm: "20px 10px",
                      md: "0px 15px",
                      lg: "0px 15px",
                    },
                    borderBottomLeftRadius:{xs:'10px', sm:'10px', md:'0px', lg:'0px'}
                  }}
                >
                  {/* View Detail button Link */}
                  <Link
                    href={`/property/${item.id}`}
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
                    {/* View Detail button */}
                    <Button
                      variant="outlined"
                      sx={{
                        color: colors.white[100],
                        backgroundColor: colors.darkblue[100],
                        padding: "5px 15px",
                        border: "none",
                        fontSize: "15px",
                        fontWeight: "600",
                        "&:hover": {
                          fontSize: "15px",
                          fontWeight: "700",
                          color: colors.darkGreen[100],
                          background:
                            "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
                          border: "none",
                          boxShadow:
                            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Link>

                  {/* Contact Us button Link */}
                  <Link
                    href="/contact-us"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      textDecoration: "none",
                      "&:hover": {
                        alignItems: "center",
                        display: "flex",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {/* Contact Us button */}
                    <Button
                      variant="outlined"
                      sx={{
                        color: colors.white[100],
                        background:
                          "linear-gradient(45deg, #05170c, #225e22, #0f3519, #3ea773)",
                        padding: "5px 15px",
                        border: "none",
                        fontSize: "15px",
                        fontWeight: "600",
                        "&:hover": {
                          fontSize: "15px",
                          fontWeight: "700",
                          color: colors.darkGreen[100],
                          background:
                            "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
                          border: "none",
                          boxShadow:
                            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        },
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </Box>
              </Box>

              <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: colors.black[100],
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    width: "100%",
                    height: "100%",
                    maxWidth: "1500px",
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
                  >
                    <IconButton
                      onClick={handleCloseModal}
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "#fff",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Carousel
                    indicators={false}
                    index={selectedImageIndex}
                    autoPlay={false}
                    height="700px"
                  >
                    {item.gallery.map((image) => (
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
                    ))}
                  </Carousel>
                  <Box display="flex" marginTop={2} justifyContent="center">
                    {item.gallery.map((image, index) => (
                      <Box
                        key={index}
                        marginRight={2}
                        onClick={() => handleImageClick(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={`/${image.imageurl}`}
                          alt={`Small Property ${index + 1}`}
                          style={{
                            width: "100%",
                            maxHeight: "100px",
                            objectFit: "cover",
                            marginTop: "20px",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Modal>
            </Box>
          ))}

          {/* Modal For Popup Carousel*/}
        </Container>
      </ThemeProvider>
    </Layout>
  );
};

export default OurProperties;
