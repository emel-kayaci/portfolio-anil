import React, { useState } from "react";
import { FaGraduationCap, FaSuitcase, FaLink } from "react-icons/fa";
import Experience from "./Experience";
import Education from "./Education";
import Certificates from "./Certificates";
import { colorSchemeProps } from "@/shared/Interfaces";
import ButtonWithIcon from "@/shared/ButtonWithIcon";

const Qualification: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  const [activeSection, setActiveSection] = useState("experience");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section
      id="qualification"
      className={`py-32 ${
        currentColorScheme === "dark" ? "bg-dark-sLight" : "bg-light-sDark"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center">
          <ButtonWithIcon
            onClick={() => handleClick("experience")}
            active={activeSection === "experience"}
            icon={FaSuitcase}
            label="Experience"
          />
          <ButtonWithIcon
            onClick={() => handleClick("education")}
            active={activeSection === "education"}
            icon={FaGraduationCap}
            label="Education"
          />
          <ButtonWithIcon
            onClick={() => handleClick("certificates")}
            active={activeSection === "certificates"}
            icon={FaLink}
            label="Certificates"
          />
        </div>
        {activeSection === "experience" && (
          <Experience currentColorScheme={currentColorScheme} />
        )}
        {activeSection === "education" && (
          <Education currentColorScheme={currentColorScheme} />
        )}
        {activeSection === "certificates" && (
          <Certificates currentColorScheme={currentColorScheme} />
        )}
      </div>
    </section>
  );
};

export default Qualification;
