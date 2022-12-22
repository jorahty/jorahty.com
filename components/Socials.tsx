import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

export default function SocialMedia() {
  const { palette } = useTheme();

  const socials = {
    youtube: 'https://youtube.com/@jorahty', 
    twitter: 'https://twitter.com/jorahty', 
    linkedin: 'https://linkedin.com/in/jorahty', 
    github: 'https://github.com/jorahty', 
    instagram: 'https://instagram.com/jorahty',
  };

  const icons = [];
  for (const [k, v] of Object.entries(socials)) {
    icons.push(
      <Tooltip key={k} title={k} placement="top">
        <Link href={v}>
          <Image
            src={`/socials/${k}.svg`}
            width={100}
            height={100}
            alt={k}
            style={
              (k === 'github' && palette.mode === 'dark') ? {
                filter: 'invert(100%)',
              } : undefined
            }
          />
        </Link>
      </Tooltip>
    );
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      '& img': {
        width: {
          mobile: '15vw',
          desktop: 'min(8vw, 80px)',
        }
      }
    }}>
      {icons}
    </Box>
  );
}
