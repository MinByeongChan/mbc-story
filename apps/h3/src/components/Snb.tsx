import { css } from '@styled-system/css';

import maplibregl from 'maplibre-gl';
import { PolygonType, usePolygonTypeInfo } from '@/stores/usePolygonType';
import { SnbH3Info } from '@/components/snb/SnbH3Info';
import { SnbS2Info } from '@/components/snb/SnbS2Info';

const wrapperStyles = css({
  position: 'relative',
  backgroundColor: 'white',
  width: '300px',
  height: '100%',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  zIndex: 101,
});

interface SnbProps {
  features?: GeoJSON.Feature[];
  mapRef: React.RefObject<maplibregl.Map | null>;
}

export const Snb = ({ mapRef }: SnbProps) => {
  const { polygonType, setPolygonType } = usePolygonTypeInfo();

  const handleChangePolygonType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolygonType(e.target.value as PolygonType);
  };

  return (
    <aside className={wrapperStyles}>
      <div>
        <h4>
          <strong>폴리곤 타입</strong>
        </h4>

        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2' })}>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
            <input
              id="h3"
              type="radio"
              value="h3"
              checked={polygonType === 'h3'}
              onChange={handleChangePolygonType}
            />
            <label htmlFor="h3">H3 Cell</label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
            <input
              id="s2"
              type="radio"
              value="s2"
              checked={polygonType === 's2'}
              onChange={handleChangePolygonType}
            />
            <label htmlFor="s2">S2 Cell</label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
            <input
              id="none"
              type="radio"
              value="none"
              checked={polygonType === 'none'}
              onChange={handleChangePolygonType}
            />
            <label htmlFor="none">None</label>
          </div>
        </div>
      </div>

      <div className={css({ border: '1px solid token(colors.grey.300)' })} />

      {polygonType === 'h3' && <SnbH3Info mapRef={mapRef} />}
      {polygonType === 's2' && <SnbS2Info />}
    </aside>
  );
};
