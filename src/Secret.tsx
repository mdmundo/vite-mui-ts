import { Alert, Button, Grid, Snackbar, AlertColor, SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

interface TextColor {
  color: AlertColor;
  text: string;
}

const texts: Array<TextColor> = [
  { color: "success", text: "sucesso" },
  { color: "warning", text: "aviso" },
  { color: "error", text: "erro" },
  { color: "info", text: "informação" },
];

const Secret = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState(texts[0]);
  const close = (e: any, r: SnackbarCloseReason) => {
    if (r !== "clickaway") {
      // https://mui.com/material-ui/api/snackbar/#props
      setActive(false);
    }
  };
  const open = (index: number) => {
    if (!active) {
      setText(texts[index]);
      setActive(true);
    }
  };

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center">
      <Snackbar open={active} autoHideDuration={1500} onClose={close}>
        <Alert severity={text.color}>{`Mensagem de ${text.text}!`}</Alert>
      </Snackbar>
      <Button
        variant="text"
        color="success"
        onClick={() => {
          open(0);
        }}
      >
        Sucesso
      </Button>
      <Button
        variant="text"
        color="warning"
        onClick={() => {
          open(1);
        }}
      >
        Aviso
      </Button>
      <Button
        variant="text"
        color="error"
        onClick={() => {
          open(2);
        }}
      >
        Erro
      </Button>
      <Button
        variant="text"
        color="info"
        onClick={() => {
          open(3);
        }}
      >
        Info
      </Button>
    </Grid>
  );
};

export default Secret;
