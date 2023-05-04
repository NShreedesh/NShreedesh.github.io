import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NavbarProvider } from "./context/NavbarContext.tsx";
import { ScrollProvider } from "./context/ScrollContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScrollProvider>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </ScrollProvider>
);
