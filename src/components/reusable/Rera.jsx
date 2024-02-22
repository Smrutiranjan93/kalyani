import { Box, Button, Link, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../constants/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Rera = () => {
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
      <Box
        sx={{
          position: "fixed",
          right: {xs:'-130px', sm:'-130px', md:'-150px', lg:'-150px'},
          top: "50vh",
          transform: "rotate(-90deg)",
          display: "flex",
          zIndex: "100",
        }}
      >
        <Link
          target="_blank"
          href="https://pacms.orera.in/PromoterDetails/pdfviewNew/1302"
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
          <Button
            variant="contained"
            sx={{
              color: colors.darkGreen[100],
              background:
                "linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))",
              padding: {xs:'5px 13px', sm:'5px 13px', md:'15px 30px', lg:'15px 30px'},
              fontSize: "14px",
              fontWeight: "700",
              "&:hover": {
                color: colors.white[100],
                fontSize: "14px",
                fontWeight: "700",
                background: 'linear-gradient(45deg, #05170c, #225e22, #0f3519, #3ea773)',
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  padding: {xs:'5px 13px', sm:'5px 13px', md:'15px 30px', lg:'15px 30px'},
              },
            }}
          >
            {" "}
            ORERA MP/26/23/01025{" "}
          </Button>
        </Link>
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
          <Button
            variant="outlined"
            sx={{
              color: colors.white[100],
              background: 'linear-gradient(45deg, #05170c, #225e22, #0f3519, #3ea773)',
              padding: {xs:'5px 13px', sm:'5px 13px', md:'15px 30px', lg:'15px 30px'},
              border: "none",
              fontSize: "14px",
              fontWeight: "700",
              "&:hover": {
                padding: {xs:'5px 13px', sm:'5px 13px', md:'15px 30px', lg:'15px 30px'},
                fontSize: "14px",
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
    </ThemeProvider>
  );
};

export default Rera;
