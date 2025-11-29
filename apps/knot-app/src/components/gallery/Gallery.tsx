import { DefaultButton } from '@components/shared/Button';
import { GridTitle } from '@components/shared/gridTitle';
import { css } from '@styled-system/css';
import { useMemo, useState } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
interface GalleryProps {
  imageList: GalleryImage[];
}

export const Gallery = ({ imageList }: GalleryProps) => {
  const DEFAULT_MAX_IMAGE_COUNT = 9;
  const [maxImageCount, setMaxImageCount] = useState(DEFAULT_MAX_IMAGE_COUNT);

  const handleClickMoreImageButton = () => {
    setMaxImageCount((prev) => prev + 3);
  };

  const isShowMoreImageButton = useMemo(
    () => maxImageCount < imageList.length,
    [maxImageCount, imageList.length],
  );

  return (
    <section>
      <GridTitle>Gallery</GridTitle>

      <div
        className={css({
          display: 'grid',
          width: '100%',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3',
        })}
      >
        {imageList.slice(0, maxImageCount).map((src) => (
          <div
            key={src.id}
            className={css({
              width: '100%',
              aspectRatio: '1/1',
              rounded: 'md',
              overflow: 'hidden',
            })}
          >
            <img
              src={src.src}
              alt={src.alt}
              className={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              })}
            />
          </div>
        ))}
      </div>

      {isShowMoreImageButton && (
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '10',
          })}
        >
          <DefaultButton onClick={handleClickMoreImageButton}>More</DefaultButton>
        </div>
      )}
    </section>
  );
};
