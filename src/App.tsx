import { Container } from "@mui/material";
import Basic from "./Basic";
import Counter from "./Counter";
import Secret from "./Secret";
import Typing from "./Typing";

function App() {
  return (
    <Container maxWidth="sm">
      <Basic children={<Counter />} />
      <Basic children={<Secret />} />
      <Basic children={<Typing />} />
    </Container>
  );
}

export default App;
