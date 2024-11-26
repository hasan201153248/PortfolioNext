import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

interface MagicButtonProps {
  title: string; // Added title to hold the text of the button
  handleClick?: () => void; // Optional click handler
  otherClasses?: string;
  position?: "left" | "right";
  icon?: React.ReactNode; // Optional additional CSS classes
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  handleClick,
  otherClasses,
  position,
  icon,
}) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 focus:ring-2  ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
