import React from "react";
import { darkThemeNavbarButton, lightThemeNavbarButton } from "@/design/Colors";

interface NavLinkProps {
  currentColorScheme: string;
  section: string;
  onClick?: () => void;
}

const ResponsiveMenuNavlink: React.FC<NavLinkProps> = ({
  currentColorScheme,
  section,
  onClick,
}) => {
  return (
    <a
      href={`#` + section}
      onClick={onClick}
      className={`block ${
        currentColorScheme === "dark"
          ? darkThemeNavbarButton
          : lightThemeNavbarButton
      }`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
  );
};

export default ResponsiveMenuNavlink;
