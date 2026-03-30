import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Meta, PostDetailsLayout } from '@/layout';
import { Main } from '@/components/templates';
import { getAllPosts, getPostBySlug } from '@/utils/Content';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import { Color } from '@/utils/StyleTheme';
import { Config } from '@/utils/Config';
import Utterances from '@/components/comment/Utterances';
import Markdown from '@/components/Markdown';
import { Avatar, Box, Divider, Icon, Tooltip, Typography } from '@mui/material';
import { FrontMatter } from '@/types';
import { Email, Instagram } from '@mui/icons-material';
import Link from 'next/link';
import 'github-markdown-css/github-markdown-light.css';

type PostUrl = {
  slug: string;
};

const TitleContainer = styled(Box)({
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SubTitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
});

function PostDetails({
  title,
  description,
  modified_date,
  content,
  date,
  image,
  tags,
}: FrontMatter) {
  return (
    <Main
      meta={
        <Meta
          title={title}
          description={description}
          post={{
            image: image ?? '',
            date: date,
            modified_date: modified_date ?? '',
          }}
        />
      }>
      <PostDetailsLayout>
        <TitleContainer>
          <Typography variant="subtitle1" color="textSecondary" mb="8px">
            {format(new Date(date), 'LLLL d, yyyy')}
          </Typography>
          <Typography variant="h3" fontWeight="700">
            {title}
          </Typography>
        </TitleContainer>
        <SubTitleContainer>
          <Avatar
            alt="Min Byeong Chan Profile Icon"
            src="/assets/images/mbc_img.png"
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="700">
              {Config.author}
            </Typography>
            <Box display="flex" gap="8px">
              <Tooltip title={Config.instagram}>
                <Icon sx={{ width: '24px', height: '24px' }}>
                  <Link href={Config.instagram}>
                    <Instagram />
                  </Link>
                </Icon>
              </Tooltip>
              <Tooltip title={Config.email}>
                <Icon sx={{ width: '24px', height: '24px' }}>
                  <Link href={'mailto:' + Config.email}>
                    <Email />
                  </Link>
                </Icon>
              </Tooltip>
            </Box>
          </Box>
        </SubTitleContainer>

        <SubTitleContainer>
          <Typography fontWeight="700">TAGS</Typography>
          <Box display="flex" gap="16px">
            {tags.map((tag) => (
              <Typography key={tag} color={Color.LightPink}>
                {tag}
              </Typography>
            ))}
          </Box>
        </SubTitleContainer>

        <Box pt={4} pb={4}>
          <Markdown content={content} />
        </Box>

        <Typography variant="h5" fontWeight="700" margin="50px 0 20px 0">
          Comment
        </Typography>
        <Divider />

        <Utterances repo="MinByeongChan/mbc-devBlog" theme="github-light" />
      </PostDetailsLayout>
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths<PostUrl> = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<FrontMatter, PostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug);

  return {
    props: { ...post },
  };
};

export default PostDetails;
