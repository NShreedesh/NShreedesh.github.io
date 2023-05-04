import Navbar from "./components/Navbar/Navbar";
import ScrollView from "./components/ScrollView/ScrollView";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="absolute z-10 -translate-x-1/2 bottom-10 left-1/2">
        <Navbar />
      </div>
      <ScrollView />
    </div>
  );
}

export default App;
