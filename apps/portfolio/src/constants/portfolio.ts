export const PORTFOLIO_BASE_PATH = "/portfolio" as const;
export const PORTFOLIO_ORIGIN = "https://byeongchan.space" as const;
export const PORTFOLIO_URL =
  `${PORTFOLIO_ORIGIN}${PORTFOLIO_BASE_PATH}` as const;

export const portfolioPath = (path = "") => {
  const normalizedPath =
    path === "" || path.startsWith("/") ? path : `/${path}`;

  return `${PORTFOLIO_BASE_PATH}${normalizedPath}`;
};
