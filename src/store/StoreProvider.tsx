import React, { ReactElement, useReducer, Context } from 'react';
import { SALONS_LIST } from 'constants/constants';
import { updateSelectedTabAction } from './actions';
import reducer, { initialState, StoreType } from './reducer';

const StoreContext: Context<any> = React.createContext(initialState);

const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [{ salonsList }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  console.log(salonsList);
  return (
    <StoreContext.Provider value={{ salonsList }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
