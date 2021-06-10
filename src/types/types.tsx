export interface SalonType {
  id: number;
  companyName: string;
  price: number;
  reviews: number;
  address: string;
  distance: number;
  openTime: string;
  stars: number;
}

export interface SelectOptionType {
  value: string;
  label: string;
}

export enum PriceRangeValuesEnum {
  RANGE_1 = '0-250',
  RANGE_2 = '250-500',
  RANGE_3 = '500-750',
}

export enum TabsHeadingsEnum {
  TAB_1 = 'Info',
  TAB_2 = 'Schema',
}

export interface ParamsType {
  salonId: string;
}

export enum StarSizeEnum {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L',
}
