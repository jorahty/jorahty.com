import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ThemeToggle from './ThemeToggle';

type Props = {
  home: boolean;
};

export default function Bar({ home }: Props) {
  return (
    <Paper square={true} elevation={0} sx={{
      py: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '0',
      zIndex: 10,
    }}>
      <Link href="/" style={{ color: 'unset' }}>
        <Typography variant="h5" sx={{
          '&:hover': {
            textDecoration: 'underline',
          },
        }}>
          {!home && 'James Tennant'}
        </Typography>
      </Link>
      <ThemeToggle />
    </Paper>
  );
}
