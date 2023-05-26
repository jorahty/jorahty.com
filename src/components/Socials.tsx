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
    <Stack direction="row" justifyContent="space-between">
      {Object.entries(socials).map(([k, v]) => (
        <Tooltip key={k} title={k} arrow placement="top">
          <Link
            href={v}
            sx={{
              '& img': {
                filter: `invert(${(k === 'GitHub' && mode === 'dark' && mounted) ? '1' : '0'})`,
                width: {
                  sm: "min(7.7vw, 70px)",
                  xs: "15vw",
                },
                height: 'auto',
              }
            }}
          >
            <Image
              src={`/socials/${k}.svg`}
              width={200}
              height={200}
              alt={k}
            />
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
}
