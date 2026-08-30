import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { Config } from '@/utils/Config';
import { addTrailingSlash } from '@/utils/Url';
import { BLOG_BASE_PATH, BLOG_URL, blogPath } from '@/constants/blog';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
};

export const Meta: React.FC<IMetaProps> = (props: IMetaProps) => {
  const router = useRouter();
  const browserPath = router.asPath.split('?')[0];
  const pagePath = browserPath.startsWith(BLOG_BASE_PATH)
    ? browserPath.slice(BLOG_BASE_PATH.length) || '/'
    : browserPath;
  const pageUrl = `${BLOG_URL}${addTrailingSlash(pagePath)}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" href={blogPath('/apple-touch-icon.png')} key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={blogPath('/favicon-32x32.png')}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={blogPath('/favicon-16x16.png')}
          key="icon16"
        />
        <link rel="icon" href={blogPath('/favicon.ico')} key="favicon" />

        <link rel="preload" href={blogPath('/fonts/MaruBuri-Bold.otf')} as="font" type="font/otf" />
        <link
          rel="preload"
          href={blogPath('/fonts/MaruBuri-SemiBold.otf')}
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href={blogPath('/fonts/MaruBuri-Regular.otf')}
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href={blogPath('/fonts/MaruBuri-Light.otf')}
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href={blogPath('/fonts/MaruBuri-ExtraLight.otf')}
          as="font"
          type="font/otf"
        />

        <title>{`${props.title} | ${Config.author}`}</title>
        <meta
          name="description"
          content={props.description ? props.description : Config.description}
          key="description"
        />
        <meta name="author" content={Config.author} key="author" />
        <link rel="canonical" href={props.canonical ?? pageUrl} key="canonical" />
        <meta property="og:title" content={`${props.title} | ${Config.site_name}`} key="og:title" />
        <meta
          property="og:description"
          content={props.description ? props.description : Config.description}
          key="og:description"
        />
        <meta property="og:locale" content={Config.locale} key="og:locale" />
        <meta property="og:site_name" content={Config.site_name} key="og:site_name" />
        <meta property="og:url" content={pageUrl} key="og:url" />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta property="og:image" content={`${Config.url}${props.post.image}`} key="og:image" />
            <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
            <meta
              property="article:published_time"
              content={new Date(props.post.date).toISOString()}
              key="article:published_time"
            />
            <meta
              property="article:modified_time"
              content={new Date(props.post.modified_date).toISOString()}
              key="article:modified_time"
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description ? props.description : Config.description}",
            "author": {
              "@type": "Person",
              "name": "${Config.author}"
            },
            "@type": "BlogPosting",
            "url": "${pageUrl}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${Config.url}/assets/images/logo.png"
              },
              "name": "${Config.author}"
            },
            "headline": "${props.title} | ${Config.site_name}",
            "image": ["${Config.url}${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${pageUrl}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
      </Head>
    </>
  );
};
