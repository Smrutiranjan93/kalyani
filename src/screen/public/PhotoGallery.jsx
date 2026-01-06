import React, { useState, useEffect } from "react";
import Layout from "../../components/global/Layout";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { Box, Typography } from "@mui/material";
import Loading from "../../components/reusable/Loading";
import { propertyData } from "../../data/propertyData";

const PhotoGallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
console.log(propertyData)
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            marginTop: "150px",
            marginBottom: "100px",
            minHeight: "100vh", // ✅ prevents clipping
          }}
        >
          <Typography
            variant="h2"
            fontWeight="700"
            sx={{
              color: "#2a2c38",
              marginBottom: "30px",
              textAlign: "center",
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

          {/* ✅ DATA PASSED CORRECTLY */}
          <PhotoGalleryComponent data={propertyData} />
        </Box>
      )}
    </Layout>
  );
};

export default PhotoGallery;
