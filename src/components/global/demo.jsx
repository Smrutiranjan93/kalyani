
const TopNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setShowPopup(false);
    return () => {};
  }, []);

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
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Oswald", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
    <ElevationScroll>
      <AppBar sx={{ backgroundColor: colors.darkRed[200] }}>
        <Container sx={{ padding: "15px 0px" }}>
          <Toolbar sx={{ display: "contents" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <img
                alt="profile-user"
                width="80px"
                height="50px"
                src={`/assets/profile-logo.png`}
                style={{
                  cursor: "pointer",
                  filter: "grayscale(1) contrast(0) brightness(1000)",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "centers",
                }}
              >
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/home"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    HOME{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/about"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    ABOUT US{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/projects"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    PROJECTS+{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/testimonials"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    TESTIMONIALS{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/blogs"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    BLOGS{" "}
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: colors.white[100], marginRight: "25px" }}
                >
                  <Link
                    href={"/contact"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    CONTACT US{" "}
                  </Link>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: colors.white[100],
                    backgroundColor: colors.black[100],
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                  onClick={handleOpenPopup}
                >
                  ENQUIRE NOW
                </Button>
                <PopupForm open={showPopup} onClose={handleClosePopup} />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
    </ThemeProvider>
  );
};