import {
  AvailablePriceRangesType,
  PriceRangeValuesEnum,
  SelectOptionType,
} from 'types';
import { PRICE_OPTIONS } from 'constants/constants';

export const isPriceWithinRange = ({
  price,
  priceRange,
}: {
  price: number;
  priceRange: AvailablePriceRangesType;
}): boolean => {
  switch (priceRange) {
    case PriceRangeValuesEnum.ALL:
      return true;
    case PriceRangeValuesEnum.RANGE_1:
      return price > 0 && price < 250;
    case PriceRangeValuesEnum.RANGE_2:
      return price > 250 && price < 500;
    case PriceRangeValuesEnum.RANGE_3:
      return price > 500 && price < 750;
    default:
      return false;
  }
};

export const getSelectedPriceOption = ({
  priceRange,
}: {
  priceRange: AvailablePriceRangesType;
}): SelectOptionType => {
  return (
    PRICE_OPTIONS.find((option) => option.value === priceRange) ||
    PRICE_OPTIONS[1]
  );
};
