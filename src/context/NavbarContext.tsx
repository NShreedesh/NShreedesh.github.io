import { createContext, useContext, useState } from "react";
import INavbar from "../interfaces/INavbar";

const NavbarContext = createContext<INavbar>({
  isNavbarActive: false,
});

export const useNavbarContext = () => useContext(NavbarContext);

const NavbarContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(true);

  function toggleNavbarState(isNavbarActive: boolean) {
    setIsNavbarActive(isNavbarActive);
  }

  return (
    <NavbarContext.Provider
      value={{
        isNavbarActive,
        toggleNavbarState,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
