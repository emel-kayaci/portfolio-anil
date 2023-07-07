import React from "react";
import { motion } from "framer-motion";
import { colorSchemeProps } from "@/shared/Interfaces";
import SlidingList from "@/shared/SlidingList";

const Experience: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  // REPLACE
  const experiences = [
    {
      id: 1,
      name: "Organon Analytics - Software Engineer",
      date: "Aug 2022 - Apr 2023",
      technologies:
        "Python, NumPy, Pandas, Dask, sklearn, HuggingFace, Transformers, TensorFlow, Oracle DB, C#, Linq, Ultralytics, PyTorch",
      description: [
        "Worked on a AutoML product that has many tools such as Automated Feature Extraction, Data Quality, Machine Learning. ",
        "Dealed with challenging optimization problems that encapsulates both memory allocation and run-time optimization generally for pandas dataframes, and some scientific computations.",
        "Developed several modules in Python using Dask and Cython.",
        "Developed end-to-end Text Classification module with console and unit tests, prioritizing 'clean code' principles for optimal functionality.",
        "Participated at a Forecasting product for customers to predict features from a Time-Series based tables. Implemented some queries as validation queries of our database tables.",
        "Wrote Text Classication and Object Detection services, and also participated in analysis phase supporting Data Science team.",
      ],
    },
    {
      id: 2,
      name: "Opsin Electro Optical Systems - Long Term Computer Vision Intern",
      date: "Mar 2022 - Jun 2022",
      technologies: "C++, OpenCV, EigenLib, HLS",
      description: [
        "KCF Tracker for real-time object tracking, Autofocus mechanism and algorithms for thermal cameras.",
      ],
    },
    {
      id: 3,
      name: "Opsin Electro Optical Systems - Computer Vision Intern",
      date: "Sep 2021",
      description: [
        "Participated a Real Time Object Detection project as a computer vision intern, gained experience in several fields such as MOSSE algorithm, Kalman Filter, Image filtering for Tracking systems, Image preprocessing for getting better accuracy on Real Time Object Tracking systems.",
      ],
    },
  ];

  return (
    <SlidingList
      list={experiences}
      section="experience"
      currentColorScheme={currentColorScheme}
    />
  );
};

export default Experience;
