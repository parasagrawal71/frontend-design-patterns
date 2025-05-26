import React, { useEffect, useState } from "react";
import eventBus from "./eventBus";

const MessageDisplay = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleButtonClick = (data) => {
      setMessage(data.message);
    };

    eventBus.on("buttonClicked", handleButtonClick);

    return () => {
      eventBus.off("buttonClicked", handleButtonClick);
    };
  }, []);

  return <div>Message: {message}</div>;
};

export default MessageDisplay;
