import React, { ReactElement } from 'react';
import styled from 'styled-components';
import globeIcon from 'assets/globe.svg';
import clockIcon from 'assets/clock.svg';
import phoneIcon from 'assets/phone.svg';
import pinIcon from 'assets/pin.svg';
import arrowDownIcon from 'assets/arrow-down.svg';

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
  border-bottom: 1px #eeeeee solid;
  color: #202020;
  padding: 15px 0;
  display: flex;
`;

const Divider = styled.div`
  height: 20px;
  background-color: #f9f9f9;
`;

const InfoContainer = styled.section`
  padding: 0 15px;
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

const SalonText = styled.div`
  margin-top: 20px;
  line-height: 1.47;
  color: #2b2b2b;
`;

const StyledLink = styled.a`
  color: #202020;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #868475;
  }
`;

const SalonInfo = (): ReactElement => (
  <SalonInfoWrapper>
    <Divider />
    <InfoContainer>
      <SalonInfoItems>
        <SalonInfoItem>
          <IconWrapper>
            <Icon src={pinIcon} alt="pin icon" />
          </IconWrapper>
          <span>Rådmansgatan 46, 113 57 Stockholm</span>
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
            <Icon
              src={globeIcon}
              margin={'2px 0 0'}
              alt="phone icon"
            />
          </IconWrapper>
          <StyledLink href="www.salongweb.se">
            www.salongweb.se
          </StyledLink>
        </SalonInfoItem>
      </SalonInfoItems>
      <SalonText>
        Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra.
        Ridiculus feugiat nunc porttitor volut pat, acu quis torquent
        iaculis ultricies massa, duis nun quis que amet.
      </SalonText>
    </InfoContainer>
  </SalonInfoWrapper>
);

export default SalonInfo;
