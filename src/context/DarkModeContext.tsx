import { createContext, useContext, useState } from "react";
import IDarkMode from "../interfaces/IDarkMode";

const DarkModeContext = createContext<IDarkMode>({
  isDarkModeActive: false,
  toggleDarkModeActive: () => {},
});

export const useDarkModeContext = () => useContext(DarkModeContext);

const DarkModeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  function toggleDarkModeActive(isDarkModeActive: boolean) {
    setIsDarkModeActive(isDarkModeActive);
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkModeActive,
        toggleDarkModeActive,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
