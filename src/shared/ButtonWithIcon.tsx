import { activeButton } from "@/design/Colors";
import React from "react";
import { IconType } from "react-icons";

interface ButtonWithIconProps {
  onClick: () => void;
  active: boolean;
  icon: IconType;
  label: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  onClick,
  active,
  icon: Icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`mr-4 flex items-center rounded-full p-2 ${
        active && activeButton
      }`}
    >
      <Icon className="mr-2 text-xl text-light-opposite" />
      <span className="text-light-opposite">{label}</span>
    </button>
  );
};

export default ButtonWithIcon;
