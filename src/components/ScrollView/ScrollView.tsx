import About from "../../Pages/About";
import Home from "../../Pages/Home";

function ScrollView() {
  function onMousePressed(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.scrollLeft += 1000;
  }

  return (
    <div
      className="flex h-full overflow-y-hidden transition-all duration-500"
      onMouseDown={onMousePressed}
    >
      <Home />
      <About />
    </div>
  );
}

export default ScrollView;
