import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #141e30, #243b55 )",
        color: "white",
        padding: "15px 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: "0.95rem",
      }}
    >
      <Typography sx={{ fontSize: "0.9rem", opacity: 0.8 }}>
        {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
      </Typography>
      <Typography>
        Made by <strong>Areej Malik</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
