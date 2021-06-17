import {
  PriceRangeValuesEnum,
  SalonType,
  TabsHeadingsEnum,
  AvailablePriceRangesType,
} from 'types';
import { SALONS_LIST } from 'constants/constants';
import {
  ActionsType,
  UPDATE_SELECTED_PRICE_RANGE,
  UPDATE_SELECTED_TAB,
} from './actions';

export interface StoreType {
  selectedPriceRange: AvailablePriceRangesType;
  selectedTab: TabsHeadingsEnum.INFO | TabsHeadingsEnum.SCHEMA;
  salonsList: SalonType[];
}

export const initialState: StoreType = {
  selectedPriceRange: PriceRangeValuesEnum.ALL,
  selectedTab: TabsHeadingsEnum.INFO,
  salonsList: SALONS_LIST,
};

const salonsReducer = (
  state: StoreType = initialState,
  action: ActionsType,
): StoreType => {
  switch (action.type) {
    case UPDATE_SELECTED_PRICE_RANGE:
      return {
        ...state,
        selectedPriceRange: action.selectedPriceRange,
      };
    case UPDATE_SELECTED_TAB:
      return { ...state, selectedTab: action.selectedTab };
    default:
      return { ...state };
  }
};

export default salonsReducer;
