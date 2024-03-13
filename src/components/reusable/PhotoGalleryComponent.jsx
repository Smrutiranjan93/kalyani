import React, { useState, useEffect, useRef } from "react";
import { Box, Pagination } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

const PhotoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  const [showNavigation] = useState(false);
  const [autoSlide] = useState(true);
  const [interval] = useState(3000);
  const [slides, setSlides] = useState([]);

  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.GALLERY_URL);
        const imageData = response.data;
        const processedSlides = imageData.map((image) => ({
          key: uuidv4(),
          content: (
            <img
              src={`${ApiUrl.ImageHostURl}${image.imageName}`}
              alt={image.id}
            />
          ),
        }));
        setSlides(processedSlides);
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    fetchData();

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (autoSlide && slides.length > 0) {
      autoSlideIntervalRef.current = setInterval(() => {
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }, interval);
    } else {
      clearInterval(autoSlideIntervalRef.current);
    }
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [slides, autoSlide, interval]);

  const handleChange = (event, value) => {
    setActiveIndex(value - 1);
    setGoToSlide(value - 1);
  };

  const styleTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xs2: 350,
        xs3: 400,
        sm: 600,
        sm2: 800,
        md: 1200,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100px",
            xs2: "160px",
            xs3: "200px",
            sm: "290px",
            sm2: "360px",
            md: "600px",
            lg: "600px",
          },
          margin: "0 auto",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
          animationConfig={config.gentle}
          infinite
        />
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={slides.length}
            page={activeIndex + 1}
            onChange={handleChange}
            sx={{ marginTop: 2 }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PhotoCarousel;
