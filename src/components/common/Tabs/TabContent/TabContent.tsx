import React from 'react';
import styled from 'styled-components';

interface TabType {
  tabHeading: string;
}

const TabContentWrapper = styled.section`
  padding: 0 15px;
`;

const Divider = styled.div`
  height: 20px;
  background-color: #f9f9f9;
`;

const TabContent: React.FC<TabType> = ({ children }) => (
  <>
    <Divider />
    <TabContentWrapper>{children}</TabContentWrapper>
  </>
);

export default TabContent;
