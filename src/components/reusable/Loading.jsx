import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', margin:'auto', marginTop:'20vh'}}>
      <img
        alt="profile-user"
        width="60%"
        height="60%"
        src={'/spinner.svg'}
        style={{
          cursor: "pointer",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default Loading;
