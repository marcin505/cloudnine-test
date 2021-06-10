import React, { ReactElement } from 'react';
import styled from 'styled-components';
import starFilled from 'assets/star-fill.svg';
import starStroked from 'assets/star-stroke.svg';
import { StarSizeEnum } from 'types';

interface StarsProps {
  stars: number;
  size?:
    | StarSizeEnum.SMALL
    | StarSizeEnum.MEDIUM
    | StarSizeEnum.LARGE;
}

interface StarProps {
  src: string;
  size: StarSizeEnum.SMALL | StarSizeEnum.MEDIUM | StarSizeEnum.LARGE;
}

const StyledImg = styled.img<StarProps>`
  margin-right: 4px;
  width: ${({ size }) => {
    switch (size) {
      case StarSizeEnum.MEDIUM:
        return '13px';
      case StarSizeEnum.LARGE:
        return '15px';
      case StarSizeEnum.SMALL:
      default:
        return '9px';
    }
  }};
`;

const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Star = ({ src, size }: StarProps) => (
  <StyledImg {...{ src, size }} />
);

const Stars = ({
  stars,
  size = StarSizeEnum.SMALL,
}: StarsProps): ReactElement => (
  <StarsWrapper>
    {[1, 2, 3, 4, 5].map((key) => (
      <Star
        src={stars >= key ? starFilled : starStroked}
        size={size}
        key={key}
      />
    ))}
  </StarsWrapper>
);

export default Stars;
