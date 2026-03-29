import { H3HexagonData } from '@/types';
import { polygonToCells } from 'h3-js';

export const buildH3HexagonData = (
  h3Index: string,
  feature: GeoJSON.Feature,
  index: number,
): H3HexagonData => {
  const base = toByte(index * 37 + 10);
  const color = [base, toByte(base + 85), toByte(base + 170), 140];
  const lineColor = [toByte(base + 20), toByte(base + 20), toByte(base + 20), 200];

  return {
    h3Index,
    color,
    lineColor,
    feature,
  };
};

export const toByte = (value: number) => {
  return ((Math.round(value) % 256) + 256) % 256;
};

export const getH3Cells = (geometry: GeoJSON.Geometry, res: number, isGeoJson = true): string[] => {
  if (geometry.type === 'Polygon') {
    return polygonToCells(geometry.coordinates, res, isGeoJson);
  } else if (geometry.type === 'MultiPolygon') {
    return multiPolygonToCells(geometry.coordinates, res, isGeoJson);
  }
  return [];
};

export const multiPolygonToCells = (
  coordinates: number[][][][], // MultiPolygon coordinates
  res: number,
  isGeoJson = true,
): string[] => {
  const allCells = new Set<string>();
  for (const polygon of coordinates) {
    const cells = polygonToCells(polygon, res, isGeoJson);
    cells.forEach((c) => allCells.add(c));
  }
  return Array.from(allCells);
};
