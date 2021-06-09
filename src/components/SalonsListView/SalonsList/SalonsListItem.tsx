import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SalonType } from 'types';

interface SalonsListItemProps {
  salon: SalonType
}

const StyledListItem = styled.li`
  border-bottom: solid 1px #eee;
  display: flex;
  padding: 15px 0;
`;

const Col1 = styled.span`
  color: #202020;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  width: 52px;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.span`
  margin: 0;
  color: #202020;
  font-family: "MillerBanner", serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 16px;
`;

const Score = styled.div`
  margin: 12px 0;
  font-family: HelveticaNeue;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.07px;
  color: #656565;
`;

const Address = styled.span`
  font-family: "HelveticaNeue";
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #656565;
`;

const SalonsListItem = ({ salon: {
  openTime,
  companyName,
  address,
  score,
} }: SalonsListItemProps): ReactElement => {
  return (
    <StyledListItem>
      <Col1>{openTime}</Col1>
      <Col2>
        <CompanyName>{companyName}</CompanyName>
        <Score>({score})</Score>
        <Address>{address}</Address>
      </Col2>
    </StyledListItem>)
};

export default SalonsListItem;



