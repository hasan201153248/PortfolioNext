import React from "react";

interface MagicButtonProps {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
  position?: "left" | "right";
  icon?: React.ReactNode;  // Optional icon prop to pass any icon
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  handleClick,
  otherClasses,
  position,
  icon, // Icon prop
}) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 focus:ring-2 ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
        {position === "left" && icon} {/* Show the passed icon on the left */}
        {title}
        {position === "right" && icon} {/* Show the passed icon on the right */}
      </span>
    </button>
  );
};

export default MagicButton;
