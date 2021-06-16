import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import Tab from './Tab/Tab';

interface TabsProps {
  children: ReactElement[];
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

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const getIsSelected = useCallback(
    (tabIndex) => selectedTab === tabIndex,
    [selectedTab],
  );

  return (
    <TabsWrapper>
      <StyledTabs>
        {children.map(({ props: { title } }, index) => (
          <Tab
            {...{ setSelectedTab, index, title, getIsSelected }}
            key={index}
          />
        ))}
      </StyledTabs>
      {children[selectedTab]}
    </TabsWrapper>
  );
};

export default Tabs;
