import React, { ReactElement } from 'react';
import styled from 'styled-components';
import arrowRight from 'assets/arrow-right.svg';
import { SalonType } from 'types';
import Stars from 'components/common/Stars/Stars';

interface SalonsListItemProps {
  salon: SalonType;
}

const StyledListItem = styled.li`
  border-bottom: solid 1px #eee;
  display: flex;
  padding: 16px 0;
`;

const Col1 = styled.span`
  color: #202020;
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 15px;
  width: 52px;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CompanyName = styled.span`
  margin: 0;
  color: #202020;
  font-family: 'MillerBanner', serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 16px;
`;

const Score = styled.div`
  display: flex;
  margin: 16px 0 12px;
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.07px;
  color: #656565;
`;

const Reviews = styled.span`
  margin-left: 4px;
`;

const Address = styled.span`
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #656565;
`;

const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Price = styled.span`
  font-family: HelveticaNeue, sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #202020;
`;

const Distance = styled.span`
  font-family: HelveticaNeue, sans-serif;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  margin-top: 14px;
  color: #656565;
`;

const Col4 = styled.a`
  display: flex;
  width: 30px;
  align-items: center;
  justify-content: flex-end;
`;

const SalonsListItem = ({
  salon: { openTime, companyName, address, reviews, stars, price, distance },
}: SalonsListItemProps): ReactElement => {
  return (
    <StyledListItem>
      <Col1>{openTime}</Col1>
      <Col2>
        <CompanyName>{companyName}</CompanyName>
        <Score>
          <Stars {...{ stars }} /> <Reviews>({reviews})</Reviews>
        </Score>
        <Address>{address}</Address>
      </Col2>
      <Col3>
        <Price>{price} kr</Price>
        <Distance>{distance} min</Distance>
      </Col3>
      <Col4>
        <img src={arrowRight} />
      </Col4>
    </StyledListItem>
  );
};

export default SalonsListItem;
