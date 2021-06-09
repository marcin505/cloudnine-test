import React, { ReactElement } from 'react';
import styled from 'styled-components';
import starFilled from 'assets/star-fill.svg';
import starStroked from 'assets/star-stroke.svg';

interface StarProps {
  src: string;
}

interface StarsProps {
  stars: number;
}

const StyledImg = styled.img`
  margin-right: 4px;
  width: 9px;
`;

const Star = ({ src }: StarProps) => <StyledImg {...{ src }} />;

const Stars = ({ stars }: StarsProps): ReactElement => (
  <>
    <Star src={stars >= 1 ? starFilled : starStroked} />
    <Star src={stars >= 2 ? starFilled : starStroked} />
    <Star src={stars >= 3 ? starFilled : starStroked} />
    <Star src={stars >= 4 ? starFilled : starStroked} />
    <Star src={stars === 5 ? starFilled : starStroked} />
  </>
);

export default Stars;
