import areejDp from "../image/areejDp.jpg";

import { useEffect, useState } from "react";
import "../styling/Home.css";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Code, Javascript, Brush } from "@mui/icons-material";
const Home = () => {
  const data = [
    {
      icon: <Code sx={{ fontSize: 50, color: "#4e54c8" }} />,
      title: "Front-End",
      text: "I'm more front-end focused...",
    },
    {
      icon: <Javascript sx={{ fontSize: 50, color: "#f7df1e" }} />,
      title: "JavaScript",
      text: "I just extremely love JavaScript...",
    },
    {
      icon: <Brush sx={{ fontSize: 50, color: "#00a5b3" }} />,
      title: "Creative Coding",
      text: "I love creative coding...",
    },
  ];
  const text = "CREATIVE FRONT-END WEB DEVELOPER";
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < text.length) {
          setSubIndex((prev) => prev + 1);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (!deleting && subIndex === text.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
        }
      },
      deleting ? 70 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, text]);

  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <p>Hello, I'm </p>
          <h1>Areej Malik</h1>
          <h2>{text.substring(0, subIndex)}|</h2>
          <a
            href="https://drive.google.com/uc?export=download&id=19WqGsN6lLh9Q_p1MSg8ac-hNk2knHZgq"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="home-img">
          <img src={areejDp} alt="Areej Malik" />
        </div>
      </section>
      <Box
        sx={{
          padding: "80px 10%",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            color: "#4e54c8",
            fontWeight: "bold",
            animation: "glowPulse 2.5s ease-in-out infinite",
          }}
        >
          Things I Love
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {data.map((item, i) => (
            <Grid key={i} display="flex" justifyContent="center">
              <Paper
                elevation={4}
                sx={{
                  width: "70%",
                  padding: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  "&:hover": { transform: "translateY(-6px)" },
                  boxShadow:
                    "0 4px 15px linear-gradient(135deg, #141e30, #243b55))",
                  transition: "all 0.4s ease-in-out",
                  background: "linear-gradient(145deg, #ffffff, #f3f5ff)",
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    animation: "floatIcon 2s ease-in-out infinite",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mt: 2, fontWeight: "bold", color: "#333" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "#555", lineHeight: 1.6 }}
                >
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
