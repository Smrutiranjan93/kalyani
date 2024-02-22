import React,{useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Typography,
  Button,
  useTheme,
  Grid,
  TextField,
  Snackbar,
} from "@mui/material";
import { tokens } from "../../constants/theme";

import { POSTNETWORK } from "../../utils/network";
import ApiUrl from "../../utils/url";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const PopupForm = ({ open, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formError, setFormError] = useState("");

  const handelContact = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !message) {
      setFormError('All fields are required.');
      setTimeout(() => {
        setFormError('');
      }, 2000);
      return;
    }

    const loginPayload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      datafrom: "Yashila"
    };

    try {
      const loginResponse = await POSTNETWORK(ApiUrl.CONTACT_URL, loginPayload);
      if (loginResponse.status) {
        console.log("Login successful:", loginResponse);
        setOpenSnackbar(true);
      } else {
        console.error("Login failed. No token in the response.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    
    setTimeout(() => {
      onClose();
    }, 2000);
    
  };
  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
    typography: {
      fontFamily: ['Playfair Display', 'serif'].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ['Kaushan Script', 'cursive'].join(","),
        fontSize: 100,
      },
      h2: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Playfair Display', 'serif'].join(","),
        fontSize: 12,
      },
    },
  });

  return (
    <ThemeProvider theme={styleTheme}>
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { backgroundColor:colors.darkGreen[100], borderRadius:'15px' } }}>
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon sx={{color:colors.white[100]}}/>
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{textAlign:'center'}}>
        <Typography
          variant="h2"
          fontWeight="700"
          sx={{
            background: (theme) => `linear-gradient(45deg, rgb(191, 149, 63), rgb(252, 246, 186), rgba(170, 119, 28, 0.82), rgb(252, 246, 186))`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
            marginBottom: "40px",
          }}
        >
          Get In Touch
        </Typography>
        <Snackbar
              open={openSnackbar}
              autoHideDuration={2000}
              onClose={handleCloseSnackbar}
              message="Form submitted successfully!"
              sx={{
                color: "#FFFFFF",
                position:'relative',

                "& .MuiSnackbarContent-message": {
                  flex: "auto",
                },
              }}
            />
        <form onSubmit={handelContact}>
              <Grid container spacing={2}>
                {/* First Row */}
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      sx: {
                        color: colors.darkGreen[100],
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: colors.darkblue[200],
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: colors.darkGreen[100], // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.darkblue[100], // Border color when focused
                        },
                      },
                    }}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      sx: {
                        color: colors.darkGreen[100],
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: colors.darkblue[200],
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: colors.darkGreen[100], // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.darkblue[100], // Border color when focused
                        },
                      },
                    }}
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>

                {/* Second Row */}
                <Grid item xs={12}>
                  <TextField
                    InputLabelProps={{
                      sx: {
                        color: colors.darkGreen[100],
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: colors.darkblue[200],
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: colors.darkGreen[100], // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.darkblue[100], // Border color when focused
                        },
                      },
                    }}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                {/* Third Row */}
                <Grid item xs={12}>
                  <TextField
                    InputLabelProps={{
                      sx: {
                        color: colors.darkGreen[100],
                        borderRadius: "10px",
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: colors.darkblue[200],
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: colors.darkGreen[100], // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.darkblue[100], // Border color when focused
                        },
                      },
                    }}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>

                {/* Fourth Row */}
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: "10vw",
                      color: colors.darkGreen[100],
                      backgroundColor: colors.white[100],
                      fontWeight: "bold",
                      "&:hover": {
                        color: colors.darkGreen[100],
                        backgroundColor: colors.yellow[100],
                      },
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
                
                {/* Display error message */}
                {formError && (
                    <Grid
                      item
                      xs={12}
                      sx={{ color: "red", textAlign: "center" }}
                    >
                      {formError}
                    </Grid>
                  )}
              </Grid>
            </form>
      </DialogContent>
    </Dialog>
    </ThemeProvider>
  );
};

export default PopupForm;
