import { SalonType, SelectOptionType, SelectOpitionValuesEnum } from 'types';

export const PRICE_OPTIONS: SelectOptionType[] = [
  { value: SelectOpitionValuesEnum.RANGE_1, label: 'Pris 0 - 250 kr' },
  { value: SelectOpitionValuesEnum.RANGE_2, label: 'Pris 250 - 500 kr' },
  { value: SelectOpitionValuesEnum.RANGE_3, label: 'Pris 500 - 750 kr' },
];

export const SALONS_LIST: SalonType[] = [
  {
    id: 0,
    companyName: 'Sax & Fön',
    price: 320,
    score: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
  },
  {
    id: 1,
    companyName: 'Hårizont',
    price: 320,
    score: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
  },
  {
    id: 2,
    companyName: 'Hårhuset',
    price: 320,
    score: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
  },
  {
    id: 3,
    companyName: 'Hair & Nu',
    price: 320,
    score: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
  },
  {
    id: 4,
    companyName: 'Harley Davidson',
    price: 320,
    score: 32,
    address: 'Rådmansgatan 46',
    distance: 30,
    openTime: '12.00',
  },
  {
    id: 5,
    companyName: 'Combs & Scisors',
    price: 90,
    score: 38,
    address: 'Ystadgatan 9',
    distance: 10,
    openTime: '7.00',
  },
  {
    id: 6,
    companyName: 'Fred Durst',
    price: 90,
    score: 38,
    address: 'Lundgatan 55',
    distance: 10,
    openTime: '7.00',
  },
  {
    id: 7,
    companyName: 'Bonnie & Clyde',
    price: 590,
    score: 38,
    address: 'Lundgatan 56',
    distance: 10,
    openTime: '5.00',
  },
];
