export const RESUME_BASE_PATH = '/resume' as const;
export const SITE_ORIGIN = 'https://byeongchan.space' as const;
export const RESUME_URL = `${SITE_ORIGIN}${RESUME_BASE_PATH}` as const;
export const PORTFOLIO_URL = `${SITE_ORIGIN}/portfolio` as const;

export const resumePath = (path = '') => {
  const normalizedPath = path === '' || path.startsWith('/') ? path : `/${path}`;

  return `${RESUME_BASE_PATH}${normalizedPath}`;
};
