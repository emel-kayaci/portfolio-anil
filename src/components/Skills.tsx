import { colorSchemeProps } from "@/shared/Interfaces";
import React from "react";
import { FaChevronUp } from "react-icons/fa";

const SkillItem: React.FC<{ name: string }> = ({ name }) => (
  <div
    className={
      "m-1 flex items-center justify-center rounded-md bg-dark-primary p-2 "
    }
  >
    <span className="text-dark-oLight">{name}</span>
  </div>
);

const SkillList: React.FC<{
  list: string[];
  title: string;
  currentColorScheme: string;
}> = ({ list, title, currentColorScheme }) => (
  <div className="flex flex-wrap justify-center">
    <div className="w-full text-center">
      <h3
        className={`mb-2 mt-4 text-lg font-semibold ${
          currentColorScheme === "dark"
            ? "text-dark-oLight"
            : "text-light-opposite"
        }`}
      >
        {title}
      </h3>
    </div>
    {list.map((list, index) => (
      <SkillItem key={index} name={list} />
    ))}
  </div>
);

const Skills: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  // REPLACE
  const languages = ["C++", "C#", "Python", "Java"];

  const databases = ["MySQL", "Oracle", "SQLite"];

  const technologiesAndTools = [
    "NumPy",
    "Pandas",
    "TensorFlow",
    "scikit-learn",
    "HuggingFace",
    "PyTorch",
    "Keras",
    "Transformers",
    "Dask",
    "Ultralytics",
    "Seaborn",
    "Git",
    "Docker",
    "OpenCV",
    "EigenLib",
    "HLS",
  ];

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="skills"
      className={`flex items-center justify-center py-32 ${
        currentColorScheme === "dark" ? "bg-dark-sLight" : "bg-light-sDark"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`flex items-center justify-center text-3xl font-semibold ${
            currentColorScheme === "dark"
              ? "text-dark-oLight"
              : "text-light-opposite"
          }`}
        >
          Skills
        </h2>
        <div className="mt-8">
          <SkillList
            list={languages}
            title="Languages"
            currentColorScheme={currentColorScheme}
          />
          <SkillList
            list={technologiesAndTools}
            title="Technologies and Tools"
            currentColorScheme={currentColorScheme}
          />
          <SkillList
            list={databases}
            title="Databases"
            currentColorScheme={currentColorScheme}
          />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <button
            onClick={handleScrollUp}
            className={`text-3xl text-dark-primary transition-colors duration-300 hover:text-dark-pLight ${
              currentColorScheme === "dark"
                ? "text-dark-opposite"
                : "text-light-opposite"
            }`}
          >
            <FaChevronUp />
          </button>
          <p className={"mt-2 text-sm text-dark-pDark"}>Scroll Up</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
