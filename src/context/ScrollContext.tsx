import { createContext, useState } from "react";

export interface IScroll {
  scrollValue: number;
  changeScrollValue?: (value: number) => void;
}

const ScrollContext = createContext<IScroll>({
  scrollValue: 0,
});

export function ScrollProvider({ children }: any) {
  const [scrollValue, setScrollValue] = useState<number>(0);

  const changeScrollValue = (value: number) => {
    return setScrollValue(value);
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollValue: scrollValue,
        changeScrollValue: changeScrollValue,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollContext;
