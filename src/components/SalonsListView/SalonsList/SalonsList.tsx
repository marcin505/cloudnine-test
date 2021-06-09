import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SalonType } from 'types';
import SalonsListItem from './SalonsListItem';

interface SalonsListProps {
  salons: SalonType[];
}

const StyledUl = styled.ul`
  height: 546px;
  margin: 0;
  overflow-y: auto;
  padding: 0 15px;
`;

const SalonsList = ({ salons }: SalonsListProps): ReactElement => {
  return salons.length ? (
    <StyledUl>
      {salons.map((salon: SalonType) => (
        <SalonsListItem {...{ salon }} key={salon.id} />
      ))}
    </StyledUl>
  ) : (
    <span>No results found</span>
  );
};

export default SalonsList;
