import React from 'react';
import styled from 'styled-components';

interface SalonTextProps {
  text: string;
}

const SalonTextWrapper = styled.div`
  margin-top: 12px;
  line-height: 1.47;
  color: #2b2b2b;
`;

const SalonText: React.FC<SalonTextProps> = ({ text }) => (
  <SalonTextWrapper>{text}</SalonTextWrapper>
);

export default SalonText;
