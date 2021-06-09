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

export enum SelectOpitionValuesEnum {
  RANGE_1 = '0-250',
  RANGE_2 = '250-500',
  RANGE_3 = '500-750',
}