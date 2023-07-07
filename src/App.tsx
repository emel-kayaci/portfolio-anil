import { useState } from "react";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentColorScheme = darkMode ? "dark" : "light";
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        currentColorScheme={currentColorScheme}
        toggleDarkMode={toggleDarkMode}
      />
      <About currentColorScheme={currentColorScheme} />
      <Qualification currentColorScheme={currentColorScheme} />
      <Projects currentColorScheme={currentColorScheme} />
      <Skills currentColorScheme={currentColorScheme} />
    </div>
  );
};

export default App;
