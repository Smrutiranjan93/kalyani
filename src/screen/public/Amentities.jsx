import React, { useState, useEffect } from "react";
import Layout from "../../components/global/Layout";
import AmentitiesComponent from "../../components/reusable/AmentitiesComponent";
import { Box } from "@mui/material";
import Loading from "../../components/reusable/Loading";

const Amentities = ({ data }) => {
  {
    /* Loading logic */
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  {
    /* End */
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Box sx={{ marginTop: "130px" }}>
            <AmentitiesComponent />
          </Box>
        </Layout>
      )}
    </div>
  );
};

Amentities.getInitialProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = "Loading";
  return { data };
};

export default Amentities;
