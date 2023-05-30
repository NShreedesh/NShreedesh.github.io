import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DarkModeContextProvider from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DarkModeContextProvider>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </DarkModeContextProvider>
);
