import React, { createContext } from "react";

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
