import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from 'assets/image.jpg';
import Button from 'components/common/Button/Button';
import backIcon from 'assets/arrow-left-white.svg';
import heartIcon from 'assets/heart.svg';
import Stars from 'components/common/Stars/Stars';
import { StarSizeEnum } from 'types';

interface SalonHeaderProps {
  companyName: string;
  stars: number;
  reviews: number;
}

const SalonHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 251px;
  background-image: linear-gradient(
      180deg,
      transparent 50%,
      #000 100%
    ),
    url(${image});
`;

const Buttons = styled.section`
  align-items: flex-end;
  display: flex;
  height: 36px;
  justify-content: space-between;
  padding: 23px 13px 0 10px;
  user-select: none;
`;

const BackButton = styled(Link)`
  text-align: left;
  width: 30px;
`;

const HeartButton = styled(Button)`
  text-align: right;
  margin-bottom: 4px;
`;

const BottomContainer = styled.section`
  padding: 0 15px;
  margin-top: 118px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-family: 'MillerBanner', serif;
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: left;
  color: #ffffff;
  margin: 0 0 9px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
`;

const Reviews = styled.span`
  margin-left: 8px;
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.07px;
  color: #fff;
  padding-bottom: 2px;
`;

const SalonHeader: React.FC<SalonHeaderProps> = ({
  companyName,
  stars,
  reviews,
}) => (
  <SalonHeaderWrapper>
    <Buttons>
      <BackButton to="/">
        <img src={backIcon} alt="back icon" />
      </BackButton>
      <HeartButton>
        <img src={heartIcon} alt="heart icon" />
      </HeartButton>
    </Buttons>
    <BottomContainer>
      <Heading>{companyName}</Heading>
      <Score>
        <Stars stars={stars} size={StarSizeEnum.MEDIUM} />
        <Reviews>({reviews})</Reviews>
      </Score>
    </BottomContainer>
  </SalonHeaderWrapper>
);

export default SalonHeader;
