import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import styled from 'styled-components';
import Header from 'components/SalonsListView/Header/Header';
import PriceFilter from 'components/SalonsListView/PriceFilter/PriceFilter';
import SalonsList from 'components/SalonsListView/SalonsList/SalonsList';
import { StoreContext } from 'store/StoreProvider';
import { updatePriceRangeAction } from 'store/actions';
import { SalonType } from 'types';
import { isPriceWithinRange } from 'utils/utils';

const SalonsListViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonsListView = (): ReactElement => {
  const { salonsList, selectedPriceRange, dispatch } =
    useContext(StoreContext);
  const priceSelectionHandler = useCallback(
    (selectedValue) => {
      // console.log(28, selectedValue);
      dispatch(
        updatePriceRangeAction({
          selectedPriceRange: selectedValue.value,
        }),
      );
    },
    [dispatch],
  );
  const filteredSalons = useMemo(() => {
    return salonsList.reduce((acc: SalonType[], cur: SalonType) => {
      return isPriceWithinRange({
        price: cur.price,
        priceRange: selectedPriceRange,
      })
        ? [...acc, cur]
        : acc;
    }, [] as SalonType[]);
  }, [selectedPriceRange, salonsList]);

  return (
    <SalonsListViewWrapper>
      <Header heading="Hår" />
      <PriceFilter
        {...{ priceSelectionHandler, selectedPriceRange }}
      />
      <SalonsList {...{ filteredSalons }} />
    </SalonsListViewWrapper>
  );
};

export default SalonsListView;
