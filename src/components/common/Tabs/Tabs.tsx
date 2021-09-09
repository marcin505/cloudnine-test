import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import Tab from './Tab/Tab';

interface TabsProps {
  children: ReactElement[];
  onTabChange: (tabHeading: string) => void;
  selectedTab: string;
}

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTabs = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tabs: React.FC<TabsProps> = ({
  children,
  onTabChange,
  selectedTab,
}) => {
  const selectedChild = useCallback(
    (children) =>
      children.find(
        (child: ReactElement) =>
          child.props.tabHeading === selectedTab,
      ),
    [selectedTab],
  );

  const getIsSelected = useCallback(
    (tabIndex) => selectedTab === tabIndex,
    [selectedTab],
  );

  return (
    <TabsWrapper>
      <StyledTabs>
        {children.map(({ props: { tabHeading } }, index) => (
          <Tab
            {...{ onTabChange, tabHeading, getIsSelected }}
            key={index}
          />
        ))}
      </StyledTabs>
      {selectedChild(children)}
    </TabsWrapper>
  );
};

export default Tabs;
