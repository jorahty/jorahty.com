import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const name = 'James Tennant';

export default function Profile() {
  return (
    <Box sx={{
      display: {
        xs: 'block',
        sm: 'flex',
      },
      '& > *': {
        width: {
          xs: '100%',
          sm: '50%',
        },
      },
      gap: 3,
    }}>
      <Box>
        <Image
          style={{ width: '100%', height: 'auto', borderRadius: 20 }}
          src='/profile.jpg'
          width={1274}
          height={1708}
          alt={name}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '400px',
      }}>
        <Box>
          <Typography variant="h4">
            James Tennant
          </Typography>
          <Typography sx={{
            fontWeight: 600,
            fontSize: 20,
            opacity: 0.5,
          }}>
            @jorahty
          </Typography>
        </Box>
        <Box>
          <Typography>
            Computer engineering at{' '}
            <Link href="https://ucsc.edu" className='anchor'>
              University of California, Santa Cruz
            </Link>
          </Typography>
          <Box sx={{
              unicodeBidi: 'bidi-override',
              width: 'max-content',
              border: '2px solid #999',
              borderRadius: '5px',
              padding: '8px 16px',
              marginTop: '10px',
              background: '#cccccc33',
              userSelect: 'none',
              '&:hover': {
                direction: 'rtl',
                background: '#66bb6a33',
                borderColor: '#66bb6a',
              },
          }}>
            ude.cscu@tnannetj
          </Box>
        </Box>
        <Box>
          <Socials />
        </Box>
      </Box>
    </Box>
  );
}
