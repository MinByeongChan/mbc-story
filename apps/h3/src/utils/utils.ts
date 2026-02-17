export const getPolygonData = (geojson: GeoJSON.FeatureCollection): { x: number; y: number }[] => {
  // GeoJSON Polygons are Array<[number, number]>[]
  // We typically want to use the first (outer) ring only
  geojson.features.map((feature) => {
    const geometry = feature.geometry as GeoJSON.Geometry;
    const coordinates = geometry.coordinates;
    return coordinates.map((coordinate) => ({
      x: coordinate[0],
      y: coordinate[1],
    }));
  });
};

export const toByte = (value: number) => ((Math.round(value) % 256) + 256) % 256;
export const getPolygonCentroid = (coordinates: number[][][]) => {
  // Polygon의 외곽선(Outer Ring) 좌표 추출
  const ring = coordinates[0];
  let lngSum = 0;
  let latSum = 0;

  ring.forEach(([lng, lat]) => {
    lngSum += lng;
    latSum += lat;
  });

  return {
    lng: lngSum / ring.length,
    lat: latSum / ring.length,
  };
};
