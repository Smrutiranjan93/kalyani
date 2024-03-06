import React, { useState, useEffect } from "react";
import Layout from "../../components/global/Layout";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { Box, Typography } from "@mui/material";

import Loading from "../../components/reusable/Loading";

const PhotoGallery = ({ data }) => {
  // Loading logic
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Box sx={{ marginTop: "150px", marginBottom: "100px" }}>
          <Typography
                  variant="h2"
                  fontWeight="700"
                  sx={{
                    color: "#2a2c38",
                    marginBottom: "30px",
                    textAlign:'center',
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "34px",
                    },
                  }}
                >
                  OUR GALLERY
                </Typography>
            <PhotoGalleryComponent />
          </Box>
        </Layout>
      )}
    </div>
  );
};

PhotoGallery.getInitialProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = "Loading";
  return { data };
};

export default PhotoGallery;
