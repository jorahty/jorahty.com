import Button from "@mui/joy/Button";
import { useState } from "react";

export default function Email() {
  const [visible, setVisible] = useState(false);
  
  return (
    <Button
      color={!visible ? undefined : "success"}
      onClick={() => setVisible(!visible)}
      sx={!visible ? undefined : {
        unicodeBidi: 'bidi-override',
        direction: 'rtl',
        userSelect: 'none',
      }}
    >
      ude.cscu@tnannetj
    </Button>
  );
}