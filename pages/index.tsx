import Image from 'next/image';
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Posts from "../components/Posts";
import Box from '@mui/material/Box';
import { getBlogPostData } from "../lib/posts";
import type { PostData } from "../lib/types";

type Props = {
  allPostsData: PostData[];
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Box sx={{ position: 'absolute', zIndex: -10, left: 0, width: '100vw', overflow: 'hidden' }}>
        <Image 
          src="/stars.svg"
          alt="start"
          width="2820"
          height="1332"
          style={{ minWidth: '100vw', height: 'auto' }}
        />
      </Box>
      <Profile />
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getBlogPostData();
  return {
    props: {
      allPostsData,
    },
  };
}
