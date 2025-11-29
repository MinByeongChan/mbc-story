export type DirectionInfoType = 'grid' | 'textarea' | 'list';

export type DirectionInfoGridItem = {
  type: 'grid';
  subTitle: string;
  description: string;
};

export type DirectionInfoTextareaItem = {
  type: 'textarea';
  description: string;
};

export type DirectionInfoListItem = {
  type: 'list';
  items: string[];
};

export type DirectionItem =
  | DirectionInfoGridItem
  | DirectionInfoTextareaItem
  | DirectionInfoListItem;

export interface DirectionsInfoItem {
  title: string;
  titleImageSrc: string;
  titleImageAlt: string;
  info: DirectionItem[];
}
