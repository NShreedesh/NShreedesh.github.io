import LeftNavbar from "./components/LeftNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";
import DarkModeToggle from "./components/DarkModeToggle";
import TopNavbar from "./components/TopNavbar";
import NavbarContextProvider from "./context/NavbarContext";
import { useDarkModeContext } from "./context/DarkModeContext";

function App() {
  const { isDarkModeActive } = useDarkModeContext();

  return (
    <NavbarContextProvider>
      <div className={`flex ${isDarkModeActive && "dark"}`}>
        <LeftNavbar />
        <TopNavbar />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </NavbarContextProvider>
  );
}

export default App;
