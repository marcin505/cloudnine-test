import React, { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import Header from 'components/SalonsListView/Header/Header';
import PriceFilter from 'components/SalonsListView/PriceFilter/PriceFilter';
import SalonsList from 'components/SalonsListView/SalonsList/SalonsList';
import { SalonsContext } from 'store/SalonsProvider';
import { updatePriceRangeAction } from 'store/actions';
import { SalonType } from 'types';
import { isPriceWithinRange } from 'utils/utils';

const SalonsListViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonsListView: React.FC = () => {
  const { salonsList, selectedPriceRange, dispatch } =
    useContext(SalonsContext);

  const priceSelectionHandler = useCallback(
    (selectedOption) => {
      dispatch(
        updatePriceRangeAction({
          selectedPriceRange: selectedOption.value,
        }),
      );
    },
    [dispatch],
  );

  const filteredSalons = useMemo(
    () =>
      salonsList.reduce(
        (acc: SalonType[], cur: SalonType) =>
          isPriceWithinRange({
            price: cur.price,
            priceRange: selectedPriceRange,
          })
            ? [...acc, cur]
            : acc,
        [] as SalonType[],
      ),
    [selectedPriceRange, salonsList],
  );

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
