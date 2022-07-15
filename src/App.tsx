import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Basic from "./Basic";
import Counter from "./Counter";
import Secret from "./Secret";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Basic children={<Counter />} />
      <Basic children={<Secret />} />
    </ThemeProvider>
  );
}

export default App;
