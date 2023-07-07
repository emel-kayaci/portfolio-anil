import { darkThemeNavbarButton, lightThemeNavbarButton } from "@/design/Colors";
import Navlink from "@/shared/Navlink";
import ResponsiveMenuNavlink from "@/shared/ResponsiveMenuNavlink";
import React, { useState, createContext, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

interface ThemeContextType {
  currentColorScheme: string;
  toggleDarkMode: () => void;
}

const initialContext: ThemeContextType = {
  currentColorScheme: "light",
  toggleDarkMode: () => {},
};

interface NavbarProps {
  currentColorScheme: string;
  toggleDarkMode: () => void;
}
const ThemeContext = createContext<ThemeContextType>(initialContext);

const Navbar: React.FC<NavbarProps> = ({
  currentColorScheme,
  toggleDarkMode,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollTop === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <ThemeContext.Provider value={{ currentColorScheme, toggleDarkMode }}>
      <nav
        className={`${
          currentColorScheme === "dark" ? `bg-dark-primary` : `bg-light-primary`
        } sticky top-0 z-50 ${hasScrolled ? "shadow-md" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  onClick={toggleDarkMode}
                  className="ml-4 focus:outline-none"
                >
                  {currentColorScheme === "dark" ? (
                    <FaMoon className="text-white" />
                  ) : (
                    <FaSun className=" text-gray-800" />
                  )}
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={
                  currentColorScheme == "dark"
                    ? darkThemeNavbarButton
                    : lightThemeNavbarButton
                }
              >
                <AiOutlineMenu />
              </button>
            </div>
            <div className="mx-auto hidden items-center md:flex">
              <div className="flex items-baseline space-x-4">
                <Navlink
                  currentColorScheme={currentColorScheme}
                  section="about"
                />
                <Navlink
                  currentColorScheme={currentColorScheme}
                  section="qualification"
                />
                <Navlink
                  currentColorScheme={currentColorScheme}
                  section="projects"
                />
                <Navlink
                  currentColorScheme={currentColorScheme}
                  section="skills"
                />
              </div>
            </div>
          </div>
          {/* Responsive Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <ResponsiveMenuNavlink
                  currentColorScheme={currentColorScheme}
                  section="about"
                  onClick={closeMenu}
                />
                <ResponsiveMenuNavlink
                  currentColorScheme={currentColorScheme}
                  section="qualification"
                  onClick={closeMenu}
                />
                <ResponsiveMenuNavlink
                  currentColorScheme={currentColorScheme}
                  section="projects"
                  onClick={closeMenu}
                />
                <ResponsiveMenuNavlink
                  currentColorScheme={currentColorScheme}
                  section="skills"
                  onClick={closeMenu}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </ThemeContext.Provider>
  );
};

export { Navbar, ThemeContext };
