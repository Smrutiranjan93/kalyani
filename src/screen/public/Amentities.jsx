import Layout from "../../components/global/Layout";
import AmentitiesComponent from "../../components/reusable/AmentitiesComponent";
import {
  Box
} from "@mui/material";


const Amentities = () => {
  return (
    <Layout>
      <Box sx={{marginTop:'130px'}}>
      <AmentitiesComponent/>
      </Box>
    </Layout>
  );
};

export default Amentities;
