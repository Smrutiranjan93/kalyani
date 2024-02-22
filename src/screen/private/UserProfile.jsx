import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  TextField,
  CardContent,
  Avatar,
  Divider,
  Popover,
  useTheme
} from "@mui/material";
import Layout from "../../components/global/Layout";
import Profile from "../../assets/images/profile2.jpeg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { tokens } from "../../constants/theme";

const PopupButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSave = () => {
    console.log("Save button clicked");
  };


  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: "#bf953f",
          color: "white",
          marginRight: 2,
          borderRadius: 9,
          fontWeight:700,
          "&:hover":{
            backgroundColor: "white",
            color:"black"
          }
        }}
      >
        Edit Profile
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2, minWidth: 300 }}>
          <Card varient="outlined">
            <CardContent>
              <Typography id="modal-modal-title" variant="h4" gutterBottom sx={{marginBottom:'50px'}}>
                <b>
                  <u>User Details</u>
                </b>
              </Typography>
              <TextField
                label="Name"
                defaultValue="Ken Miles"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Phone No."
                defaultValue="+91 9437345524 / 7381863666 / 9937129034"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email Id"
                defaultValue="info@bivabdevelopers.com"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Address"
                defaultValue="4th Floor, Bivab Gulmohar, Beherasahi, Nuasahi, Nayapalli, Bhubaneswar, Odisha 751012"
                fullWidth
                sx={{ mb: 2 }}
              />
            </CardContent>
          </Card>

          <Box mt={2} display="flex" justifyContent="space-between">
            <Box sx={{marginTop:'40px'}}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  backgroundColor: "white",
                  color: "#FFD700",
                  marginRight: 2,
                  borderRadius: 9999,
                }}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "black",
                  textcolor: "black",
                  borderRadius: 9999,
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

const UserProfile = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styleTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
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
        fontSize: 20,
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
  return (
    <Layout>
      <ThemeProvider theme={styleTheme}>
      <Container maxWidth="lg" sx={{marginTop:'100px'}}>
        <Box mt={4} />
        <Typography variant="h3" gutterBottom>
          <b>User Profile</b>
        </Typography>
        <Box mt={4} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: "0 0 0 rgba(0,0,0,8)",
                backgroundColor: "#0a3c2c",
                height: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Profile Picture"
                  src={Profile}
                  sx={{ width: 150, height: 150, marginBottom: 2 }}
                />
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h5" color="common.white" sx={{ mb: 2 }}>
                  <strong>Name:</strong> Jeon Jungkook
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      backgroundColor: "#bf953f",
                      color: "white",
                      marginRight: 2,
                      borderRadius: 9,
                      fontWeight:700,
                      "&:hover":{
                        backgroundColor: "white",
                        color:"black"
                      }
                    }}
                  >
                    Change Profile
                  </Button>
                  <Box ml={1}>
                    <PopupButton />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card
              variant="outlined"
              sx={{ height: "100%", boxShadow: "0 0 0 rgba(0,0,0,0.1)" }}
            >
              <CardContent>
                <Box mt={4}>
                  <Container maxWidth="md">
                    <Box mb={4}>
                      <Typography variant="h3" component="h2">
                        <strong>
                          <u>My Profile</u>
                        </strong>
                      </Typography>
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      Name: Jeon Jungkook
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Email ID: Jeonkook@Gmail.com
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Contact No.: +91 9876543210
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Address: 4th Floor, Bivab Gulmohar, Beherasahi, Nuasahi,
                      Nayapalli, Bhubaneswar, Odisha 751012
                    </Typography>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </ThemeProvider>
    </Layout>
  );
};

export default UserProfile;
