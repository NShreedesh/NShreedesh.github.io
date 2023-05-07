import { useState } from "react";
import ArrowView from "./components/ArrowView/ArrowView";
import Navbar from "./components/Navbar/Navbar";
import ScrollView from "./components/ScrollView/ScrollView";

function App() {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

  function handleClick(isGrabbing: boolean): void {
    setIsGrabbing(isGrabbing);
  }

  return (
    <div
      className={`w-screen h-screen ${isGrabbing && "cursor-grabbing"}`}
      onMouseDown={() => handleClick(true)}
      onMouseUp={() => handleClick(false)}
    >
      <Navbar />
      <ArrowView />
      <ScrollView />
    </div>
  );
}

export default App;
