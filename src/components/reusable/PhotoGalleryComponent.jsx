import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import SlideImageOne from "../../assets/carousel/carousel-one.jpg";
import SlideImageTwo from "../../assets/carousel/carousel-two.jpg";
import SlideImageThree from "../../assets/carousel/carousel-three.jpg";
import SlideImageFour from "../../assets/carousel/carousel-four.jpg";
import SlideImageFive from "../../assets/carousel/carousel-five.jpg";
import SlideImageSix from "../../assets/carousel/carousel-six.jpeg";
import SlideImageSeven from "../../assets/carousel/carousel-seven.jpeg";
import SlideImageEight from "../../assets/carousel/carousel-eight.jpeg";
import SlideImageNine from "../../assets/carousel/carousel-nine.jpeg";
import SlideImageTen from "../../assets/carousel/carousel-ten.jpeg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PhotoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  const [showNavigation] = useState(false);
  const [autoSlide] = useState(true);
  const [interval] = useState(3000);

  const [slides] = useState([
    {
      key: uuidv4(),
      content: <img src={SlideImageOne} alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageTwo} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageThree} alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageFour} alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageFive} alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageSix} alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageSeven} alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageEight} alt="8" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageNine} alt="9" />,
    },
    {
      key: uuidv4(),
      content: <img src={SlideImageTen} alt="10" />,
    },
  ]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval);
  }, []);

  let autoSlideInterval;
  const startAutoSlide = () => {
    if (autoSlide) {
      autoSlideInterval = setInterval(() => {
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }, interval);
    }
  };

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
            display: {xs:'flex', sm:'flex', md:'none', lg:'none'},
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
