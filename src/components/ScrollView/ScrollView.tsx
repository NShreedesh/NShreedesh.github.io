import About from "../../Pages/About";
import Home from "../../Pages/Home";
import MyGame from "../../Pages/MyGame";

function ScrollView() {
  return (
    <div className="flex h-full overflow-x-hidden">
      <About />
      <Home />
      <MyGame />
    </div>
  );
}

export default ScrollView;
