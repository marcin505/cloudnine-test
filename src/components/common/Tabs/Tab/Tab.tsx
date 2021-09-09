import React from 'react';
import styled from 'styled-components';

interface TabProps {
  tabHeading: string;
  onTabChange: (tabHeading: string) => void;
  getIsSelected: (tabHeading: string) => boolean;
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
  background: #fff;
  border: none;
  border-bottom: ${({ isSelected = false }) =>
    `solid ${isSelected ? '2px' : '1px'} ${
      isSelected ? '#b69f58' : `#eeeeee`
    }`};
  cursor: pointer;
  height: 100%;
  outline: none;
  transition: border-color 0.2s ease-out;
  width: 100%;
  &:hover {
    color: #6d5f37;
  }
`;

const Tab: React.FC<TabProps> = ({
  tabHeading,
  onTabChange,
  getIsSelected,
}) => (
  <TabWrapper>
    <TabButton
      onClick={() => onTabChange(tabHeading)}
      isSelected={getIsSelected(tabHeading)}
    >
      {tabHeading}
    </TabButton>
  </TabWrapper>
);

export default Tab;
