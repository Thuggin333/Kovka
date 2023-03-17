import { Grid, Typography } from "@mui/material";
import React from "react";
import { Item } from "../home/OurWork";
import catalogInfo from "./catalogData";

function CatalogPage() {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ backgroundColor: "#1B1B1B", padding: "150px 0px" }}
    >
      <Grid item xs={8}>
        <Typography sx={{ color: "#FFDB7F" }} variant="h4" component="span">
          КАТАЛОГ
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={4}>
          {catalogInfo.catalog.map((item, id) => (
            <Grid item xs={4} >
              <Item sx={{height:'500px'}}>
                {/* <Typography variant="p">{item.title}</Typography> */}
                <img src={item.img} alt="img" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CatalogPage;
