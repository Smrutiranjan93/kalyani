import Layout from "../../components/global/Layout";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { Box } from "@mui/material";
import HomeCarouselAnimated from "../../components/reusable/HomeCarouselAnimated";

const PhotoGallery = () => {
  return (
    <Layout>
      <Box sx={{marginTop:'150px', marginBottom:'100px'}}>
        <PhotoGalleryComponent/>
      </Box>
    </Layout>
  );
};

export default PhotoGallery;
