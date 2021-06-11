import React, { ReactElement, useReducer, Context } from 'react';
import reducer, { initialState } from './reducer';

const StoreContext: Context<any> = React.createContext(initialState);

const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [{ salonsList, selectedPriceRange, selectedTab }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <StoreContext.Provider
      value={{
        salonsList,
        selectedPriceRange,
        selectedTab,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
