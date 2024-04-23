import { Box, colors } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            display: "flex",
            margin: "auto",
            height: "100vh",
          },
        }}
      >
        <img
          alt="profile-user"
          width="100%"
          height="100%"
          src={"/spinner.svg"}
          style={{
            cursor: "pointer",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
