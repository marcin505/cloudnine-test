import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from 'assets/image.jpg'
import Button from 'components/common/Button/Button'
import backIcon from 'assets/arrow-left-white2.svg';
import heartIcon from 'assets/heart.svg'

const SalonHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 251px;
  background-image: url(${image});
`;

const Buttons = styled.section`
  align-items: flex-end;
  display: flex;
  height: 36px;
  justify-content: space-between;
  padding: 23px 13px 8px 10px;
`;

const BackButton = styled(Link)`
  text-align: left;
  width: 30px;
`;

const HeartButton = styled(Button)`
  text-align: right;
  margin-bottom: 4px;
`;

const SalonHeader = (): ReactElement => (
  <SalonHeaderWrapper>
    <Buttons>
      <BackButton to="/" >
        <img src={backIcon} alt="back icon" />
      </BackButton>
      <HeartButton>
        <img src={heartIcon} alt="hear icon" />
      </HeartButton>
    </Buttons>
  </SalonHeaderWrapper>
);

export default SalonHeader;