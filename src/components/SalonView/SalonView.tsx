import React, { useContext, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ParamsType, SalonType } from 'types';
import SalonHeader from './SalonHeader/SalonHeader';
import SalonInfo from './SalonInfo/SalonInfo';
import { StoreContext } from 'store/StoreProvider';

const SalonViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonView: React.FC = () => {
  const { salonId }: ParamsType = useParams();
  const { salonsList } = useContext(StoreContext);
  const history = useHistory();
  const currentSalon: SalonType = useMemo(() => {
    const salon = salonsList.find(
      (salon: SalonType) => salon?.id === salonId,
    );
    return salon;
  }, [salonId, salonsList]);

  useEffect(() => {
    if (!currentSalon) history.push('/');
  }, [currentSalon, history]);

  return (
    <SalonViewWrapper>
      <SalonHeader
        companyName={currentSalon?.companyName || ''}
        stars={currentSalon?.stars || 0}
        reviews={currentSalon?.reviews || 0}
      />
      <SalonInfo />
    </SalonViewWrapper>
  );
};

export default SalonView;
