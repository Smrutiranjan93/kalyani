import React from 'react';
import {
    Box,
    useTheme,
  } from "@mui/material";
import { tokens } from "../../constants/theme";
import Layout from '../../components/global/Layout';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper';

import slide_image_1 from "./carousel-one.jpg";
import slide_image_2 from "./carousel-two.jpg";
import slide_image_3 from "./carousel-three.jpg";
import slide_image_4 from "./carousel-four.jpg";
import slide_image_5 from "./carousel-five.jpg";
import slide_image_6 from "./carousel-six.jpeg";
import slide_image_7 from "./carousel-seven.jpeg";
import slide_image_8 from "./carousel-eight.jpeg";
import slide_image_9 from "./carousel-nine.jpeg";
import slide_image_10 from "./carousel-ten.jpeg";

const Demo = () => {
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
    <Layout>
        <ThemeProvider theme={styleTheme}>
        <Box>
            Demo
        </Box>
        </ThemeProvider>
    </Layout>
  )
}

export default Demo