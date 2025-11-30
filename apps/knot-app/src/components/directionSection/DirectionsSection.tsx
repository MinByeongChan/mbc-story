import { css } from '@styled-system/css';
import { type DirectionsInfoItem } from './type';

interface DirectionsSectionProps {
  directionsItemList: DirectionsInfoItem[];
}

export const DirectionsSection = ({ directionsItemList }: DirectionsSectionProps) => {
  return (
    <section className={css({ p: '4', display: 'flex', flexDirection: 'column', gap: '4' })}>
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

          {data.info.map((item) => {
            if (item.type === 'textarea') {
              return (
                <div className={css({})}>
                  <p className={css({ whiteSpace: 'pre-wrap' })}>{item.description}</p>
                </div>
              );
            }

            if (item.type === 'list') {
              return (
                <div className={css({})}>
                  <ul className={css({ listStyle: 'disc', listStylePosition: 'inside' })}>
                    {item.items.map((item) => (
                      <li key={item} className={css({ whiteSpace: 'pre-wrap' })}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div
                className={css({
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 8rem) auto',
                  gap: '2',
                })}
              >
                <div>
                  <p className={css({ fontSize: 'md', fontWeight: 'bold', lineHeight: '2' })}>
                    {item.subTitle}
                  </p>
                </div>
                <div>
                  <p className={css({ fontSize: 'md', lineHeight: '2' })}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};
