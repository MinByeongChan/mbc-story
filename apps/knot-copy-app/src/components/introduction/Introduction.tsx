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
  marginBottom: '150px',
});

interface IntroductionProps {
  imageSrc: string;
  title: React.ReactNode;
  subtitle: string;
}

export const Introduction = ({ imageSrc, title, subtitle }: IntroductionProps) => {
  return (
    <section>
      <div className={imageContainerStyles}>
        <img className={imageStyles} src={imageSrc} alt="introduction_cover_image" />

        <div
          className={css({
            position: 'absolute',
            w: '80%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          })}
        >
          <span
            className={css({
              fontStyle: 'italic',
              fontFamily: 'regale',
              transform: 'rotate(0deg)',
              fontSize: '4xl',
              color: 'white',
              letterSpacing: '0.3rem',
              lineHeight: '0.8',
            })}
          >
            We are getting married
          </span>
        </div>

        <div className={textContainerStyles}>
          <h1 className={titleStyles}>{title}</h1>
          <h2 className={subtitleStyles}>{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};
