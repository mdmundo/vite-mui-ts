import { Container, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const Basic = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Paper elevation={24} sx={{ p: 2 }}>
        {children}
      </Paper>
    </Container>
  );
};

export default Basic;
