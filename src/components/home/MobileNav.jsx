import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function MobileNav({nav}) {
    const [openDrawer,setOpenDrawer]=useState(false)
  return (
    <>
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      sx={{ width: "300px" }}>
      <List sx={{ width: "300px" }}>
        {nav.map((item) => (
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
    <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>

   
    </>
  )
}

export default MobileNav