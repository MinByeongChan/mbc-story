import { GalleryImage } from '@components/gallery/type';
import { css } from '@styled-system/css';

type CarouselSlideProps = GalleryImage;

export const CarouselSlide = ({ id, src, alt }: CarouselSlideProps) => {
  return (
    <div
      className={css({
        transform: 'translate3d(0, 0, 0)',
        flex: '0 0 100%',
        minWidth: '0',
      })}
      key={id}
    >
      <div
        className={css({
          boxShadow: 'inset 0 0 0 0.2rem rgba(0, 0, 0, 0.2)',
          borderRadius: '1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
        })}
      >
        <img
          src={src}
          alt={alt}
          className={css({
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          })}
        />
      </div>
    </div>
  );
};
