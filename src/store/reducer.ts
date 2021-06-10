import {
  PriceRangeValuesEnum,
  SalonType,
  TabsHeadingsEnum,
} from 'types';
import { SALONS_LIST } from 'constants/constants';
import {
  ActionsType,
  UPDATE_SELECTED_PRICE_RANGE,
  UPDATE_SELECTED_TAB,
} from './actions';

export interface StoreType {
  selectedPriceRange:
    | PriceRangeValuesEnum.RANGE_1
    | PriceRangeValuesEnum.RANGE_2
    | PriceRangeValuesEnum.RANGE_3;
  selectedTab: TabsHeadingsEnum.TAB_1 | TabsHeadingsEnum.TAB_2;
  salonsList: SalonType[];
}

export const initialState: StoreType = {
  selectedPriceRange: PriceRangeValuesEnum.RANGE_2,
  selectedTab: TabsHeadingsEnum.TAB_1,
  salonsList: SALONS_LIST,
};

const reducer = (
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

export default reducer;
