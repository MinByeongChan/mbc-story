export const BLOG_BASE_PATH = '/blog' as const;
export const SITE_ORIGIN = 'https://byeongchan.space' as const;
export const BLOG_URL = `${SITE_ORIGIN}${BLOG_BASE_PATH}` as const;
export const PORTFOLIO_URL = `${SITE_ORIGIN}/portfolio` as const;

export const blogPath = (path = '') => {
  const normalizedPath = path === '' || path.startsWith('/') ? path : `/${path}`;

  return `${BLOG_BASE_PATH}${normalizedPath}`;
};
