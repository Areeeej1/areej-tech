import "./App.css";

import { Box } from "@mui/material";
import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("./component/Navbar"));
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Skill = lazy(() => import("./component/Skill"));
const Project = lazy(() => import("./component/Project"));
const Contact = lazy(() => import("./component/Contact"));
const Footer = lazy(() => import("./component/Footer"));

function App() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #2b3a5a 0%, #3e5a80 100%)",
          }}
        >
          <div className="dot-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Box>
      }
    >
      <div className="App fade-in">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
