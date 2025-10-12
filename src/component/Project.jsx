import bahriatown from "../image/bahriatown.jpg";
import loveCalculator from "../image/loveCalculator.png";
import loginsignup from "../image/loginsignup.png";
import counterimg from "../image/counterimg.png";
import githubimg from "../image/githubimg.jpg";
import pkb from "../image/pkb.png";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const Project = () => {
  const projects = [
    {
      title: "Bahria Town Website",
      description:
        "A responsive real-estate themed website showcasing Bahria Town layout and design",
      image: bahriatown,
      link: "https://areeeej1.github.io/bahria_town",
      github: "https://github.com/Areeeej1/bahria_town",
    },
    {
      title: "Love Calculator",
      description:
        "A fun web app that calculates love percentage using React and CSS.",
      image: loveCalculator,
      link: "https://areeeej1.github.io/love-calculator",
      github: "https://github.com/Areeeej1/love-calculator",
    },

    {
      title: "Login & Signup",
      description:
        "A login and signup UI built with HTML, CSS & JavaScript for user authentication screens.",
      image: loginsignup,
      link: "https://areeeej1.github.io/login_signup/",
      github: "https://github.com/Areeeej1/login_signup",
    },
    {
      title: "GitHub Search Engine",
      description:
        "A web app that allows users to search GitHub profiles and repositories with real-time data fetching.",
      image: githubimg,
      github: "https://github.com/Areeeej1/GitHubSearchEngine",
    },
    {
      title: "Counter App",
      description:
        "A simple yet interactive counter app with increment, decrement, and reset features built using React.",
      image: counterimg,
      github: "https://github.com/Areeeej1/counter",
    },
    {
      title: "Pokemon Berries",
      description:
        "A fun Pokémon-themed app displaying different berries and their effects using the PokéAPI.",
      image: pkb,
      github: "https://github.com/Areeeej1/PokemonBerries",
    },
  ];

  return (
    <section id="project">
      <Box
        sx={{
          padding: "10% 10%",
          textAlign: "center",
          background: " #f9f9f9;",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: "180%",
            fontWeight: "bold",
            mb: 5,
            color: "#00a5b3",
          }}
        >
          My Projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            rowGap: 6,

            //  "@media (max-width: 290px)": {

            //      width:100
            //    },
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                background:
                  "linear-gradient(145deg, #e6e9ff 0%, #c7ccff 50%, #b2f1f5 100%)",
                width: { xs: "90%", sm: "45%", md: "30%" },

                maxWidth: 320,
                borderRadius: 3,

                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 17px 38px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 160,
                  width: 160,
                  objectFit: "cover",
                  borderRadius: "50%",
                  margin: "auto",
                  mt: 2,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  border: "3px solid white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  },
                  "@media (max-width: 240px)": {
                    height: "100%",
                    width: "95%",
                  },
                }}
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "100%", fontWeight: 600, color: "#4e54c8" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#4e54c8",
                    color: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00a5b3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#4e54c8")
                  }
                >
                  <GitHubIcon />
                </a>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#4e54c8",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#00a5b3")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#4e54c8")
                    }
                  >
                    <LanguageIcon />
                  </a>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Project;
