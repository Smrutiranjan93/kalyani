import React, { useEffect, useState, useRef } from "react";
import { Box, Pagination } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { propertyData } from "../../data/propertyData";

const PhotoCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [goToSlide, setGoToSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    // 🔥 TAKE IMAGES FROM MOCK DATA
    const galleryImages = propertyData[0]?.gallery || [];

    const processedSlides = galleryImages.map((img) => ({
      key: uuidv4(),
      content: (
        <img
          src={img.imageurl}
          alt="gallery"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      ),
    }));

    setSlides(processedSlides);
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      autoSlideIntervalRef.current = setInterval(() => {
        setGoToSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }

    return () => clearInterval(autoSlideIntervalRef.current);
  }, [slides]);

  const handleChange = (event, value) => {
    setActiveIndex(value - 1);
    setGoToSlide(value - 1);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 350, md: 500 },
          margin: "0 auto",
        }}
      >
        {slides.length > 0 && (
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={1}
            showNavigation={false}
            animationConfig={config.gentle}
            infinite
          />
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={slides.length}
            page={activeIndex + 1}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PhotoCarousel;
