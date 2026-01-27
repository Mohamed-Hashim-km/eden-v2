import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-2 transition-all duration-300 font-sans cursor-pointer";

  const variants = {
    primary: "bg-white text-[#001446] hover:bg-gray-100", // White button, dark text (as per image)
    outline: "border border-[#FAF5EB] text-[#FAF5EB] hover:bg-[#FAF5EB] hover:text-[#001446]",
    ghost: "text-[#FAF5EB] hover:text-white bg-transparent",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
