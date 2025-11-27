import { css } from '@styled-system/css';

interface DirectionsSectionProps {
  directionsItemList: DirectionsInfoItem[];
}

interface DirectionsInfoItem {
  title: string;
  titleImageSrc: string;
  titleImageAlt: string;
  info: {
    subTitle: string;
    description: string;
  }[];
}

export const DirectionsSection = ({ directionsItemList }: DirectionsSectionProps) => {
  return (
    <section className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
      {directionsItemList.map((data) => (
        <div>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
              borderBottom: '1px solid',
              borderColor: 'grey.300',
              borderStyle: 'dashed',
              pb: '2',
              mb: '2',
            })}
          >
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                backgroundColor: 'white',
                rounded: 'full',
                border: '1px solid',
                borderColor: 'grey.300',
              })}
            >
              <img
                src={data.titleImageSrc}
                alt={data.titleImageAlt}
                className={css({
                  width: '20px',
                  height: '20px',
                })}
              />
            </div>

            <h2>{data.title}</h2>
          </div>

          <div className={css({ display: 'flex', flexDirection: 'row', gap: '2' })}>
            <div>
              {data.info.map((item) => (
                <p className={css({ fontSize: 'md', fontWeight: 'bold', lineHeight: '2' })}>
                  {item.subTitle}
                </p>
              ))}
            </div>
            <div>
              {data.info.map((item) => (
                <p className={css({ fontSize: 'md', lineHeight: '2' })}>{item.description}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
