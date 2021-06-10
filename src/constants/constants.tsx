import {
  SalonType,
  SelectOptionType,
  PriceRangeValuesEnum,
} from 'types';

export const PRICE_OPTIONS: SelectOptionType[] = [
  {
    value: PriceRangeValuesEnum.RANGE_1,
    label: 'Pris 0 - 250 kr',
  },
  {
    value: PriceRangeValuesEnum.RANGE_2,
    label: 'Pris 250 - 500 kr',
  },
  {
    value: PriceRangeValuesEnum.RANGE_3,
    label: 'Pris 500 - 750 kr',
  },
];

export const DEFAULT_PRICE_OPTION: SelectOptionType =
  PRICE_OPTIONS[1];

export const SALONS_LIST: SalonType[] = [
  {
    id: 0,
    companyName: 'Sax & Fön',
    price: 320,
    reviews: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
    stars: 3,
  },
  {
    id: 1,
    companyName: 'Hårizont',
    price: 320,
    reviews: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
    stars: 5,
  },
  {
    id: 2,
    companyName: 'Hårhuset',
    price: 320,
    reviews: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
    stars: 2,
  },
  {
    id: 3,
    companyName: 'Hair & Nu',
    price: 320,
    reviews: 18,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
    stars: 3,
  },
  {
    id: 4,
    companyName: 'Harley Davidson',
    price: 320,
    reviews: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
    stars: 5,
  },
  {
    id: 5,
    companyName: 'Combs & Scisors',
    price: 90,
    reviews: 29,
    address: 'Ystadgatan 9',
    distance: 10,
    openTime: '7.00',
    stars: 4,
  },
  {
    id: 6,
    companyName: 'Fred Durst',
    price: 90,
    reviews: 38,
    address: 'Lundgatan 55',
    distance: 10,
    openTime: '7.00',
    stars: 1,
  },
  {
    id: 7,
    companyName: 'Bonnie & Clyde',
    price: 590,
    reviews: 43,
    address: 'Lundgatan 56',
    distance: 10,
    openTime: '5.00',
    stars: 5,
  },
];
