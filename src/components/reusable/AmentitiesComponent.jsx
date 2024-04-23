import {
  Box,
  Typography,
  useTheme,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { tokens } from "../../constants/theme";
import React, { useEffect } from "react";

import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DomainIcon from "@mui/icons-material/Domain";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";

import { PiSwimmingPoolLight } from "react-icons/pi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { GiGloves } from "react-icons/gi";
import { GiCctvCamera } from "react-icons/gi";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import AOS from "aos";
import "aos/dist/aos.css";

const cardsData = [
  {
    id: 1,
    image: "/yashila-gif/swimming.gif",
    text: "Swimming Pools",
  },
  { id: 2, image: "/yashila-gif/spa-flower.gif", text: "Spa" },
  {
    id: 3,
    image: "/yashila-gif/gym-fitness.gif",
    text: "GYM",
  },
  {
    id: 4,
    image: "/yashila-gif/meeting-room.gif",
    text: "Conference Hall",
  },
  {
    id: 5,
    image: "/yashila-gif/baby-care.gif",
    text: "Creche",
  },
  {
    id: 6,
    image: "/yashila-gif/food-plate.gif",
    text: "Restaurant",
  },
  {
    id: 7,
    image: "/yashila-gif/dubai-city.gif",
    text: "Hotel Units",
  },
  {
    id: 8,
    image: "/yashila-gif/residence-mansion.gif",
    text: "Banquet Hall",
  },
  {
    id: 9,
    image: "/yashila-gif/city-camera.gif",
    text: "CCTV",
  },
];

const AmentitiesComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    AOS.init({ duration: 2000 });
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
      <Box sx={{ textAlign: "center", marginTop: "0px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            marginBottom: "50px",
            padding: "0px 50px",
            backgroundColor: colors.darkGreen[100],
          }}
        >
          <Typography
            variant="h2"
            fontWeight="700"
            sx={{
              background: (theme) =>
                `linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
              marginBottom: "20px",
              marginTop: "25px",
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "26px",
                lg: "34px",
              },
            }}
            data-aos="fade-up"
          >
            WORLD CLASS AMENITIES
          </Typography>

          <Grid container spacing={2} sx={{ padding: 2 }}>
            {cardsData.map((card) => (
              <Grid
                key={card.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                sx={{ marginBottom: "25px" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: `0px 9px 0px 0px ${colors.white[100]}, 0px 0px 0px 0px ${colors.white[100]}, 0px 0px 0px 0px ${colors.white[100]}`,
                    backgroundColor: colors.black[100],
                    margin: "10px 30px",
                    borderRadius: "15px",
                    "&:hover": {
                      boxShadow: `0px 9px 0px 0px rgb(191, 149, 63)}, 0px 0px 0px 0px rgb(252, 246, 186), 0px 0px 0px 0px rgba(170, 119, 28, 0.82)`,
                    },
                  }}
                >
                  <CardContent sx={{ flex: 1, textAlign: "center" }}>
                    <img
                      src={card.image}
                      alt="gif"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: colors.white[100],
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                        },
                      }}
                    >
                      {card.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            fontWeight="400"
            sx={{
              color: colors.white[100],
              marginTop: "20px",
              marginBottom: "25px",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "18px",
              },
            }}
          >
            & 20+ Amenities
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AmentitiesComponent;
