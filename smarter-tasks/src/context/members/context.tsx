import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, MembersState, MembersAction } from './reducer';
const MembersStateContext = createContext<MembersState | undefined>(undefined);

type MembersDispatch = React.Dispatch<MembersAction>;
export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);




const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

export const MembersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
