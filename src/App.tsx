import ArrowView from "./components/ArrowView/ArrowView";
import Navbar from "./components/Navbar/Navbar";
import ScrollView from "./components/ScrollView/ScrollView";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <ArrowView />
      <ScrollView />
    </div>
  );
}

export default App;
