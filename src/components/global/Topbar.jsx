import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../constants/theme";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const TopNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [select, setSelect] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSectionClick = (sectionId) => {
    setSelect(sectionId);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

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
  });

  return (
    <ThemeProvider theme={styleTheme}>
    <ElevationScroll>
      <AppBar sx={{ backgroundColor: colors.darkGreen[100], position:'relative' }}>
        <Container sx={{ padding: "15px 0px" }}>
          <Toolbar sx={{ display: "contents" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
              <img
                alt="profile-user"
                width="150px"
                height="50px"
                src={Logo}
                style={{
                  cursor: "pointer",
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
                {isMobile ? (
                  // Hamburger Menu Icon for Mobile
                  <MenuIcon
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      cursor: 'pointer',
                      marginRight: '15px'
                    }}
                    onClick={() => toggleDrawer(true)}
                  />
                ) : (
                  // Desktop Navigation Links
                  <NavigationLinks select={select} handleSectionClick={handleSectionClick} />
                )}

              </Box>
            </Box>
          </Toolbar>
        </Container>

        {/* Responsive Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <NavigationLinks select={select} handleSectionClick={handleSectionClick} />
        </Drawer>
      </AppBar>
    </ElevationScroll>
    </ThemeProvider>
  );
};

const NavigationLinks = ({ select, handleSectionClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column",sm : "column", md: "row"},
        width: {xs: 200, sm: 200, md: '100%'},
        padding: "20px",
        backgroundColor: colors.darkGreen[100],
        height: "100%",
      }}
    >
      {[
        { id: 'home', label: 'Home', to: '/' },
        { id: 'amentities', label: 'Amenities', to: '/amentities' },
        { id: 'photo', label: 'Photo Gallery', to: '/photo-gallery' },
        { id: 'about', label: 'About Us', to: '/about-us' },
        { id: 'contact', label: 'Contact Us', to: '/contact-us' },
      ].map((item) => (
        <Typography
          key={item.id}
          variant="h6"
          sx={{
            color: select === item.id ? colors.yellow[100] : colors.white[100],
            marginBottom: "15px",
            fontWeight: '700',
            cursor: 'pointer',
            marginLeft: {md : '2rem', sm: '0'}
          }}
          onClick={() => {
            handleSectionClick(item.id);
          }}
        >
          <Link
            to={item.to}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {item.label}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

const SecondNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
  });

  return (
    <ThemeProvider theme={styleTheme}>
    <Slide in={!isScrolled} direction="down">
      <AppBar
        style={{
          backgroundColor: colors.yellow[100],
          position: "relative",
          zIndex: 1001,
        }}
      >
        <Container sx={{ padding: "15px 0px" }}>
          <Toolbar sx={{ display: "contents" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: {xs:'column',sm: 'row',md: "row", lg: 'row' }, marginLeft:{xs:'15px',sm: '0px',md: "0px", lg: '0px' }}}>
              <Box sx={{ display: "flex"  }}>

                {/* Twitter */}
                <Link href="https://twitter.com/BivabOfficial">
                <TwitterIcon
                  sx={{ color: colors.darkGreen[100], marginRight: {xs:'5px',sm: '5px',md: "22px", lg: '22px' } }}
                />
                </Link>
                
                {/* Facebook */}
                <Link href="https://www.facebook.com/BivabDevelopers/">
                <FacebookIcon
                  sx={{ color: colors.darkGreen[100], marginRight: {xs:'5px',sm: '5px',md: "22px", lg: '22px' } }}
                />
                </Link>

                {/* Instagram */}
                <Link href="https://www.instagram.com/bivab_developers/">
                <InstagramIcon sx={{ color: colors.darkGreen[100], marginRight: {xs:'5px',sm: '5px',md: "22px", lg: '22px' } }} />
                </Link>

                {/* Youtube */}
                <Link href="https://www.youtube.com/@bivabyashila">
                <YouTubeIcon sx={{ color: colors.darkGreen[100], marginRight: {xs:'5px',sm: '5px',md: "22px", lg: '22px' } }} />
                </Link>
                
              </Box>

              <Box sx={{ display: "flex",flexDirection: {xs:'column',sm: 'column',md: "row", lg: 'row' }, marginRight:'15px'  }}>
                <Box sx={{ display: "flex", marginRight: "22px" }}>
                  <EmailOutlinedIcon
                    sx={{ color: colors.darkGreen[100], marginRight: "10px" }}
                  />
                  <Typography variant="p" style={{ color: colors.darkGreen[100], fontWeight:'700' }}>
                    info@bivabdevelopers.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <PhoneOutlinedIcon
                    sx={{ color: colors.darkGreen[100], marginRight: "10px" }}
                  />
                  <Typography variant="p" style={{ color: colors.darkGreen[100], fontWeight:'700' }}>
                    +91 9437345524 / 7381863666 / 9937129034
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
    </ThemeProvider>
  );
};

export { TopNavbar, SecondNavbar };
































// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Container,
//   Toolbar,
//   Typography,
//   useScrollTrigger,
//   Slide,
//   Box,
//   Button,
// } from "@mui/material";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import { useTheme } from "@mui/material";
// import { tokens } from "../../constants/theme";
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/logo.png'

// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// const TopNavbar = ({ onSectionClick }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [select, setSelect] = useState('home');

//   const handleSectionClick = (sectionId) => {
//     setSelect(sectionId);
//   };

//   return (
//     <ElevationScroll>
//       <AppBar sx={{ backgroundColor: colors.darkGreen[100], position:'relative' }}>
//         <Container sx={{ padding: "15px 0px" }}>
//           <Toolbar sx={{ display: "contents" }}>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <img
//                 alt="profile-user"
//                 width="150px"
//                 height="50px"
//                 src={Logo}
//                 style={{
//                   cursor: "pointer",
//                 }}
//               />

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "centers",
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: select === 'home' ? colors.yellow[100] : colors.white[100],
//                     marginRight: "25px",
//                     fontWeight: '700',
//                     cursor:'pointer'
//                   }}
//                 >
//                   <Link
//                     to={"/"}
//                     style={{
//                       textDecoration: "none",
//                       color: "white",
//                     }}
//                   >
//                     {" "}
//                     HOME{" "}
//                   </Link>
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: select === 'amentities' ? colors.yellow[100] : colors.white[100],
//                     marginRight: "25px",
//                     fontWeight: '700',
//                     cursor:'pointer'
//                   }}
//                 >
//                     <Link
//                     to={"/amentities"}
//                     style={{
//                       textDecoration: "none",
//                       color: "white",
//                     }}
//                     onClick={() => {
//                       handleSectionClick('amentities')
//                     }}
//                   >
//                     {" "}
//                     AMENTITIES{" "}
//                   </Link>
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: select === 'photo' ? colors.yellow[100] : colors.white[100],
//                     marginRight: "25px",
//                     fontWeight: '700',
//                     cursor:'pointer'
//                   }}
//                 >
//                   <Link
//                     to={"/photo-gallery"}
//                     style={{
//                       textDecoration: "none",
//                       color: "white",
//                     }}
//                     onClick={() => {
//                       handleSectionClick('photo');
//                     }}
//                   >
//                     {" "}
//                     PHOTO GALLERY{" "}
//                   </Link>
                    
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: select === 'about' ? colors.yellow[100] : colors.white[100],
//                     marginRight: "25px",
//                     fontWeight: '700',
//                     cursor:'pointer'
//                   }}
//                 >
//                   <Link
//                     to={"/about-us"}
//                     style={{
//                       textDecoration: "none",
//                       color: "white",
//                     }}
//                     onClick={() =>  handleSectionClick('about')}
//                   >
//                     {" "}
//                     ABOUT US{" "}
//                   </Link>
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     color: select === 'contact' ? colors.yellow[100] : colors.white[100],
//                     marginRight: "25px",
//                     fontWeight: '700',
//                     cursor:'pointer'
//                   }}
//                 >
//                   <Link
//                     to={"/contact-us"}
//                     style={{
//                       textDecoration: "none",
//                       color: "white",
//                     }}
//                     onClick={() =>  handleSectionClick('contact')}
//                   >
//                     {" "}
//                     CONTACT US{" "}
//                   </Link>
//                 </Typography>

//                 <Button
//                   variant="h4"
//                   sx={{
//                     color: colors.darkGreen[100],
//                     backgroundColor: colors.yellow[100],
//                     borderRadius: "5px",
//                     fontWeight: "700",
//                     '&:hover' : {
//                         color: colors.yellow[100],
//                         backgroundColor: colors.darkblue[100],
//                     }
//                   }}
//                 >
//                   360 Virtual Tour
//                 </Button>
//               </Box>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ElevationScroll>
//   );
// };

// const SecondNavbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Slide in={!isScrolled} direction="down">
//       <AppBar
//         style={{
//           backgroundColor: colors.yellow[100],
//           position: "relative",
//           zIndex: 1001,
//         }}
//       >
//         <Container sx={{ padding: "15px 0px" }}>
//           <Toolbar sx={{ display: "contents" }}>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <Box sx={{ display: "flex" }}>
//                 <TwitterIcon
//                   sx={{ color: colors.darkGreen[100], marginRight: "22px" }}
//                 />
//                 <FacebookIcon
//                   sx={{ color: colors.darkGreen[100], marginRight: "22px" }}
//                 />
//                 <LinkedInIcon sx={{ color: colors.darkGreen[100] }} />
//               </Box>
//               <Box sx={{ display: "flex" }}>
//                 <Box sx={{ display: "flex", marginRight: "22px" }}>
//                   <EmailOutlinedIcon
//                     sx={{ color: colors.darkGreen[100], marginRight: "10px" }}
//                   />
//                   <Typography variant="h6" style={{ color: colors.darkGreen[100], fontWeight:'700' }}>
//                     info@bivabdevelopers.com
//                   </Typography>
//                 </Box>
//                 <Box sx={{ display: "flex" }}>
//                   <PhoneOutlinedIcon
//                     sx={{ color: colors.darkGreen[100], marginRight: "10px" }}
//                   />
//                   <Typography variant="h6" style={{ color: colors.darkGreen[100], fontWeight:'700' }}>
//                     +91 9437345524 / 7381863666 / 9937129034
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Slide>
//   );
// };

// export { TopNavbar, SecondNavbar };
