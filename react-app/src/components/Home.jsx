// Home.js
import React from "react";
import ObserverPatternMain from "../observer-pattern/ObserverPatternMain";

function Home() {
  return (
    <main>
      <div>Welcome to the Home page!</div>

      {/* Observer Pattern */}
      <ObserverPatternMain />
    </main>
  );
}

export default Home;
