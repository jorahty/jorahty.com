import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Image from 'next/image';
import ModeToggle from '@/components/ModeToggle';

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
            <Button>
              jtennant@ucsc.edu
            </Button>
          </Stack>

          <Stack direction="row">
            {
              [1,2,3,4].map(letter => (
                <Box key={letter}>
                  {letter}
                </Box>
              ))
            }
          </Stack>

        </Stack>
      </Stack>
      <Button>
        Hello, Projects!
      </Button>
    </Stack>
  );
}