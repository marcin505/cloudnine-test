import React, { ReactElement } from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import { ParamsType } from 'types';
import SalonHeader from './SalonHeader/SalonHeader';

const SalonViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonView = (): ReactElement => {
  // const { salonId }: ParamsType = useParams();

  return (
    <SalonViewWrapper>
      <SalonHeader />
    </SalonViewWrapper>);
};

export default SalonView;
