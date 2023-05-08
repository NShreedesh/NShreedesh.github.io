import { useContext, useState } from "react";
import ArrowView from "./components/ArrowView/ArrowView";
import Navbar from "./components/Navbar/Navbar";
import ScrollView from "./components/ScrollView/ScrollView";
import { INavbar } from "./context/NavbarContext";
import NavbarContext from "./context/NavbarContext";
import RandomCircle from "./components/RandomCircle/RandomCircle";

let dragStartPosition: number = 0;
let dragEndPosition: number = 0;

function App() {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const { selctedNavItemIndex, changeNavbarIndex } =
    useContext<INavbar>(NavbarContext);

  function handleMouseDown(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isGrabbing: boolean
  ): void {
    dragStartPosition = e.clientX;
    setIsGrabbing(isGrabbing);
  }

  function handleMouseUp(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isGrabbing: boolean
  ) {
    dragEndPosition = e.clientX;
    if (dragEndPosition - dragStartPosition > 0) {
      changeNavbarIndex?.(selctedNavItemIndex - 1);
    } else if (dragEndPosition - dragStartPosition < 0) {
      changeNavbarIndex?.(selctedNavItemIndex + 1);
    }
    dragStartPosition = dragEndPosition;

    setIsGrabbing(isGrabbing);
  }

  return (
    <div
      className={`w-screen h-screen ${isGrabbing && "cursor-grabbing"}`}
      onMouseDown={(e) => handleMouseDown(e, true)}
      onMouseUp={(e) => handleMouseUp(e, false)}
    >
      <RandomCircle />
      <Navbar />
      <ArrowView />
      <ScrollView />
    </div>
  );
}

export default App;
