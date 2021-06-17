export interface SalonType {
  id: string;
  companyName: string;
  price: number;
  reviews: number;
  street: string;
  distance: number;
  openTime: string;
  closeTime: string;
  stars: number;
  city: string;
  postCode: string;
  phoneNumber: string;
  website: string;
}

export interface SelectOptionType {
  value: AvailablePriceRangesType;
  label: string;
}

export enum PriceRangeValuesEnum {
  ALL = 'all',
  RANGE_1 = '0-250',
  RANGE_2 = '250-500',
  RANGE_3 = '500-750',
}

export enum TabsHeadingsEnum {
  INFO = 'Info',
  SCHEMA = 'Schema',
}

export type AvailableTabsType =
  | TabsHeadingsEnum.INFO
  | TabsHeadingsEnum.SCHEMA;

export type AvailablePriceRangesType =
  | PriceRangeValuesEnum.RANGE_1
  | PriceRangeValuesEnum.RANGE_2
  | PriceRangeValuesEnum.RANGE_3
  | PriceRangeValuesEnum.ALL;

export interface ParamsType {
  salonId: string;
}

export enum StarSizeEnum {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L',
}

export enum SalonInfoTabsHeadersEnum {
  INFO = 'Info',
  SCHEMA = 'Schema',
}
