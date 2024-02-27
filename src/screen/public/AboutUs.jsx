import React, { useState, useEffect } from "react";
import Layout from "../../components/global/Layout";
import { Box, Typography, Button, useTheme, Grid } from "@mui/material";
import { tokens } from "../../constants/theme";
import aboutBg from "../../assets/images/about-bg.jpeg";
import bivabBuilding from "../../assets/images/bivab-building.png";
import profileTwo from "../../assets/images/profile2.jpeg";
import profileThree from "../../assets/images/profile3.jpeg";

import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CounterUp from "../../components/reusable/CounterUp";

import { GETNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

const AboutUs = () => {
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreVision, setShowMoreVision] = useState(false);

  const toggleShowMoreMission = () => {
    setShowMoreMission(!showMoreMission);
  };

  const toggleShowMoreVision = () => {
    setShowMoreVision(!showMoreVision);
  };

  {
    /* API Integration */
  }
  const [aboutOwner, setAboutOwner] = useState([]);
  const [successCounter, setSuccessCounter] = useState([]);

  const [missionTitle, setMissionTitle] = useState('');
  const [visionTitle, setVisionTitle] = useState('');
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');

  useEffect(() => {
    const aboutOwnerData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.ABOUT_OWNER_URL);
        if (response.status) {
          setAboutOwner(response.data);
          console.log(response.data);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    aboutOwnerData();

    const successCounterData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.SUCCESS_COUNTER_URL);
        if (response.status) {
          setSuccessCounter(response.data);
          console.log(response.data);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    successCounterData();

    const aboutMissionVisionData = async () => {
      try {
        const response = await GETNETWORK(ApiUrl.MISSION_VISION_URL);
        if (response.status) {
          const missionTitleData = response.data[1]?.title || '';
          const missionData = response.data[1]?.description || '';
          const visionTitleData = response.data[0]?.title || '';
          const visionData = response.data[0]?.description || '';
          setMissionTitle(missionTitleData)
          setMission(missionData);
          setVisionTitle(visionTitleData);
          setVision(visionData);
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    aboutMissionVisionData();
  }, []);
  {
    /* END API Integration */
  }

  const displayMissionText = showMoreMission
    ? mission
    : `${mission.slice(0, 150)}...`;
  const displayVisionText = showMoreVision
    ? vision
    : `${vision.slice(0, 150)}...`;

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
        fontFamily: ["Playfair Display", "serif"].join(","),
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
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 15,
      },
    },
  });
  return (
    <Layout>
      <ThemeProvider theme={styleTheme}>
        <Box marginBottom="50px">
          {/* Intro bg Details */}
          <Box
            sx={{
              backgroundColor: "#333",
              backgroundImage: `url(${aboutBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: "16px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  color: colors.white[100],
                  fontWeight: "900",
                  marginBottom: "5px",
                  fontSize: "42px",
                  textAlign: "center",
                }}
              >
                ABOUT US
              </Typography>
            </Box>
          </Box>
          {/* End */}

          {/* About Details */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: { xs: "10px 20px", sm: "50px 150px", md: "50px 100px" },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", md: "40vw", lg: "40vw" },
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: colors.black[100],
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.9rem",
                    md: "1rem",
                    lg: "2rem",
                  },
                }}
              >
                ABOUT BIVAB
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                BIVAB® Developers is an eminent company redefining real estate
                in Bhubaneswar
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                Welcome to BIVAB® Yashila, a distinctive residential enclave in
                the heart of Puri, Odisha. Boasting over 300 meticulously
                crafted apartments, BIVAB Yashila is set to redefine modern
                living in this serene coastal town.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                Nestled in the tranquil ambiance of Puri, our latest project
                reflects the essence of luxury, comfort, and innovation. BIVAB
                Yashila is more than just a collection of homes; it’s a
                lifestyle curated for those who seek the perfect blend of
                tranquility and convenience.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                Discover a harmonious living experience with thoughtfully
                designed spaces, modern amenities, and a scenic backdrop that
                echoes the spirit of Puri. Each apartment at BIVAB Yashila is a
                testament to our commitment to quality and excellence.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                Immerse yourself in the coastal charm of Puri and elevate your
                living standards with BIVAB Yashila. Your dream home awaits in
                this coastal paradise, where the beauty of the surroundings
                meets the sophistication of modern architecture.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.black[100],
                  fontWeight: "400",
                  marginBottom: "5px",
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.8rem",
                    lg: "1rem",
                  },
                }}
              >
                Explore the allure of Puri living at BIVAB Yashila—where home is
                not just a place; it’s an experience. Welcome to a new era of
                residential excellence.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  color: colors.darkGreen[100],
                  backgroundColor: colors.yellow[100],
                  borderRadius: "9px",
                  fontWeight: "900",
                  marginTop: "32px",
                  width: { xs: "52vw", sm: "30vw", md: "20vw", lg: "20vw" },
                  padding: "16px 0px",
                  "&:hover": {
                    color: colors.yellow[100],
                    backgroundColor: colors.darkGreen[100],
                  },
                }}
              >
                INVEST TODAY
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: colors.white[100],
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "40vw",
                  lg: "40vw",
                  xl: "40vw",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: {
                  xs: "10px",
                  sm: "10px",
                  md: "-85px",
                  lg: "-85px",
                  xl: "-85px",
                },
              }}
            >
              <img
                alt="profile-user"
                width="80%"
                height="80%"
                src={bivabBuilding}
                style={{
                  cursor: "pointer",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>
          </Box>
          {/* End */}

          {/* Mission Details */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "50px 100px",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row", lg: "row" },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "start",
                lg: "start",
              },
            }}
          >
            <Box
              sx={{
                borderBottom: `2px solid ${colors.yellow[100]}`,
                marginRight: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
                padding: "10px 61px",
                "&:hover": {
                  background: "linear-gradient(to top, #0d5a4194, white)",
                },
              }}
            >
              <Typography
                variant="h2"
                style={{
                  color: colors.darkGreen[100],
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "45px",
                }}
              >
                {missionTitle}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.darkblue[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  textAlign: { xs: "center" },
                }}
              >
                {displayMissionText}
              </Typography>
              {mission.length > 150 && (
                <Button
                  onClick={toggleShowMoreMission}
                  style={{ color: colors.darkblue[100] }}
                >
                  {showMoreMission ? "See less" : "See more"}
                </Button>
              )}
            </Box>
            <Box
              sx={{
                borderBottom: `2px solid ${colors.yellow[100]}`,
                marginLeft: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
                padding: "10px 61px",
                "&:hover": {
                  background: "linear-gradient(to top, #0d5a4194, white)",
                },
              }}
            >
              <Typography
                variant="h2"
                style={{
                  color: colors.darkGreen[100],
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "45px",
                }}
              >
                {visionTitle}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: colors.darkblue[100],
                  fontWeight: "400",
                  marginBottom: "15px",
                  textAlign: { xs: "center" },
                }}
              >
                {displayVisionText}
              </Typography>
              {vision.length > 150 && (
                <Button
                  style={{ color: colors.darkblue[100] }}
                  onClick={toggleShowMoreVision}
                >
                  {showMoreVision ? "See less" : "See more"}
                </Button>
              )}
            </Box>
          </Box>
          {/* End */}

          {/* Mission Success */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "100px 0px",
              backgroundColor: colors.darkblue[200],
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            {/* One */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "52vh",
                marginRight: "7px",
                justifyContent: "space-around",
              }}
            >
              <PlaylistAddCircleIcon sx={{ fontSize: "65px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    color: colors.darkblue[100],
                    fontWeight: "400",
                    marginBottom: "5px",
                    fontSize: "70px",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[0] &&
                    successCounter[0].number && (
                      <div>
                        <CounterUp prop={successCounter[0].number} />
                      </div>
                    )}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: colors.darkGreen[100],
                    fontWeight: "400",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[0] &&
                    successCounter[0].title && (
                      <div>
                        {successCounter[0].title}
                      </div>
                    )}
                </Typography>
              </Box>
            </Box>

            {/* Two */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "52vh",
                justifyContent: "space-around",
                marginRight: "7px",
              }}
            >
              <PlaylistAddCheckCircleIcon sx={{ fontSize: "65px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    color: colors.darkblue[100],
                    fontWeight: "400",
                    marginBottom: "10px",
                    fontSize: "70px",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[1] &&
                    successCounter[1].number && (
                      <div>
                        <CounterUp prop={successCounter[1].number} />
                      </div>
                    )}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: colors.darkGreen[100],
                    fontWeight: "400",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[1] &&
                    successCounter[1].title && (
                      <div>
                        {successCounter[1].title}
                      </div>
                    )}
                </Typography>
              </Box>
            </Box>

            {/* Three */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "52vh",
                justifyContent: "space-around",
                marginRight: "7px",
              }}
            >
              <EmojiEmotionsIcon sx={{ fontSize: "65px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    color: colors.darkblue[100],
                    fontWeight: "400",
                    marginBottom: "10px",
                    fontSize: "70px",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[2] &&
                    successCounter[2].number && (
                      <div>
                        <CounterUp prop={successCounter[2].number} />
                      </div>
                    )}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: colors.darkGreen[100],
                    fontWeight: "400",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[2] &&
                    successCounter[2].title && (
                      <div>
                        {successCounter[2].title}
                      </div>
                    )}
                </Typography>
              </Box>
            </Box>

            {/* Four */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "52vh",
                justifyContent: "space-around",
              }}
            >
              <PersonSearchIcon sx={{ fontSize: "65px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="h2"
                  style={{
                    color: colors.darkblue[100],
                    fontWeight: "400",
                    marginBottom: "10px",
                    fontSize: "70px",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[3] &&
                    successCounter[3].number && (
                      <div>
                        <CounterUp prop={successCounter[3].number} />
                      </div>
                    )}
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: colors.darkGreen[100],
                    fontWeight: "400",
                  }}
                >
                  {successCounter &&
                    successCounter.length > 0 &&
                    successCounter[3] &&
                    successCounter[3].title && (
                      <div>
                        {successCounter[3].title}
                      </div>
                    )}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* End */}

          {/* Founder Intro Success */}

          <Box sx={{ width: "85%", margin: "auto", marginTop: "50px" }}>
            <Grid container spacing={6}>
              {aboutOwner &&
                aboutOwner.length > 0 &&
                aboutOwner.map((about) => (
                  <Grid item xs={12} sm={6} md={6} lg={6} key={about.id}>
                    <Box
                      sx={{
                        backgroundColor: colors.darkblue[200],
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        marginLeft: "10px",
                        padding: "20px",
                        marginBottom: {
                          xs: "15px",
                          sm: "15px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <img
                        alt="profile-user"
                        width="100%"
                        height="100%"
                        src={`${ApiUrl.ImageHostURl}${about.imageName}`}
                        style={{
                          cursor: "pointer",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <Typography
                        variant="h5"
                        style={{
                          color: colors.darkGreen[100],
                          fontWeight: "400",
                          marginBottom: "10px",
                          borderLeft: `2px solid ${colors.yellow[100]}`,
                          paddingLeft: "10px",
                        }}
                      >
                        {about.name}
                        <Typography
                          variant="h6"
                          style={{
                            color: colors.yellow[100],
                            fontWeight: "700",
                          }}
                        >
                          {about.designation}
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>

          {/* End */}
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default AboutUs;
