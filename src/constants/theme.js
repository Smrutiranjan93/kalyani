import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        white: {
          100: "#ffffff", // main
          200: "#f5f5f5", // little light
        },
        black: {
          100: "#000000", // main
        },
        darkGreen: {
          100: "#0a3c2c", //main
        },
        darkblue: {
          100: "#2a2c38", // main
          200: "#f5f5f5", // text bg
        },
        yellow: {
          100: "#ffd700", // main
          200: "#e0b027", // text color
          300: "#bf953f",  // golden
        },
      }
    : {
        white: {
          100: "#ffffff", // main
          200: "#f5f5f5", // little light
        },
        black: {
          100: "#000000", // main
          200: "#666363", //text color grey
        },
        darkGreen: {
          100: "#0a3c2c", //main
        },
        darkblue: {
          100: "#2a2c38", // main
          200: "#f5f5f5", // text bg
        },
        yellow: {
          100: "#ffd700", // main
          200: "#e0b027", // text color
          300: "#bf953f",  // golden
        },
      }),
});

//mui theme settings

export const themeSettings = (mode) => {
  return {
    typography: {
      fontFamily: ['Playfair Display', 'serif'].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ['Kaushan Script', 'cursive'].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 12,
      },
    },
  };
};

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};