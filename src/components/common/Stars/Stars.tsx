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
    {[1, 2, 3, 4, 5].map((starNo) => (
      <Star
        src={stars >= starNo ? starFilled : starStroked}
        key={starNo}
      />
    ))}
  </>
);

export default Stars;
