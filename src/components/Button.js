import React from "react";

function Button({
  title,
  varient = "contained",
  color = "primary",
  type = "button",
    onClick,
}) {
  let className = "w-100 ";
  if (varient === "contained") {
    className += "bg-" + color + " text-white";
  } else if (varient === "outliened") {
    className += "border-" + color + " text-" + color;
  }

  return (
    <button className={className} type={type} onClick = {onClick}>
      {title}
    </button>
  );
}

export default Button;
