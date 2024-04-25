import { Box, Button, Menu, MenuItem, Link, Typography } from "@mui/material";
import React from "react";
import { Tb360View } from "react-icons/tb";
import { useTheme } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { tokens } from "../../constants/theme";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";

const ThreeSixtyMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styleTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        md2: 1196,
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
        fontSize: 18,
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

  const navigate = useNavigate();

  const handleOrchid = () => {
    navigate("/orchid");
  };
  const handleMogra = () => {
    navigate("/mogra");
  };
  const handleParijat = () => {
    navigate("/parijat");
  };
  const handleNeelkamal = () => {
    navigate("/neelkamal");
  };

  return (
    <ThemeProvider theme={styleTheme}>
      <Box>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  color: colors.white[100],
                  backgroundColor: colors.yellow[300],
                  padding: "5px 10px",
                  border: "1px solid white",
                  "&:hover": {
                    color: colors.darkblue[100],
                    backgroundColor: "white",
                    border: "1px solid black",
                  },
                }}
              >
                360 Tour
              </Button>
              <Menu {...bindMenu(popupState)}>
                {/* Mogra */}
                <MenuItem
                  sx={{
                    color: colors.darkGreen[100],
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors.darkGreen[100],
                    },
                  }}
                >
                  <Box
                    onClick={handleMogra}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      <Tb360View
                        style={{ display: "flex", marginRight: "8px" }}
                      />
                    </Typography>
                    <Typography>Mogra [2 BHK]</Typography>
                  </Box>
                </MenuItem>

                {/* Orchid */}
                <MenuItem
                  sx={{
                    color: colors.darkGreen[100],
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors.darkGreen[100],
                    },
                  }}
                >
                  <Box
                    onClick={handleOrchid}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      <Tb360View
                        style={{ display: "flex", marginRight: "8px" }}
                      />
                    </Typography>
                    <Typography>Orchid [2 BHK]</Typography>
                  </Box>
                </MenuItem>

                {/* Neelkamal */}
                <MenuItem
                  sx={{
                    color: colors.darkGreen[100],
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors.darkGreen[100],
                    },
                  }}
                >
                  <Box
                    onClick={handleNeelkamal}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      <Tb360View
                        style={{ display: "flex", marginRight: "8px" }}
                      />
                    </Typography>
                    <Typography>Neelkamal [1 BHK]</Typography>
                  </Box>
                </MenuItem>

                {/* Parijat */}
                <MenuItem
                  sx={{
                    color: colors.darkGreen[100],
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors.darkGreen[100],
                    },
                  }}
                >
                  <Box
                    onClick={handleParijat}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      <Tb360View
                        style={{ display: "flex", marginRight: "8px" }}
                      />
                    </Typography>
                    <Typography>Parijat [1 BHK]</Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
    </ThemeProvider>
  );
};

export default ThreeSixtyMenu;
