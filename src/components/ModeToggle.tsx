import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import DarkMode from '@mui/icons-material/DarkModeRounded';
import LightMode from '@mui/icons-material/LightModeRounded';

export default function ModeToggle() {
  let { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  if (systemMode) mode = systemMode;

  return (
    <Button
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{
        display: "block",
        width: 50,
        height: 50,
        position: 'absolute',
        top: 0,
        right: 0,
        padding: "0 0 10px 10px",
        borderRadius: "0 0 0 100%",
      }}
    >
      {
        mode === 'dark'
        ? <LightMode />
        : <DarkMode />
      }
    </Button>
  );
};
