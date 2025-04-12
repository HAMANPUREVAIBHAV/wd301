import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
  onDelete: () => void;
}


const Task = (props: TaskProp) =>{
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date: {props.dueDate}
      </p>
      <p className="text-sm text-slate-500">
        Description: {props.description}
      </p>
      <button className="deleteTaskButton bg-red-500 text-white rounded-md px-2 py-1 mt-2 mb-2 hover:bg-slate-600"
        onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;