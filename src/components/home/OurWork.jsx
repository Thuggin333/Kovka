import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "348px",
}));

function OurWork() {
  return (
    <Box
      sx={{
        background: "#1B1B1B",
        padding: "30px 15px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography sx={{ color: "#FFDB7F" }} variant="h4" component="span">
              НАШИ РАБОТЫ
            </Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/22f.jpg"
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/55d.jpg"
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/33s.jpg"
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/Zabor%2015.jpg"
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/39e.jpg"
                  alt=""
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://kovka-stroy.ru/a9/32c.jpg"
                  alt=""
                />
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" sx={{ color: "white" }}>
              Посмотреть больше
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurWork;

/*  

 <Grid container alignItems="center" justifyContent="center">
        <Typography sx={{ color: "#FFDB7F" }} variant="h4" component='span'>
          НАШИ РАБОТЫ
        </Typography>
      </Grid>
      <Box sx={{ margin: "20px" }}>
        
      </Box>
      <Grid container alignItems="center" justifyContent="center">
        
      </Grid>



*/
