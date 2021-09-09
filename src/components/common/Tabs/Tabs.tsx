import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import Tab from './Tab/Tab';

interface TabsProps {
  children: ReactElement[];
  onTabChange: (tabHeading: string) => void;
  selectedTab: string;
  namesArr: { name: string }[];
  onNameClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onTextChange: (event: React.FormEvent<HTMLInputElement>) => void;
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
  namesArr,
  onNameClick,
  onTextChange,
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

  const inputEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current?.focus();
  };

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
      {namesArr.map(({ name }, index) => (
        <span key={index} onClick={(event) => onNameClick(event)}>
          {name}
        </span>
      ))}
      <input type="text" ref={inputEl} onChange={onTextChange} />
      <button onClick={onButtonClick}>Focus the input</button>
    </TabsWrapper>
  );
};

export default Tabs;
