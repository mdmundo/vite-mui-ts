import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from "react";
import { createTheme, PaletteMode, Theme, useMediaQuery } from "@mui/material";

export interface IGlobal {
  theme?: Theme;
  mode?: PaletteMode;
  setMode?: Dispatch<SetStateAction<PaletteMode>>;
}

const Global = createContext<IGlobal>({});

const Provider = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? "dark" : "light");
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return <Global.Provider value={{ theme, mode, setMode }}>{children}</Global.Provider>;
};

export { Global, Provider as default };
