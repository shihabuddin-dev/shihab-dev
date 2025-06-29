const Button = ({
  children,
  type = "button",
  onClick = () => { },
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "border-2 border-primary px-3 md:px-4 py-1.5 rounded-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/60 ";

  if (variant === "primary") {
    styles += " bg-primary hover:text-white";
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
