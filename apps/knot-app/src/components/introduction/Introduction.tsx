import { css } from '@styled-system/css';

const imageContainerStyles = css({
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
const textContainerStyles = css({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
});

const imageStyles = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const titleStyles = css({
  fontSize: 'xl',
  fontWeight: 'bold',
  color: 'white',
});

const subtitleStyles = css({
  fontSize: 'lg',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '20',
});

interface IntroductionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const Introduction = ({ imageSrc, title, subtitle }: IntroductionProps) => {
  return (
    <section>
      <div className={imageContainerStyles}>
        <img className={imageStyles} src={imageSrc} alt="introduction_cover_image" />

        <div className={textContainerStyles}>
          <h1 className={titleStyles}>{title}</h1>
          <h2 className={subtitleStyles}>{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};
