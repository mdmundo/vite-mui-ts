import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { PropsWithChildren, useContext, useMemo } from "react";
import { Global } from "./Global";

const Theme = ({ children }: PropsWithChildren) => {
  const { mode } = useContext(Global);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
