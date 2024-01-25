import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../constants/theme";
import React from "react";
import Carousel from "react-material-ui-carousel";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const carouselData = [
  {
    id: 1,
    image: "carousel-one.jpg",
  },
  {
    id: 2,
    image: "carousel-two.jpg",
  },
  {
    id: 3,
    image: "carousel-three.jpg",
  },
  {
    id: 4,
    image: "carousel-four.jpg",
  },
  {
    id: 5,
    image: "carousel-five.jpg",
  },
  {
    id: 6,
    image: "carousel-six.jpeg",
  },
  {
    id: 7,
    image: "carousel-seven.jpeg",
  },
  {
    id: 8,
    image: "carousel-eight.jpeg",
  },
  {
    id: 9,
    image: "carousel-nine.jpeg",
  },
  {
    id: 10,
    image: "carousel-ten.jpeg",
  },
];




const PhotoGalleryComponent = () => {
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
      <Box  sx={{textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{
              color: colors.black[100],
              marginBottom: "30px",
            }}
          >
            OUR GALLERY
          </Typography>

          <Carousel>
            {carouselData.map((item) => (
              <Box
                key={item.id}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="60%"
                  height="20%"
                  src={`/${item.image}`}
                  style={{
                    cursor: "pointer",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
        </ThemeProvider>
  );
};

export default PhotoGalleryComponent;
