import { useTheme } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import { ColorModeContext } from '../pages/_app';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeToggle() {
  const toggleColorMode = useContext(ColorModeContext);
  const { palette: {mode} } = useTheme();

  const backgroundColor =      mode === 'light' ? '#0088ff' : '#0088ff';
  const textColor =            mode === 'light' ? '#ffffff' : '#000000';
  const hoverBackgroundColor = mode === 'light' ? '#000000' : '#ffffff';
  const hoverTextColor =       mode === 'light' ? '#ffffff' : '#000000';

  return (
    <Button
      onClick={toggleColorMode}
      variant="contained"
      disableElevation
      sx={{
        background: backgroundColor,
        color: textColor,
        p: 1,
        minWidth: 'unset',
        borderRadius: '50%',
        boxShadow: [
          '0 0 0 10px transparent',
          '0 0 0 14px transparent',
        ].join(),
        transition: [
          'box-shadow 0.3s cubic-bezier(.18,1.6,.39,1.7)',
          'scale 0.2s cubic-bezier(.18,1.6,.39,1.7)',
        ].join(),
        '&:hover': {
          boxShadow: [
            `0 0 0 3px ${textColor}`,
            `0 0 0 6px ${hoverBackgroundColor}`,
          ].join(),
          background: hoverBackgroundColor,
          color: hoverTextColor,
          scale: '1.1',
        },
      }}
    >
      { mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
    </Button>
  );
}
