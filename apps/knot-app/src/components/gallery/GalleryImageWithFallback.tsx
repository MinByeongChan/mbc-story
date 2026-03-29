import { useCallback, useState } from 'react';

export const GALLERY_IMAGE_FALLBACK_SRC = '/sample/not_found.svg';

type GalleryImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
};

export const GalleryImageWithFallback = ({
  src,
  alt,
  className,
}: GalleryImageWithFallbackProps) => {
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    setFailed(true);
  }, []);

  const displaySrc = failed ? GALLERY_IMAGE_FALLBACK_SRC : src;

  return (
    <img src={displaySrc} alt={alt} onError={handleError} className={className} decoding="async" />
  );
};
