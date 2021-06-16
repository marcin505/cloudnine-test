import React, { useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { StoreContext } from 'store/StoreProvider';
import { ParamsType, SalonType } from 'types';
import { SalonInfoTabsHeadersEnum } from 'types';
import { SalonTextEnum } from 'constants/constants';
import Tabs, { TabContent } from 'components/common/Tabs';
import SalonHeader from './SalonHeader/SalonHeader';
import SalonInfo from './SalonInfo/SalonInfo';
import SalonText from './SalonText/SalonText';

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

  return currentSalon ? (
    <SalonViewWrapper>
      <SalonHeader
        companyName={currentSalon.companyName}
        stars={currentSalon.stars}
        reviews={currentSalon.reviews}
      />
      <Tabs>
        <TabContent title={SalonInfoTabsHeadersEnum.INFO}>
          <SalonInfo
            address={`${currentSalon.street}, ${currentSalon.postCode} ${currentSalon.city}`}
          />
        </TabContent>
        <TabContent title={SalonInfoTabsHeadersEnum.SCHEMA}>
          <SalonText
            text={`${SalonTextEnum.SCHEMA} for ${currentSalon.companyName}`}
          />
        </TabContent>
      </Tabs>
    </SalonViewWrapper>
  ) : null;
};

export default SalonView;
