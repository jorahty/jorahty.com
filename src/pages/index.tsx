import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Image from 'next/image';
import ModeToggle from '@/components/ModeToggle';
import { GlobalStyles } from '@mui/joy';
import Socials from '@/components/Socials';

export default function MyApp() {
  return (
    <Stack gap={3} padding={3} margin="auto" maxWidth={900}>
      <ModeToggle />
      <Stack gap={3} sx={{
        flexDirection: {
          sm: 'row'
        }
      }}>
        <Box sx={{
          width: {
            sm: '50%',
          }
        }}>
          <Image
            src="/portrait.png"
            alt="Portrait"
            width="2316"
            height="3088"
            priority
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 15,
            }}
          />
        </Box>
        <Stack
          justifyContent="space-between"
          gap={6}
        >
          <Box>
            <Typography level="h2">
              James Tennant
            </Typography>
            <Typography level="h6" textColor="neutral.500">
              @jorahty
            </Typography>
          </Box>
          
          <Stack gap={2} alignItems="start">
            <Typography>
              Computer Engineering at<br/>
              <Link href="https://ucsc.edu">
                University of California, Santa Cruz
              </Link>
            </Typography>
            <GlobalStyles styles={{
              '.protected:hover': {
                unicodeBidi: 'bidi-override',
                direction: 'rtl',
                cursor: 'not-allowed',
                userSelect: 'none',
                background: 'var(--joy-palette-primary-solidBg) !important'
              },
            }} />
            <Button className='protected'>
              ude.cscu@tnannetj
            </Button>
          </Stack>

          <Socials />
        </Stack>
      </Stack>
      <Button>
        Hello, Projects!
      </Button>
    </Stack>
  );
}