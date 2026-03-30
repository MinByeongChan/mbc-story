export enum Color {
  Red = '#ff0000',
  Fuchsia = '#ff009f',
  Deeppink = '#ff1493',
  LightBeige = '#F9F6E6',
  LightPink = '#C30E59',
  Orchid = '#da70d6',
  Black = '#000000',
  DarkBlack = 'rgb(41,44,50)',
  LightBlack = 'rgb(60, 71, 86)',
  White = '#ffffff',
  Darkslategray = '#2f4f4f',
  Lightslategray = '#778899 ',
  Slategray = '#708090',
  Gray = '#656a77',
  Gray2 = '#8d8d8d',
  Darkgray = '#a9a9a9',
  DarkWhite = 'rgb(237,241,242)',
  Lightgrey = '#d3d3d3',
  Gainsboro = '#dcdcdc',
  Green = 'rgb(14, 128, 64)',
  Dodgerblue = '#1e90ff',
  LightBlue = 'rgb(82, 166, 228)',
  Lightskyblue = '#87cefa',
  Orange = 'rgb(255,90,0)',
}

export interface IStyleOptions {
  [key: string]: string;
}

export const color: IStyleOptions = {
  red: '#ff0000',
  fuchsia: '#ff009f',
  deeppink: '#ff1493',
  orchid: '#da70d6',
  black: '#000000',
  darkBlack: 'rgb(41,44,50)',
  lightBlack: 'rgb(60, 71, 86)',
  white: '#ffffff',
  darkslategray: '#2f4f4f',
  lightslategray: '#778899 ',
  slategray: '#708090',
  gray: '#656a77',
  gray2: '#8d8d8d',
  darkgray: '#a9a9a9',
  darkWhite: 'rgb(237,241,242)',
  lightgrey: '#d3d3d3',
  gainsboro: '#dcdcdc',
  green: 'rgb(14, 128, 64)',
  dodgerblue: '#1e90ff',
  lightBlue: 'rgb(82, 166, 228)',
  lightskyblue: '#87cefa',
  orange: 'rgb(255,90,0)',
};

export const fontSize: IStyleOptions = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  regular: '15px',
  md: '1rem',
  lg: '18px',
  xg: '20px',
  xxg: '28px',
  h3: '38px',
  h2: '45px',
  h1: '52px',
};

export const fontWeight = {
  light: '300',
  normal: 'normal',
  medium: '500',
  bold: '700',
} as const;

export const lineHeight: IStyleOptions = {
  md: '30px',
  lg: '35px',
  xg: '40px',
  xxg: '45px',
  h3: '52px',
  h2: '63px',
  h1: '73px',
};

export const spacing = (value: number) => {
  const SPACING = 8;
  return value * SPACING + 'px';
};
