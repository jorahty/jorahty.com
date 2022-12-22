import Head from "next/head";
import Bar from "./Bar";
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
  home: boolean;
};

export default function Layout({ children, home }: Props) {
  return (
    <Box sx={{ maxWidth: '960px', margin: 'auto', px: 4 }}>
      <Head>
        <title>James Tennant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bar home={home}/>
      {children}
    </Box>
    );
}
