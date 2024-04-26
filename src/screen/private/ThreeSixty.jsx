import React, { useState, useEffect } from "react";
import { Box, useTheme, Typography, Grid } from "@mui/material";
import Layout from "../../components/global/Layout";
import { tokens } from "../../constants/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import MograImage1 from "../../images/mogra/view1.jpg";
import OrchidImage1 from "../../images/orchid/view1.jpg";
import NeelkamalImage1 from "../../images/neelkamal/view1.jpg";
import ParijatImage1 from "../../images/parijat/view-2.jpg";

import { Link } from "react-router-dom";

import Loading from "../../components/reusable/Loading";

export default function PropertyDetails() {
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
      fontSize: 12,
      h1: {
        fontFamily: ["Kaushan Script", "cursive"].join(","),
        fontSize: 54,
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
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Playfair Display", "serif"].join(","),
        fontSize: 14,
      },
    },
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <ThemeProvider theme={styleTheme}>
            <Box sx={{ marginTop: "55px" }}>
              {/* Heading */}
              <Box
                sx={{
                  backgroundColor: "#333",
                  position: "relative",
                  height: {
                    xs: "30vh",
                    sm: "30vh",
                    md: "50vh",
                    lg: "50vh",
                  },
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  overflow: "hidden",
                  marginBottom: "50px",
                }}
              >
                {/* Pseudo-element for the faded background image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url("/carousel-four.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.4,
                  }}
                />

                {/* Content box */}
                <Box
                  sx={{
                    width: { xs: "100vw", sm: "100vw", md: "45vw", lg: "45vw" },
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    zIndex: 1, // Ensure the content is above the pseudo-element
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: colors.white[100],
                      fontWeight: "900",
                      marginBottom: "5px",
                      fontSize: {
                        xs: "35px",
                        sm: "35px",
                        md: "54px",
                        lg: "54px",
                      },
                    }}
                  >
                    360 Virtual Building Tour
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  margin: "auto",
                  width: { xs: "95%", sm: "95%", md: "90%", lg: "80%" },
                  marginTop: "50px",
                  marginBottom: "100px",
                }}
              >
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image={MograImage1}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                          >
                            Mogra
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "14px",
                              color: "black",
                              fontWeight: "500",
                            }}
                          >
                            The Mogra, a flower held in high esteem by revered
                            deities such as Lord Vishnu and Goddess Laxmi, is an
                            enchanting bloom that serves as the inspiration for
                            the most luxurious dwelling in the Yashila project.
                            The residents of this mesmerizing edifice, situated
                            on the sixth floor, shall enjoy picturesque views of
                            the radiant beach and river from a 24-foot balcony,
                            immersing themselves in the majesty of nature.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to="/mogra" style={{ textDecoration: "none" }}>
                          <Button
                            size="small"
                            sx={{
                              color: "white",
                              backgroundColor: colors.yellow[300],
                              "&:hover": {
                                color: "black",
                                backgroundColor: colors.white[100],
                              },
                            }}
                          >
                            360 Tour
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image={OrchidImage1}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4"
                            component="div"
                            sx={{ fontWeight: "bold" }}>
                            Orchid
                          </Typography>
                          <Typography variant="body2" sx={{
                              fontSize: "14px",
                              color: "black",
                              fontWeight: "500",
                            }}>
                            Orchids' unique beauty and scarcity have rendered
                            them as a symbol of opulence, status, and prestige.
                            In certain spiritual practices, orchids are
                            associated with personal growth, harmony, and
                            spiritual enlightenment.Regarding the 2 Bhk property
                            with a beach view, it boasts of two balconies and
                            every room faces the beach, providing exceptional
                            lighting and stunning views.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to="/orchid" style={{ textDecoration: "none" }}>
                          <Button size="small" sx={{
                              color: "white",
                              backgroundColor: colors.yellow[300],
                              "&:hover": {
                                color: "black",
                                backgroundColor: colors.white[100],
                              },
                            }}>
                            360 Tour
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image={NeelkamalImage1}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4"
                            component="div"
                            sx={{ fontWeight: "bold" }}>
                            Neelkamal
                          </Typography>
                          <Typography variant="body2" sx={{
                              fontSize: "14px",
                              color: "black",
                              fontWeight: "500",
                            }}>
                            The Neelkamal units, a crown jewel of our realm.
                            These enchanted Ibhk units, blessed with the allure
                            of the sea's embrace, offer a vista of endless
                            wonder. And that's not ull, for the Neelkamal flats
                            boast a lounge area adjacent to the balcony, a haven
                            to bask in the majesty of the sea, all from the
                            comfort of your chamber. So, come, indulge in the
                            marvels of our Neelkamal units, and let the sea be
                            your muse.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link
                          to="/neelkamal"
                          style={{ textDecoration: "none" }}
                        >
                          <Button size="small" sx={{
                              color: "white",
                              backgroundColor: colors.yellow[300],
                              "&:hover": {
                                color: "black",
                                backgroundColor: colors.white[100],
                              },
                            }}>
                            360 Tour
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="180"
                          image={ParijatImage1}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4"
                            component="div"
                            sx={{ fontWeight: "bold" }}>
                            Parijat
                          </Typography>
                          <Typography variant="body2" sx={{
                              fontSize: "14px",
                              color: "black",
                              fontWeight: "500",
                            }}>
                            As legend whispers, the goddess of prosperity, T
                            Lakshmi, delights in the fragrant petals of the
                            Parijat blooms. This enchanting tree, steeped in
                            magic and fore, has long been used to conjure the
                            favor of the goddess. And now, dear seeker, a cozy I
                            bhk abode beckons you, adorned with a grand balcony
                            that gazes upon the central garden. May this
                            enchanted dwelling bring you wealth and blessings,
                            as the Parijat's bloom pleases the divine goddess.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to="/parijat" style={{ textDecoration: "none" }}>
                          <Button size="small" sx={{
                              color: "white",
                              backgroundColor: colors.yellow[300],
                              "&:hover": {
                                color: "black",
                                backgroundColor: colors.white[100],
                              },
                            }}>
                            360 Tour
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </ThemeProvider>
        </Layout>
      )}
    </div>
  );
}

PropertyDetails.getInitialProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = "Loading";
  return { data };
};
