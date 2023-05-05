import About from "../../Pages/About";
import Home from "../../Pages/Home";

function ScrollView() {
  return (
    <div className="flex h-full overflow-x-hidden">
      <About />
      <Home />
    </div>
  );
}

export default ScrollView;
