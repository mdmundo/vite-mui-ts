import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Global } from "./Global";

const Toggle = () => {
  const { mode, setMode } = useContext(Global);

  return (
    <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
      <IconButton
        onClick={() => {
          if (setMode && mode) {
            setMode(mode !== "light" ? "light" : "dark");
          }
        }}
        children={mode === "light" ? <LightMode /> : <DarkMode />}
      />
      <Typography variant="body1" children="Alternar a cor do tema entre claro e escuro." />
    </Grid>
  );
};

export default Toggle;