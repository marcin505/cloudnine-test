import React, {
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SalonsContext } from 'store/SalonsProvider';
import { ParamsType, SalonType } from 'types';
import { SalonInfoTabsHeadersEnum } from 'types';
import { SalonTextEnum } from 'constants/constants';
import Tabs, { TabContent } from 'components/common/Tabs';
import SalonHeader from './SalonHeader/SalonHeader';
import SalonInfo from './SalonInfo/SalonInfo';
import SalonText from './SalonText/SalonText';
import { updateSelectedTabAction } from 'store/actions';

const namesArr = [{ name: 'Paweł' }, { name: 'Jola' }];
export const baseURL = 'https://hn.algolia.com/api/v1/search';

const SalonViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonView: React.FC = () => {
  const { salonId }: ParamsType = useParams();
  const { salonsList, selectedTab, dispatch } =
    useContext(SalonsContext);
  const history = useHistory();
  const currentSalon: SalonType = useMemo(
    () =>
      salonsList.find((salon: SalonType) => salon?.id === salonId),
    [salonId, salonsList],
  );

  const tabChangeHandler = useCallback(
    (selectedTab) => {
      dispatch(updateSelectedTabAction({ selectedTab }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!currentSalon) history.push('/');
  }, [currentSalon, history, selectedTab]);

  const onNameClick = useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      console.log(event.target);
    },
    [],
  );

  const onTextChange = useCallback(
    ({
      currentTarget: { value: query },
    }: React.FormEvent<HTMLInputElement>): void => {
      // console.log(query);
      // const query = value;
      // event.preventDefault();
      // fetch(`${baseURL}?query=${query}`)
      // .then((response) => response.json())
      // .then((val) => console.log(val));
      (async () => {
        const result = await fetch(`${baseURL}?query=${query}`).then(
          (response) => response.json(),
        );
        console.log(result);
      })();
    },
    [],
  );

  return currentSalon ? (
    <SalonViewWrapper>
      <SalonHeader
        companyName={currentSalon.companyName}
        stars={currentSalon.stars}
        reviews={currentSalon.reviews}
      />
      <Tabs
        onTabChange={tabChangeHandler}
        selectedTab={selectedTab}
        {...{ namesArr, onNameClick, onTextChange }}
      >
        <TabContent tabHeading={SalonInfoTabsHeadersEnum.INFO}>
          <SalonInfo salon={currentSalon} />
        </TabContent>
        <TabContent tabHeading={SalonInfoTabsHeadersEnum.SCHEMA}>
          <SalonText
            text={`${SalonTextEnum.SCHEMA} for ${currentSalon.companyName}`}
          />
        </TabContent>
      </Tabs>
    </SalonViewWrapper>
  ) : null;
};

export default SalonView;
