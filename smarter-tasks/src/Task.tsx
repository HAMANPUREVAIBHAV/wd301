import "./TaskCard.css";

interface TaskProp {
  id: string;
  todoTitle: string;
  todoDueDate: string;
  todoDescription: string;
  onDelete: () => void;
}


const Task = (props: TaskProp) =>{
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <a href={`/tasks/${props.id || ""}`}>
            <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
          </a>

      <p className="text-sm text-slate-500">
        Due Date: {props.todoDueDate}
      </p>
      <p className="text-sm text-slate-500">
        Description: {props.todoDescription}
      </p>
      <button className="deleteTaskButton bg-red-500 text-white rounded-md px-2 py-1 mt-2 mb-2 hover:bg-slate-600"
        onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;