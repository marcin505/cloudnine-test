import React from 'react';
import styled from 'styled-components';
import globeIcon from 'assets/globe.svg';
import clockIcon from 'assets/clock.svg';
import phoneIcon from 'assets/phone.svg';
import pinIcon from 'assets/pin.svg';
import arrowDownIcon from 'assets/arrow-down.svg';
import { SalonTextEnum } from 'constants/constants';
import SalonText from 'components/SalonView/SalonText/SalonText';

interface SalonInfoType {
  address: string;
}

interface IconProps {
  margin?: string;
  height?: string;
  cursor?: string;
}

const SalonInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  background-color: #fff;
  color: #2b2b2b;
`;

const SalonInfoItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SalonInfoItem = styled.li`
  align-items: center;
  border-bottom: solid 1px #eeeeee;
  color: #202020;
  padding: 15px 0;
  display: flex;
  &:last-child {
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 30px;
`;

const Icon = styled.img<IconProps>`
  margin: ${({ margin = '0' }) => margin};
  height: ${({ height = '15px' }) => height};
  cursor: ${({ cursor = 'none' }) => cursor};
`;

const StyledLink = styled.a`
  color: #202020;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #868475;
  }
`;

const SalonInfo: React.FC<SalonInfoType> = ({ address }) => (
  <SalonInfoWrapper>
    <SalonInfoItems>
      <SalonInfoItem>
        <IconWrapper>
          <Icon src={pinIcon} alt="pin icon" />
        </IconWrapper>
        <span>{address}</span>
      </SalonInfoItem>
      <SalonInfoItem>
        <IconWrapper>
          <Icon src={clockIcon} alt="clock icon" />
        </IconWrapper>
        <span>Öppet till 19:00 idag</span>{' '}
        <Icon
          src={arrowDownIcon}
          height={'8px'}
          margin={'0 0 0 13px'}
          cursor={'pointer'}
          alt="expand icon"
        />
      </SalonInfoItem>
      <SalonInfoItem>
        <IconWrapper>
          <Icon src={phoneIcon} alt="phone icon" />
        </IconWrapper>
        <span>08-522 389 20</span>
      </SalonInfoItem>
      <SalonInfoItem>
        <IconWrapper>
          <Icon src={globeIcon} margin={'2px 0 0'} alt="phone icon" />
        </IconWrapper>
        <StyledLink href="https://www.salongweb.se" target="_blank">
          www.salongweb.se
        </StyledLink>
      </SalonInfoItem>
    </SalonInfoItems>
    <SalonText text={`${SalonTextEnum.SALON_INFO}`} />
  </SalonInfoWrapper>
);

export default SalonInfo;
