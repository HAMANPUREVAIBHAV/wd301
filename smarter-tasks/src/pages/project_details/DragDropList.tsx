/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Column from "./Column";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { useTasksDispatch } from "../../context/task/context";
import { reorderTasks, updateTask  } from "../../context/task/actions";
import { useParams } from "react-router-dom";
import { AvailableColumns, ProjectData } from "../../context/task/types";

const Container = (props: React.PropsWithChildren) => {
  return <div className="flex">{props.children}</div>;
};

const DragDropList = (props: { data: ProjectData }) => {
  const taskDispatch = useTasksDispatch();
  const { projectID } = useParams();

  const onDragEnd: OnDragEndResponder = (result) => {
    
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Get source list
    const startKey = source.droppableId as AvailableColumns;
    // Get destination list
    const finishKey = destination.droppableId as AvailableColumns;
  
    // Get source list to modify
    const start = props.data.columns[startKey];
    // Get destination list to modify
    const finish = props.data.columns[finishKey];

    if (start === finish) {
      const newTaskIDs = Array.from(start.taskIDs);
      newTaskIDs.splice(source.index, 1);
      newTaskIDs.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIDs: newTaskIDs,
      };

    const newState = {
      ...props.data,
      columns: {
        ...props.data.columns,
        [newColumn.id]: newColumn,
      },
    };
    reorderTasks(taskDispatch, newState);
    return;
  };
  const startTaskIDs = Array.from(start.taskIDs);
    // Remove the item from `startTaskIDs`
    const updatedItems = startTaskIDs.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIDs: startTaskIDs,
    };

    const finishTaskIDs = Array.from(finish.taskIDs);

    // Insert the item to destination list.
    finishTaskIDs.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIDs: finishTaskIDs,
    };

    const newState = {
      ...props.data,
      columns: {
        ...props.data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    reorderTasks(taskDispatch, newState);
  const updatedTask = props.data.tasks[updatedItems[0]];
  updatedTask.state = finishKey;
  updateTask(taskDispatch, projectID ?? "", updatedTask);
    
  };
  
    return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {props.data.columnOrder.map((colID) => {
          const column = props.data.columns[colID];
          const tasks = column.taskIDs.map((taskID) => props.data.tasks[taskID]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
      </DragDropContext>
    );
  };
  
  export default DragDropList;