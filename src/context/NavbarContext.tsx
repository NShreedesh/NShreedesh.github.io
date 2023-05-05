import React, { createContext } from "react";
import { navbarData } from "../Data/navbarData";

export interface INavbar {
  selctedNavItemIndex: number;
  changeNavbarIndex?: (index: number) => void;
}

const NavbarContext = createContext<INavbar>({
  selctedNavItemIndex: 0,
});

export function NavbarProvider({ children }: any) {
  const [navbarIndex, setNavbarIndex] = React.useState<number>(0);

  const changeNavbarIndex = (index: number) => {
    if (index < 0) return;
    if (index > navbarData.length - 1) return;
    return setNavbarIndex(index);
  };
  return (
    <NavbarContext.Provider
      value={{
        selctedNavItemIndex: navbarIndex,
        changeNavbarIndex: changeNavbarIndex,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
