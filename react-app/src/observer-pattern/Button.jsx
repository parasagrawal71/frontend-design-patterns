import React from "react";
import eventBus from "./eventBus";

const Button = () => {
  const handleClick = () => {
    eventBus.emit("buttonClicked", { message: "Button was clicked!" });
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
