import { useState, useEffect } from "react";
import Menudrawer from "./Menudrawer";
import "../styling/Navbar.css";
import logo from "../image/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 510);
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 510);
    };
    window.addEventListener("resize", handleResize);
  }, [smallScreen]);
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo-img" />
      {smallScreen ? (
        <>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          {openDrawer && (
            <Menudrawer open={openDrawer} setOpen={setOpenDrawer} />
          )}
        </>
      ) : (
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
