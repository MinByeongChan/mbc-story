import React from 'react';
import Head from 'next/head';
import { Config } from '@/utils/Config';

export const AboutMeta = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`/favicon.ico`} key="favicon" />
        <title>{`이력서 프론트엔드 민병찬 | ${Config.title}`}</title>
        <meta
          name="description"
          content="민병찬 프론트엔드 주니어 개발자 이력서 사이트입니다. 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다."
          key="description"
        />
        <meta name="author" content={Config.author} key="author" />
        <link rel="canonical" href="https://mbc-dev-blog.vercel.app/about" />

        <meta
          property="og:title"
          content={`이력서 프론트엔드 민병찬 | ${Config.site_name}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content="민병찬 프론트엔드 주니어 개발자 이력서 사이트입니다. 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다."
          key="og:description"
        />
        <meta property="og:locale" content={Config.locale} key="og:locale" />
        <meta property="og:site_name" content={Config.site_name} key="og:site_name" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="이력서, resume, frontend" />
      </Head>
    </>
  );
};
