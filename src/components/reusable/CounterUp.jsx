import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CounterUp = ({ prop }) => {
  const [counterOn, setCounterOn] = useState(false);
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
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 64,
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
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 15,
      },
    },
  });
  return (
    <ThemeProvider theme={styleTheme}>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Box>
          <Typography variant="h2">
            {counterOn && (
              <CountUp start={0} end={prop} duration={2} delay={0} />
            )}{" "}
            +
          </Typography>
        </Box>
      </ScrollTrigger>
    </ThemeProvider>
  );
};

export default CounterUp;
