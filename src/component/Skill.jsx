import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "../styling/Skill.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 95 },
  { name: "PHP", level: 75 },
  { name: "OOP", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "Material UI", level: 70 },
  { name: "C++", level: 65 },
  { name: "MS Access", level: 60 },
];

const Skill = () => {
  return (
    <section id="skill" className="main-skill">
      <Box className="skills-container">
        <Typography variant="h4" className="skills-heading">
          My Skills
        </Typography>

        <Box className="skills-grid">
          {skills.map((skill) => (
            <Box key={skill.name} className="skill-bar">
              <Typography variant="subtitle1" className="skill-name">
                {skill.name}
              </Typography>

              <Box className="progress-wrapper">
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    flex: 1,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      background: "linear-gradient(90deg, #4b4ded, #22b2da)",
                    },
                  }}
                />
                <Typography className="skill-percent">
                  {skill.level}%
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Skill;
