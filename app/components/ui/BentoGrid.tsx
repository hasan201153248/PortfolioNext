import React from "react";
import { cn } from "@/utils/cn"; // Ensure this path is correct or adjust accordingly

// BentoGrid Component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[8rem] grid-cols-2 md:grid-cols-2 gap-2 max-w-7xl mx-auto",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 86%, rgba(0,212,255,1) 100%)",
      }}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header && <div>{header}</div>}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && <div>{icon}</div>}
        {title && (
          <div
            className={cn(
              "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
              titleClassName
            )}
          >
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        )}
        {/* Image rendering logic */}
        <div className="relative w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
