import LeftNavbar from "./components/LeftNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import DarkModeToggle from "./components/DarkModeToggle";
import TopNavbar from "./components/TopNavbar";
import NavbarContextProvider from "./context/NavbarContext";
import { useDarkModeContext } from "./context/DarkModeContext";

function App() {
  const { isDarkModeActive } = useDarkModeContext();

  console.log(isDarkModeActive);

  return (
    <NavbarContextProvider>
      <div className={`flex ${isDarkModeActive && "dark"}`}>
        <LeftNavbar />
        <TopNavbar />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </NavbarContextProvider>
  );
}

export default App;
