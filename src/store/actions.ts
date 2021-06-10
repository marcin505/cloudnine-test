import { TabsHeadingsEnum, PriceRangeValuesEnum } from 'types';

const UPDATE_SELECTED_PRICE_RANGE = 'UPDATE_SELECTED_PRICE_RANGE';
const UPDATE_SELECTED_TAB = 'UPDATE_SELECTED_TAB';

interface UpdateSelectedTabActionType {
  type: typeof UPDATE_SELECTED_TAB;
  selectedTab: TabsHeadingsEnum.TAB_1 | TabsHeadingsEnum.TAB_2;
}

interface UpdateSelectedPriceRangeActionType {
  type: typeof UPDATE_SELECTED_PRICE_RANGE;
  selectedPriceRange:
    | PriceRangeValuesEnum.RANGE_1
    | PriceRangeValuesEnum.RANGE_2
    | PriceRangeValuesEnum.RANGE_3;
}

const updatePriceRangeAction = ({
  selectedPriceRange,
}: {
  selectedPriceRange:
    | PriceRangeValuesEnum.RANGE_1
    | PriceRangeValuesEnum.RANGE_2
    | PriceRangeValuesEnum.RANGE_3;
}): UpdateSelectedPriceRangeActionType => ({
  type: UPDATE_SELECTED_PRICE_RANGE,
  selectedPriceRange,
});

const updateSelectedTabAction = ({
  selectedTab,
}: {
  selectedTab: TabsHeadingsEnum.TAB_1 | TabsHeadingsEnum.TAB_2;
}): UpdateSelectedTabActionType => ({
  type: UPDATE_SELECTED_TAB,
  selectedTab,
});

export type ActionsType =
  | UpdateSelectedPriceRangeActionType
  | UpdateSelectedTabActionType;

export {
  UPDATE_SELECTED_PRICE_RANGE,
  UPDATE_SELECTED_TAB,
  updatePriceRangeAction,
  updateSelectedTabAction,
};
