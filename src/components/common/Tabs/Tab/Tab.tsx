import React from 'react';
import styled from 'styled-components';

interface TabProps {
  index: number;
  title: string;
  setSelectedTab: (index: number) => void;
  getIsSelected: (index: number) => boolean;
}

interface TabButtonProps {
  isSelected: boolean;
}

const TabWrapper = styled.li`
  flex-grow: 1;
  height: 50px;
  font-size: 15px;
  font-family: 'HelveticaNeue, sans-serif';
`;

const TabButton = styled.button<TabButtonProps>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #fff;
  border: none;
  border-bottom: ${({ isSelected = false }) =>
    `solid ${isSelected ? '2px' : '1px'} ${
      isSelected ? '#b69f58' : `#eeeeee`
    }`};
  transition: border-color 0.2s linear;
`;

const Tab: React.FC<TabProps> = ({
  index,
  title,
  setSelectedTab,
  getIsSelected,
}) => (
  <TabWrapper key={index}>
    <TabButton
      onClick={() => setSelectedTab(index)}
      isSelected={getIsSelected(index)}
    >
      {title}
    </TabButton>
  </TabWrapper>
);

export default Tab;
