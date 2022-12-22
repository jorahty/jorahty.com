import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { PostData } from '../lib/types';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';

type Props = {
  allPostsData: PostData[];
};

export default function Posts({ allPostsData }: Props) {
  const { palette: {mode} } = useTheme();
  const backgroundColor =  mode === 'light' ? '#ffffff' : '#222222';
  const borderColor =      mode === 'light' ? '#dddddd' : '#555555';
  const hoverBorderColor = mode === 'light' ? '#000000' : '#888888';
  return (
    <Box>
      {allPostsData.map(({ title, slug, date, description, tags }) => (
        <Link
          key={slug}
          href={`/posts/${slug}`}
          style={{ color: 'unset'}}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            background: backgroundColor,
            mt: 4,
            p: 4,
            borderRadius: 5,
            border: `3px solid ${borderColor}`,
            textAlign: 'left',
            gap: 5,
            '& > *': {
              margin: 0,
            },
            transition: 'border-color 0.2s ease-out',
            '&:hover': {
              borderColor: hoverBorderColor,
            }
          }}>
            <Box>
              <Typography variant="h5">{title}</Typography>
              <Box sx={{display: 'flex', gap: 1 }}>
                {tags && tags.map((tag: string, i: Number) => (
                  <Box key={i.toString()} sx={{
                    p: '4px 14px',
                    background: '#88888833',
                    borderRadius: 8,
                    fontSize: 18,
                    fontWeight: 600,
                    mt: 0.8
                  }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <Typography>{description}</Typography>
            <Typography variant="subtitle2" sx={{
              opacity: 0.5,
              fontSize: 14,
            }}>
              {date}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
}
