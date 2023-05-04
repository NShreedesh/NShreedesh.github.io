import About from "../../Pages/About";
import Home from "../../Pages/Home";

function ScrollView() {
  return (
    <div className="flex h-full overflow-hidden">
      <Home />
      <About />
    </div>
  );
}

export default ScrollView;
