import { navbarData } from "../../Data/navbarData";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="absolute bottom-5 flex items-center justify-center gap-5 min-w-[100vw] min-h-[100px] z-10">
      {navbarData.map((data, index) => {
        return (
          <NavbarItem key={index} image={data.image} navbarItemIndex={index} />
        );
      })}
    </div>
  );
}

export default Navbar;
