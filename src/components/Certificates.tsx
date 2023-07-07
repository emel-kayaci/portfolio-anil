import { colorSchemeProps } from "@/shared/Interfaces";
import SlidingList from "@/shared/SlidingList";

const Certificates: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  // REPLACE
  const certificates = [
    {
      id: 1,
      name: "TensorFlow Developer Certificate",
      date: "November 2022",
      description: [],
      link: "https://www.credential.net/9f6ae6de-fd2b-4f20-bf8f-f34984bf49a3#gs.2azyd6",
    },
    {
      id: 2,
      name: "Deep Learning Specialization - Coursera",
      date: "October 2022",
      description: [
        "Neural Networks and Deep Learning",
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        "Structuring Machine Learning Projects",
        "Convolutional Neural Networks",
        "Sequence Models",
      ],
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZN7NT2PV4HB7",
    },
    {
      id: 3,
      name: "DeepLearning.AI TensorFlow Developer Specialization - Coursera",
      date: "October 2022",
      description: [
        "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        "Convolutional Neural Networks in TensorFlow",
        "Natural Language Processing in TensorFlow",
        "Sequences, Time Series and Prediction",
      ],
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FTMRVP8G4J8L",
    },
  ];

  return (
    <SlidingList
      list={certificates}
      section="certificates"
      currentColorScheme={currentColorScheme}
    />
  );
};

export default Certificates;
