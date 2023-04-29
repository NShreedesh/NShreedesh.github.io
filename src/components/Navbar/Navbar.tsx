import { useState } from "react";
import { navbarData } from "../../Data/navbarData";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const [selectedNavbar, selectedNavbarItem] = useState<number>(0);
  return (
    <div className="flex items-center gap-3">
      {navbarData.map((data, index) => {
        return (
          <NavbarItem
            key={index}
            image={data.image}
            isSelectedNavbar={selectedNavbar === index}
            navbarItemIndex={index}
            setSelectedNavbarItem={selectedNavbarItem}
          />
        );
      })}
    </div>
  );
}

export default Navbar;
