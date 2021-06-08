import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Header from 'components/SalonsListView/Header';

const SalonsListViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonsListView = (): ReactElement => {
  return (
    <SalonsListViewWrapper>
      <Header heading="Hår" />
    </SalonsListViewWrapper>
  );
};

export default SalonsListView;
