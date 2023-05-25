import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import DarkMode from '@mui/icons-material/DarkModeRounded';
import LightMode from '@mui/icons-material/LightModeRounded';

export default function ModeToggle() {
  let { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Button size="sm" variant="plain"></Button>;

  if (systemMode) mode = systemMode;

  return (
    <Button
      size="sm"
      variant="plain"
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {
        mode === 'dark'
        ? <LightMode />
        : <DarkMode />
      }
    </Button>
  );
};
