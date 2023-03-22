import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

function MobileNav({ nav }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  function handelMenuItemClick(item) {
    navigate(item.route);
  }
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "300px" }}
      >
        <List sx={{ width:{xs:"300px",md:"400px"}}}>
          {nav.map((item,i) => (
            <ListItemButton key={`mobinav${i}`} onClick={() => handelMenuItemClick(item)}>
              <ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{color:"white"}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default MobileNav;
