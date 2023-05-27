import { createContext, useContext, useEffect, useState } from "react";
import IDarkMode from "../interfaces/IDarkMode";

const DarkModeContext = createContext<IDarkMode>({
  isDarkModeActive: false,
  toggleDarkModeActive: () => {},
});

export const useDarkModeContext = () => useContext(DarkModeContext);

const DarkModeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);

  useEffect(() => {
    const isDarkModeActive: boolean =
      localStorage.getItem("dark") == "true" ? true : false;
    setIsDarkModeActive(isDarkModeActive);
  }, []);

  function toggleDarkModeActive(isDarkModeActive: boolean) {
    setIsDarkModeActive(isDarkModeActive);
    localStorage.setItem("dark", isDarkModeActive.toString());
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
