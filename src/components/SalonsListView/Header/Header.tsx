import React, { ReactElement } from 'react';
import styled from 'styled-components';
import backIcon from 'assets/arrow-left.svg';
import filter from 'assets/filter.svg';

interface HeaderProps {
  heading: string;
}

const HeaderWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #b69f58;
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 25px 15px 8px;
`;

const Heading = styled.h1`
  margin: 8px 0 10px 0;
  color: #202020;
  font-family: 'MillerBanner', serif;
  font-size: 22px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.13px;
  line-height: normal;
  text-align: center;
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
`;

const Header = ({ heading }: HeaderProps): ReactElement => {
  return (
    <HeaderWrapper>
      <Button>
        <img src={backIcon} alt="" />
      </Button>
      <Heading>{heading}</Heading>
      <Button>
        <img src={filter} alt="filter icon" />
      </Button>
    </HeaderWrapper>
  );
};

export default Header;
