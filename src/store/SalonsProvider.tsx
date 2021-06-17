import React, { ReactElement, useReducer, Context } from 'react';
import salonsReducer, { initialState } from './salonsReducer';

const SalonsContext: Context<any> = React.createContext(initialState);

const SalonsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [{ salonsList, selectedPriceRange, selectedTab }, dispatch] =
    useReducer(salonsReducer, initialState);
  return (
    <SalonsContext.Provider
      value={{
        salonsList,
        selectedPriceRange,
        selectedTab,
        dispatch,
      }}
    >
      {children}
    </SalonsContext.Provider>
  );
};

export { SalonsContext };
export default SalonsProvider;
