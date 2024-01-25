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
  { id: 1, icon: <PoolIcon sx={{fontSize:'4.285714rem'}}/>, text: "Swimming Pools" },
  { id: 2, icon: <HotTubIcon sx={{fontSize:'4.285714rem'}}/>, text: "Spa" },
  { id: 3, icon: <FitnessCenterIcon sx={{fontSize:'4.285714rem'}}/>, text: "GYM" },
  { id: 4, icon: <GroupsIcon sx={{fontSize:'4.285714rem'}}/>, text: "Conference Hall" },
  { id: 5, icon: <BabyChangingStationIcon sx={{fontSize:'4.285714rem'}}/>, text: "Creche" },
  { id: 6, icon: <RestaurantIcon sx={{fontSize:'4.285714rem'}}/>, text: "Restaurant" },
  { id: 7, icon: <DomainIcon sx={{fontSize:'4.285714rem'}}/>, text: "Hotel Units" },
  { id: 8, icon: <MeetingRoomIcon sx={{fontSize:'4.285714rem'}}/>, text: "Banquet Hall" },
  { id: 9, icon: <PhotoCameraFrontIcon sx={{fontSize:'4.285714rem'}}/>, text: "CCTV" },
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
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
              padding:'0px 50px',
              background: `linear-gradient(to bottom, #0a3c2c 50%, #2a2c38 50%)`,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{
                color: colors.white[100],
                marginBottom: "20px",
                marginTop:'25px',
              }}
            >
              WORLD CLASS AMENITIES
            </Typography>

            <Grid container spacing={2} sx={{ padding: 2 }}>
              {cardsData.map((card) => (
                <Grid key={card.id} item xs={12} sm={6} md={3} lg={4} sx={{marginBottom:'25px'}}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: `0px 9px 0px 0px ${colors.white[100]}, 0px 0px 0px 0px ${colors.white[100]}, 0px 0px 0px 0px ${colors.white[100]}`,
                      backgroundColor:colors.black[100],
                      margin:'10px 30px',
                      borderRadius:'15px',
                      "&:hover": {
                        boxShadow: `0px 9px 0px 0px ${colors.yellow[100]}, 0px 0px 0px 0px ${colors.yellow[100]}, 0px 0px 0px 0px ${colors.yellow[100]}`,
                      },
                    }}
                  >
                    <CardContent sx={{ flex: 1, textAlign: "center" }}>
                      <Box sx={{ fontSize: 24, marginBottom: '2px', color:colors.yellow[100] }}>
                        {card.icon}
                      </Box>
                      <Typography variant="h6" sx={{color:colors.white[100]}}>{card.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="h4"
              fontWeight="400"
              sx={{
                color: colors.white[100],
                marginTop:'20px',
                marginBottom:'25px'
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
