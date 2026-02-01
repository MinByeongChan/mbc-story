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
