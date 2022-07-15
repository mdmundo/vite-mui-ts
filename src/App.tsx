import { Container } from "@mui/material";
import Basic from "./Basic";
import Counter from "./Counter";
import Secret from "./Secret";
import Toggle from "./Toggle";
import Typing from "./Typing";

function App() {
  return (
    <Container maxWidth="sm">
      <Basic children={<Counter />} />
      <Basic children={<Secret />} />
      <Basic children={<Typing />} />
      <Basic children={<Toggle />} />
    </Container>
  );
}

export default App;
