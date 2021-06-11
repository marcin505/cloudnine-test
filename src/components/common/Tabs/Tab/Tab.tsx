import React, { ReactChild } from 'react';

interface TabType {
  children: ReactChild[];
  value: string;
  header: string;
}

const Tab: React.FC<TabType> = ({ children }) => (
  <div>{children}</div>
);
export default Tab;
