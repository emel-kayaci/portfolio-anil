import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

interface ListItems {
  id: number;
  name: string;
  date: string;
  technologies?: string;
  description: string[];
  link?: string;
}

interface SlidingListProps {
  list: ListItems[];
  section: string;
  currentColorScheme: string;
}

const SlidingList: React.FC<SlidingListProps> = ({
  list,
  section,
  currentColorScheme,
}) => {
  return (
    <section
      id={section}
      className={`py-4 ${
        currentColorScheme === "dark" ? "bg-dark-sLight" : "bg-light-sDark"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex justify-center">
          <div className="w-full max-w-md">
            {list.map((item, index) => (
              <motion.div
                key={item.id}
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.4 }}
              >
                <div className="flex items-center">
                  <h3
                    className={`text-lg font-semibold ${
                      currentColorScheme === "dark"
                        ? "text-dark-oLight"
                        : "text-light-opposite"
                    }`}
                  >
                    {item.name}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      <FaLink />
                    </a>
                  )}
                </div>
                <p
                  className={`mb2 mt-2 ${
                    currentColorScheme === "dark"
                      ? "text-dark-oDark"
                      : "text-light-oLight"
                  }`}
                >
                  {item.date}
                </p>
                {item.technologies && (
                  <div className="mt-4 flex items-baseline">
                    <h3
                      className={`text-md ${
                        currentColorScheme === "dark"
                          ? "text-dark-oLight"
                          : "text-light-opposite"
                      }`}
                    >
                      <span className="font-semibold">Technologies:</span>{" "}
                      <span>{item.technologies}</span>
                    </h3>
                  </div>
                )}
                <ul className="ml-6 mt-2 list-disc">
                  {item.description.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className={`mb2 mt-4 ${
                        currentColorScheme === "dark"
                          ? "text-dark-oLight"
                          : "text-light-opposite"
                      }`}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                {section != "certificates" && index !== list.length - 1 && (
                  <motion.div
                    className={`mx-auto mt-4 h-12 w-1 ${
                      currentColorScheme === "dark"
                        ? "bg-dark-oLight"
                        : "bg-light-opposite"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1 + index * 0.4,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingList;
