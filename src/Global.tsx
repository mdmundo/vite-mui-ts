import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export interface IGlobal {
  toggle?: boolean;
  setToggle?: Dispatch<SetStateAction<boolean>>;
}

const Global = createContext<IGlobal>({});

const Provider = ({ children }: PropsWithChildren) => {
  const [toggle, setToggle] = useState(false);
  return <Global.Provider value={{ toggle, setToggle }}>{children}</Global.Provider>;
};

export { Global, Provider as default };
