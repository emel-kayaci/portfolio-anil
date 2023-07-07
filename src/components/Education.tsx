import React from "react";
import { colorSchemeProps } from "@/shared/Interfaces";
import SlidingList from "@/shared/SlidingList";

const Education: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  // REPLACE
  const education = [
    {
      id: 1,
      name: "Ege University",
      date: "2017 - 2022",
      description: [
        "Bachelor of Science in Computer Engineering",
        "GPA: 3.64/4.00",
      ],
    },
  ];

  return (
    <SlidingList
      list={education}
      section="education"
      currentColorScheme={currentColorScheme}
    />
  );
};

export default Education;
