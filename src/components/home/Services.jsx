import { Box, Container, Grid, Typography,} from "@mui/material";

import React from "react";

const ourService = [
  "Кованые ворота",
  "Кованые перила",
  "Кованые балконы",
  "Кованые заборы ",
  "Кованые мангалы",
  "Кованые навесы",
  "Кованые подставки для всего",
  "Решётки на окна",
  "Кованые стулья и столы",
];



function Services() {
  return (
    <Box sx={{ background: "#1B1B1B", padding: "30px 15px" }}>
      <Grid>
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography
                sx={{ color: "#FFDB7F" }}
                variant="h4"
                component="span"
              >
                НАШИ УСЛУГИ
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={6} item container>
              {ourService.map((service, i) => (
                <Grid item xs={12} key={`service${i}`}>
                  <Typography sx={{ color: "white" }}>{service}</Typography>
                </Grid>
              ))}
            </Grid>
            <Grid lg={6} md={6} sx={{display:{xs:'none',md:"block"}}} item>
              <img
                src="https://www.kovka-stroy.ru/_next/image?url=https%3A%2F%2Fkovka-stroy.ru%2Fa9%2FBalcon%209.jpg&w=3840&q=75"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}

export default Services;
