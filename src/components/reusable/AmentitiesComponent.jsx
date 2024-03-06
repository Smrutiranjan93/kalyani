import {
  Box,
  Typography,
  useTheme,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { tokens } from "../../constants/theme";
import React from "react";

import PoolIcon from "@mui/icons-material/Pool";
import HotTubIcon from "@mui/icons-material/HotTub";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DomainIcon from "@mui/icons-material/Domain";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const cardsData = [
  {
    id: 1,
    icon: <PoolIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Swimming Pools",
  },
  { id: 2, icon: <HotTubIcon sx={{ fontSize: "4.285714rem" }} />, text: "Spa" },
  {
    id: 3,
    icon: <FitnessCenterIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "GYM",
  },
  {
    id: 4,
    icon: <GroupsIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Conference Hall",
  },
  {
    id: 5,
    icon: <BabyChangingStationIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Creche",
  },
  {
    id: 6,
    icon: <RestaurantIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Restaurant",
  },
  {
    id: 7,
    icon: <DomainIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Hotel Units",
  },
  {
    id: 8,
    icon: <MeetingRoomIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "Banquet Hall",
  },
  {
    id: 9,
    icon: <PhotoCameraFrontIcon sx={{ fontSize: "4.285714rem" }} />,
    text: "CCTV",
  },
];

const AmentitiesComponent = () => {
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
                md={3}
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
                    <Box
                      sx={{
                        fontSize: 24,
                        marginBottom: "2px",
                        color: colors.yellow[100],
                      }}
                    >
                      {card.icon}
                    </Box>
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
