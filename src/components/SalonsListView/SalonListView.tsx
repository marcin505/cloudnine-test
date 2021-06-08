import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import Header from 'components/SalonsListView/Header/Header';
import PriceFilter from 'components/SalonsListView/PriceFilter/PriceFilter';
import SalonsList from 'components/SalonsListView/SalonsList/SalonsList';

const SalonsListViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonsListView = (): ReactElement => {
  const priceSelectionHandler = useCallback((val) => {
    console.log(val);
  }, []);

  return (
    <SalonsListViewWrapper>
      <Header heading="Hår" />
      <PriceFilter {...{ priceSelectionHandler }} />
      <SalonsList />
    </SalonsListViewWrapper>
  );
};

export default SalonsListView;
