import { darkThemeIcon, lightThemeIcon } from "@/design/Colors";
import { IconType } from "react-icons/lib";

interface ContactIconProps {
  currentColorScheme: string;
  href: string;
  Icon: IconType;
}

const ContactIcon: React.FC<ContactIconProps> = ({
  currentColorScheme,
  href,
  Icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={currentColorScheme === "dark" ? darkThemeIcon : lightThemeIcon}
    >
      <Icon size={24} />
    </a>
  );
};

export default ContactIcon;
