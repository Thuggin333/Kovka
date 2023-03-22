import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box sx={{background:'#1B1B1B',padding:'50px'}}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container>
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
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} justifyContent="end">
            <Grid item xs={8} md={4}>
              <img
                src="https://www.kovka-stroy.ru/_next/static/media/Logo.45bf66d4.svg"
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
