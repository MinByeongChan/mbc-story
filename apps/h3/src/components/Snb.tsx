import { css } from '@styled-system/css';

import maplibregl from 'maplibre-gl';
import { PolygonType, usePolygonTypeInfo } from '@/stores/usePolygonType';
import { SnbH3Info } from '@/components/snb/SnbH3Info';
import { SnbS2Info } from '@/components/snb/SnbS2Info';
import { RadioItem } from '@/components/ui/radio/RadioItem';
import { RadioGroup } from '@/components/ui/radio/RadioGroup';

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
        <h4 className={css({ fontSize: 'xl', fontWeight: 'bold' })}>폴리곤 타입</h4>

        <RadioGroup>
          <RadioItem
            id="h3"
            value="h3"
            checked={polygonType === 'h3'}
            onChange={handleChangePolygonType}
            label="H3 Cell"
          />
          <RadioItem
            id="s2"
            value="s2"
            checked={polygonType === 's2'}
            onChange={handleChangePolygonType}
            label="S2 Cell"
          />
          <RadioItem
            id="none"
            value="none"
            checked={polygonType === 'none'}
            onChange={handleChangePolygonType}
            label="None"
          />
        </RadioGroup>
      </div>

      <div className={css({ height: '1px', backgroundColor: 'token(colors.grey.300)' })} />

      {polygonType === 'h3' && <SnbH3Info mapRef={mapRef} />}
      {polygonType === 's2' && <SnbS2Info />}
    </aside>
  );
};
