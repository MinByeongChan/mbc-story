import { useMemo, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { compactCells } from 'h3-js';
import 'maplibre-gl/dist/maplibre-gl.css';
import geojsonData from './assets/sig_4326.json';
import { MainLayout } from '@/components/ui/MainLayout';
import { Header } from '@/components/ui/Header';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { VworldMap } from './components/VworldMap';
import { H3HexagonData } from './types';
import { Snb } from './components/Snb';
import { useResolutionInfo } from './stores/resolutionInfo';
import { buildH3HexagonData, getH3Cells } from './utils/h3';

const VWORLD_KEY = import.meta.env.VITE_VWORLD_KEY as string | undefined;

function App() {
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { overlayResolution } = useResolutionInfo();

  const features = useMemo(() => {
    const data = geojsonData as unknown as GeoJSON.FeatureCollection;
    const features = data.features.filter(
      (feature) => feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon',
    );
    return features;
  }, []);

  const overlayAllH3Data = useMemo<H3HexagonData[]>(() => {
    return features.flatMap((feature, index) => {
      const cells = getH3Cells(feature.geometry, overlayResolution, true);
      const compacted = compactCells(cells || []);
      return compacted.map((h3Index) => buildH3HexagonData(h3Index, index));
    });
  }, [features, overlayResolution]);

  if (!VWORLD_KEY) {
    return <div style={{ color: '#dc2626' }}>VITE_VWORLD_KEY를 .env에 설정해주세요.</div>;
  }

  return (
    <MainLayout>
      <Header />
      <ContentLayout>
        <Snb features={features} overlayAllH3Data={overlayAllH3Data} mapRef={mapRef} />

        <section style={{ padding: '16px' }}>
          <VworldMap overlayAllH3Data={overlayAllH3Data} mapRef={mapRef} />
        </section>
      </ContentLayout>
    </MainLayout>
  );
}

export default App;
