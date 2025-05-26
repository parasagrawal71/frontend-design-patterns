import React from "react";
import Button from "./Button";
import MessageDisplay from "./MessageDisplay";

export default function ObserverPatternMain() {
  return (
    <div className="box">
      <h4 style={{ marginTop: 0 }}>Observer Pattern:</h4>
      <Button />
      <MessageDisplay />
    </div>
  );
}
