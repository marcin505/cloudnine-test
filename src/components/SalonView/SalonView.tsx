import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ParamsType } from 'types';

const ListViewWrapper = styled.section`
  background: #fff;
  height: 667px;
`;

const SalonView = (): ReactElement => {
  const { salonId }: ParamsType = useParams();

  useEffect(() => {
    console.log(salonId);
  }, [salonId]);

  return <ListViewWrapper>{salonId}</ListViewWrapper>;
};

export default SalonView;
