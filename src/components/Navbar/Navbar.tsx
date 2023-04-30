import { navbarData } from "../../Data/navbarData";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex items-center gap-3">
      {navbarData.map((data, index) => {
        return (
          <NavbarItem key={index} image={data.image} navbarItemIndex={index} />
        );
      })}
    </div>
  );
}

export default Navbar;
