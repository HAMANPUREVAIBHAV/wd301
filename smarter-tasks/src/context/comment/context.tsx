/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, PropsWithChildren } from 'react';
import { CommentListState, CommentDispatch } from './types';
import { commentReducer, initialState } from './reducer';


const CommentDispatchContext = createContext<CommentDispatch>(() => { });
const CommentStateContext = createContext<CommentListState>(initialState);


export const CommentProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialState);
    console.log("CommentProvider state:", state); // Debug
  console.log("CommentProvider dispatch:", dispatch); // Debug
    return (
        <CommentStateContext.Provider value={state}>
            <CommentDispatchContext.Provider value={dispatch}>
                {children}
            </CommentDispatchContext.Provider>
        </CommentStateContext.Provider>
    )
}

// export const useCommentsState = () => useContext(CommentStateContext);
export const useCommentsState = () => {
    const state = useContext(CommentStateContext);
    console.log("Comment State:", state); // Add this to debug
    return state;
  };
export const useCommentsDispatch = () => useContext(CommentDispatchContext);