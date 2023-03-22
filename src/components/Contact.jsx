import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"https://www.kovka-stroy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact-us-background.2a4701c3.png&w=1920&q=75"})`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          width:{xs:"80%"},
          height: {xs:"80%", sm:"80%",md:'50%'},
          padding: "50px",
          borderRadius:'10px'
        }}
        xs={8}
      >
        <Grid item xs={12} sm={12} md={12} lg={8} >
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography sx={{fontSize:{xs:16,sm:18,md:20,lg:36,xl:40}}} color={"#FFDB7F"} variant="h5">
                КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "white" }}>
                <IconButton>
                  <CallIcon sx={{ color: "#FFDB7F" }} />
                </IconButton>
                +7 (985) 293 - 99 - 00 +7 (906) 745 - 50 - 00
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "white" }}>
                <IconButton>
                  <EmailIcon sx={{ color: "#FFDB7F" }} />
                </IconButton>
                Kovka.Stroy@mail.ru
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ color: "white" }}>
                <IconButton>
                  <LocationOnIcon sx={{ color: "#FFDB7F" }} />
                </IconButton>
                Одинцовский район, д.Солослово-7, д.1
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color={"#FFDB7F"} variant="p">
                ОБРАЩАЙТЕСЬ ДАЖЕ ЗА СОВЕТОМ. МЫ ВАМ ПОМОЖЕМ.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}sm={12}md={6}lg={4}>
          <iframe
          sx={{width:{lg:"100%"},height:"100%"}}
          title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.4231414939525!2d37.141100258350455!3d55.69166020695195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b55a501439297b%3A0x905ba792be5e4606!2zNywgU29sb3Nsb3ZvLCBNb3Nrb3Zza2F5YSBvYmxhc3QnLCDVjNW41oLVvdWh1b3Vv9Wh1bYsIDE0MzA4MQ!5e0!3m2!1shy!2sam!4v1679090218080!5m2!1shy!2sam"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
