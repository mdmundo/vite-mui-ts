import { Container, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

const Basic = ({ children }: PropsWithChildren) => {
  return (
    <Paper elevation={24} sx={{ p: 2, my: 3 }}>
      {children}
    </Paper>
  );
};

export default Basic;
