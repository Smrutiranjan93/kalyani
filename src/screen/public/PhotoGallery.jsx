import Layout from "../../components/global/Layout";
import PhotoGalleryComponent from "../../components/reusable/PhotoGalleryComponent";
import { Box } from "@mui/material";

const PhotoGallery = () => {
  return (
    <Layout>
      <Box sx={{marginTop:'15px'}}>
        <PhotoGalleryComponent/>
      </Box>
    </Layout>
  );
};

export default PhotoGallery;
