import React from 'react';
import Head from 'next/head';
import { resumePath } from '@/constants/resume';
import { Config } from '@/utils/Config';

export const ResumeMeta = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" href={resumePath('/apple-touch-icon.png')} key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={resumePath('/favicon-32x32.png')}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={resumePath('/favicon-16x16.png')}
          key="icon16"
        />
        <link rel="icon" href={resumePath('/favicon.ico')} key="favicon" />
        <title>{Config.title}</title>
        <meta name="description" content={Config.description} key="description" />
        <meta name="author" content={Config.author} key="author" />
        {Config.siteUrl && <link rel="canonical" href={`${Config.siteUrl}/`} />}

        <meta property="og:title" content={Config.title} key="og:title" />
        <meta property="og:description" content={Config.description} key="og:description" />
        {Config.siteUrl && <meta property="og:url" content={`${Config.siteUrl}/`} key="og:url" />}
        <meta property="og:locale" content={Config.locale} key="og:locale" />
        <meta property="og:site_name" content={Config.siteName} key="og:site_name" />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="이력서, resume, frontend" />
      </Head>
    </>
  );
};
