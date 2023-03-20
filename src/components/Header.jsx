import React, { useState } from "react";
// components
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  InputBase,
  Grid,
} from "@mui/material";

// styles
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

// icons
import SearchIcon from "@mui/icons-material/Search";

// data
import { menu } from "../data";
import MobileNav from "./home/MobileNav";
import { useNavigate } from "react-router";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const tabStyle = {
  Button: {
    color: "white",
    fontSize: { xs: "8px", md: "14px", lg: "18px" },
  },
};

function Header() {
  const [activeNav, setActiveNav] = useState("Главная");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  function handelMenuItemClick(item) {
    navigate(item.route);
  }
  return (
    <AppBar sx={{ background: "rgba(0, 0, 0, 0.7)", position: "fixed" }}>
      <Toolbar>
        <Grid container p={4}>
          <Grid item container xs={12} lg={2}>
            <Grid
              item
              xs={2}
              lg={12}
              sx={{
                width: { xs: "100px", lg: "70px" },
                height: { xs: "115px", lg: "75px" },
              }}
            >
              <img
                src={menu.logo.src}
                alt={menu.logo.alt}
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={8} alignSelf="center">
            {isMobile ? (
              <MobileNav nav={menu.nav} />
            ) : (
              <Tabs
                value={activeNav}
                onChange={(e, value) => setActiveNav(value)}
              >
                {menu.nav.map((item, id) => (
                  <Tab
                    onClick={() => handelMenuItemClick(item)}
                    key={`nav${id}`}
                    label={item.name}
                    value={item.name}
                    sx={{
                      ...tabStyle.Button,
                    }}
                  />
                ))}
              </Tabs>
            )}
          </Grid>
          <Grid item xs={4} lg={2} alignSelf="center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск.."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
