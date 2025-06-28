import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => { },
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "border-2 border-primary px-4 py-1.5 rounded-md transition duration-300 ";

  if (variant === "primary") {
    styles += "bg-primary hover:bg-transparent";
  } else if (variant === "outline") {
    styles += "hover:bg-primary";
  } else {
    styles += "bg-gray-200 text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
