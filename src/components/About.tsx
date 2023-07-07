import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import ProfilePicture from "@/assets/anil-profile.jpg";
import ContactIcon from "@/shared/ContactIcon";
import { colorSchemeProps } from "@/shared/Interfaces";

const About: React.FC<colorSchemeProps> = ({ currentColorScheme }) => {
  const handleDownloadResume = () => {
    // REPLACE
    const resumeUrl =
      "https://drive.google.com/u/0/uc?id=1YFuu2UFyQMz_y_f4xJN8-wgymeLCgF2E&export=download";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      id="about"
      className={`flex min-h-screen items-center justify-center py-16 ${
        currentColorScheme === "dark"
          ? "bg-dark-secondary"
          : "bg-light-secondary"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto h-32 w-32 overflow-hidden rounded-full border-4 ${
              currentColorScheme === "dark"
                ? "border-dark-opposite"
                : "border-light-opposite"
            }`}
          >
            <img
              className="h-full w-full object-cover object-center"
              // REPLACE
              src={ProfilePicture}
              alt="Profile Picture"
            />
          </div>
          <h2
            className={`mt-4 text-3xl font-semibold ${
              currentColorScheme === "dark"
                ? "text-dark-opposite"
                : "text-light-opposite"
            }`}
          >
            Mehmet Anıl Taysi
          </h2>
          <p
            className={`mt-2 ${
              currentColorScheme === "dark"
                ? "text-dark-oDark"
                : "text-light-oLight"
            }`}
          >
            Junior Data Scientist
          </p>
          <p
            className={`mt-4 ${
              currentColorScheme === "dark"
                ? "text-dark-opposite"
                : "text-light-opposite"
            }`}
          >
            Passionate about data science, machine learning, trading and
            finance. Combining technical expertise with analytical skills for
            impactful solutions.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <ContactIcon
              currentColorScheme={currentColorScheme}
              // REPLACE
              href="https://github.com/MehmetAnil"
              Icon={FaGithub}
            />
            <ContactIcon
              currentColorScheme={currentColorScheme}
              // REPLACE
              href="https://www.linkedin.com/in/mehmetaniltaysi/"
              Icon={FaLinkedin}
            />
            <ContactIcon
              currentColorScheme={currentColorScheme}
              // REPLACE
              href="mailto:mehmetaniltaysi@gmail.com"
              Icon={FaEnvelope}
            />
          </div>
          <button
            onClick={handleDownloadResume}
            className={
              "mt-16 rounded-md bg-dark-primary px-4 py-2 text-white hover:bg-dark-pLight"
            }
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
