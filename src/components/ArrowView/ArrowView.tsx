import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import NavbarContext, { INavbar } from "../../context/NavbarContext";

enum ArrowType {
  Increment,
  Decrement,
}

export default function ArrowView() {
  const { changeNavbarIndex, selctedNavItemIndex } =
    useContext<INavbar>(NavbarContext);

  function handleArrowButtonPressed(arrowType: ArrowType): void {
    switch (arrowType) {
      case ArrowType.Decrement:
        changeNavbarIndex?.(selctedNavItemIndex - 1);
        break;
      case ArrowType.Increment:
        changeNavbarIndex?.(selctedNavItemIndex + 1);
        break;
    }
  }

  return (
    <div className="absolute z-50 flex justify-between w-full px-10 text-white top-1/2">
      <div
        className="flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-blue-500 rounded-full cursor-pointer"
        onClick={() => handleArrowButtonPressed(ArrowType.Decrement)}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="flex items-center justify-center w-10 h-10 rotate-180 -translate-y-1/2 bg-blue-500 rounded-full cursor-pointer"
        onClick={() => handleArrowButtonPressed(ArrowType.Increment)}
      >
        <AiOutlineArrowLeft />
      </div>
    </div>
  );
}
