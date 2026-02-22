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
