import { useState } from "react";
import "../styling/About.css";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
const About = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => setPage((prev) => (prev < 4 ? prev + 1 : prev));
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  const content = [
    {
      title: "About Me",
      text: (
        <>
          <p>
            Hi, I’m <span className="highlight">Areej Malik</span>, a passionate
            and dedicated Front-End Developer with 3 years of experience in
            creating responsive, dynamic, and user-friendly web applications. I
            specialize in React.js, JavaScript, Material UI, HTML, and CSS, with
            hands-on experience integrating APIs and optimizing performance for
            seamless user experiences.
          </p>
          <p>
            I’m driven by a desire to blend creativity with technology —
            designing clean interfaces, writing efficient code, and delivering
            engaging digital experiences that make an impact.
          </p>
          <br></br>
          <br></br>
        </>
      ),
    },
    {
      title: "Experience",
      text: (
        <>
          <p>
            <strong>Front-End Developer </strong> at{" "}
            <span className="highlight">
              Customer Support Center, Bahria Town
            </span>
            . I developed a{" "}
            <span className="highlight">Property Verification Website</span>{" "}
            using React.js, focusing on building an intuitive and responsive
            user interface.
          </p>
          <p>
            Integrated RESTful APIs for dynamic data handling and
            synchronization, ensuring a seamless user experience. Collaborated
            with the team to enhance design, usability, and performance of the
            application.
          </p>
          <p>
            This internship provided hands-on experience in real-world React
            development and strengthened my ability to work effectively in a
            professional environment.
          </p>
        </>
      ),
    },
    {
      title: "Freelancing",
      text: (
        <>
          <p>
            As a{" "}
            <span className="highlight">Freelance Front-End Developer</span>, I
            have completed multiple{" "}
            <span className="highlight">university and client projects</span>,
            building responsive and interactive web applications.
          </p>
          <p>
            My work focused on developing clean user interfaces, integrating
            APIs, and ensuring smooth performance using{" "}
            <span className="highlight">
              React.js, JavaScript, and Material UI
            </span>
            .
          </p>
          <p>
            Freelancing strengthened my ability to work independently, manage
            project timelines, and deliver high-quality results that meet client
            expectations.
          </p>
        </>
      ),
    },

    {
      title: "Education & Final Year Project",
      text: (
        <>
          <p>
            I completed my{" "}
            <span className="highlight">BS in Software Engineering</span> from{" "}
            <span className="highlight">
              International Islamic University, Islamabad
            </span>{" "}
            (2017–2021), where I built a strong foundation in software design,
            algorithms, and web development.
          </p>
          <p>
            My <span className="highlight">Final Year Project (FYP)</span> was
            the <span className="highlight">Student Convenience App</span> — a
            web and Android platform that allowed students and teachers to
            manage academic resources, timetables, and notifications in one
            place.
          </p>
          <p>
            It included modules for event updates, result tracking, and a
            lost-and-found feature — focusing on simplicity, responsive design,
            and user experience.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="about" className="about">
      <h2 className="about-title">{content[page - 1].title}</h2>

      <div className="about-content">{content[page - 1].text}</div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={page === 1}
          style={{
            background: "#00a5b3",
            border: "2px solid #00a5b3",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "25px",
            marginRight: "10px",
            cursor: page === 1 ? "not-allowed" : "pointer",
            opacity: page === 1 ? 0.5 : 1,
            transition: "all 0.3s ease",
          }}
        >
          <NavigateBeforeSharpIcon />
        </button>
        <button
          onClick={handleNext}
          disabled={page === 4}
          style={{
            background: "#00a5b3",
            border: "none",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "25px",
            cursor: page === 4 ? "not-allowed" : "pointer",
            opacity: page === 4 ? 0.5 : 1,
            transition: "all 0.3s ease",
          }}
        >
          <NavigateNextSharpIcon />
        </button>
      </div>
      <p className="pageindicator">Page {page} of 4</p>
    </section>
  );
};

export default About;
