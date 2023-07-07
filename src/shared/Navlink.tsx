import React from "react";
import { darkThemeNavbarButton, lightThemeNavbarButton } from "@/design/Colors";
interface NavLinkProps {
  currentColorScheme: string;
  section: string;
}

const Navlink: React.FC<NavLinkProps> = ({ currentColorScheme, section }) => {
  return (
    <a
      href={`#` + section}
      className={
        currentColorScheme === "dark"
          ? darkThemeNavbarButton
          : lightThemeNavbarButton
      }
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
  );
};

export default Navlink;
