import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";

export interface IGlobal {
  mode?: PaletteMode;
  setMode?: Dispatch<SetStateAction<PaletteMode>>;
}

const Global = createContext<IGlobal>({});

const Provider = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? "dark" : "light");

  return <Global.Provider value={{ mode, setMode }}>{children}</Global.Provider>;
};

export { Global, Provider as default };
