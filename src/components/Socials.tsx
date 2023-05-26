import Stack from "@mui/joy/Stack";
import Tooltip from "@mui/joy/Tooltip";
import Link from "@mui/joy/Link";
import Image from "next/image";
import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from "react";

const socials = {
  YouTube: 'https://youtube.com/@jorahty', 
  Twitter: 'https://twitter.com/jorahty', 
  LinkedIn: 'https://linkedin.com/in/jorahty', 
  GitHub: 'https://github.com/jorahty', 
  Instagram: 'https://instagram.com/jorahty',
};

export default function Socials() {
  const { mode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Stack direction="row">
      {Object.entries(socials).map(([k, v]) => (
        <Tooltip key={k} title={k} placement="top">
          <Link href={v}>
            {false ? (<></>) : <Image
              src={`/socials/${k}.svg`}
              width={30}
              height={30}
              alt={k}
              style={
                (k === 'GitHub' && mode === 'dark' && mounted) ? {
                  filter: 'invert(1)',
                } : undefined
              }
            />}
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
}
