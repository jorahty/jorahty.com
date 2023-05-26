import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from "react";

export default function Projects() {
  const { mode, systemMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Box>
      <Button>
        Hello, Projects!
      </Button>
      <Button>
        mode: {mode}
      </Button>
      <Button>
        systemMode: {systemMode}
      </Button>
    </Box>
  );
}