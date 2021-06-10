import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ParamsType } from 'types';
import SalonHeader from './SalonHeader/SalonHeader';
import SalonInfo from './SalonInfo/SalonInfo';

const SalonViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonView = (): ReactElement => {
  const { salonId }: ParamsType = useParams();
  console.log(salonId);

  return (
    <SalonViewWrapper>
      <SalonHeader
        companyName="Some Company"
        stars={3}
        reviews={42}
      />
      <SalonInfo />
    </SalonViewWrapper>
  );
};

export default SalonView;
