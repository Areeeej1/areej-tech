import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import "../styling/Navbar.css";

const Menudrawer = ({ open, setOpen }) => {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const menuItems = [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Skill", link: "#skill" },
    { text: "Project", link: "#project" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 220,
            textAlign: "center",
            background: "linear-gradient(135deg, #4e54c8, #00a5b3)",
            height: "100%",
            color: "white",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <h3 style={{ padding: "15px 0" }}>Menu</h3>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      color: "white",
                      textAlign: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Menudrawer;
