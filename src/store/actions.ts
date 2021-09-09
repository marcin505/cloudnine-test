import {
  PriceRangeValuesEnum,
  AvailablePriceRangesType,
  AvailableTabsType,
} from 'types';

const UPDATE_SELECTED_PRICE_RANGE = 'UPDATE_SELECTED_PRICE_RANGE';
const UPDATE_SELECTED_TAB = 'UPDATE_SELECTED_TAB';

type SomePayloadType = 'dupa' | 'kurde';

interface SomeActionType {
  type: typeof UPDATE_SELECTED_PRICE_RANGE;
  somePayload: SomePayloadType;
}

export const someAction = ({
  somePayload,
}: {
  somePayload: SomePayloadType;
}): SomeActionType => ({
  type: UPDATE_SELECTED_PRICE_RANGE,
  somePayload,
});

interface UpdateSelectedTabActionType {
  type: typeof UPDATE_SELECTED_TAB;
  selectedTab: AvailableTabsType;
}

interface UpdateSelectedPriceRangeActionType {
  type: typeof UPDATE_SELECTED_PRICE_RANGE;
  selectedPriceRange: AvailablePriceRangesType;
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
  selectedTab: AvailableTabsType;
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
