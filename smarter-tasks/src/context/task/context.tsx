import React, {createContext, useContext, useReducer} from 'react';
import {taskReducer, initialState} from './reducer';
import { TaskListState, TasksDispatch } from './types';

const TasksStateContext = createContext<TaskListState>(initialState);
const TasksDispatchContext = createContext<TasksDispatch>(() => {});

export const TaskProvider : React.FC<React.PropsWithChildren> = ({
    children,
}) =>{
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TasksStateContext.Provider value={state}>
            <TasksDispatchContext.Provider value = {dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksStateContext.Provider>
    );
};

export const useTasksState = () => useContext(TasksStateContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);
