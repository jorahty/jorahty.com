import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout";
import type { Frontmatter } from "../../lib/types";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  code: string;
  frontmatter: Frontmatter;
};

export default function BlogPost({ code, frontmatter }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout home={false}>
      <Box>
        <Box>
          <Typography variant="h4">{frontmatter.title}</Typography>
          <Box sx={{display: 'flex', gap: 1 }}>
            {frontmatter.tags && frontmatter.tags.map((tag, i) => (
              <Box key={i} sx={{
                p: '4px 14px',
                background: '#88888833',
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
                my: 0.8
              }}>
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
        <Typography variant="subtitle1">{frontmatter.date}</Typography>
        <hr />
        <Box className="post-content">
          <Component />
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      ...postData,
    },
  };
};
