import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Basic from "./Basic";
import Counter from "./Counter";
import Secret from "./Secret";
import Typing from "./Typing";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Basic children={<Counter />} />
      <Basic children={<Secret />} />
      <Basic>
        <Typing />
      </Basic>
    </ThemeProvider>
  );
}

export default App;
