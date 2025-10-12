import { Box, Typography, Link } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

const Contact = () => {
  return (
    <section id="contact">
      <Box
        sx={{
          padding: "60px 10%",
          background: "linear-gradient(135deg, #2b3a5a 0%, #3e5a80 100%)",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
          "@media (max-width: 210px)": {
            wordWrap: "break-word",
            overflow: "break-word",
            fontSize: "90%",
          },
        }}
      >
        <Box>
          <Email sx={{ fontSize: 35, mb: 1 }} />
          <Typography>Email</Typography>
          <Link
            href="mailto:iamareej003@gmail.com"
            underline="none"
            sx={{
              color: "#e0e0e0",
              "&:hover": { color: "#00dbde" },
              wordBreak: "break-all",
              display: "block",
              maxWidth: "200px",
              margin: "auto",
            }}
          >
            iamareej003@gmail.com
          </Link>
        </Box>

        <Box>
          <LinkedIn sx={{ fontSize: 35, mb: 1 }} />
          <Typography>LinkedIn</Typography>
          <Link
            href="https://www.linkedin.com/in/areej-malik-170509378"
            target="_blank"
            underline="none"
            sx={{
              color: "#e0e0e0",
              "&:hover": { color: "#00dbde" },
              wordBreak: "break-all",
              display: "block",
              maxWidth: "200px",
              margin: "auto",
            }}
          >
            linkedin.com/in/areej-malik
          </Link>
        </Box>

        <Box>
          <GitHub sx={{ fontSize: 35, mb: 1 }} />
          <Typography>GitHub</Typography>
          <Link
            href="https://github.com/areeeej1"
            target="_blank"
            underline="none"
            sx={{
              color: "#e0e0e0",
              "&:hover": { color: "#00dbde" },
              wordBreak: "break-all",
              display: "block",
              maxWidth: "200px",
              margin: "auto",
            }}
          >
            github.com/areeeej1
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
