import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

const TaskList = (props: Props) =>{
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
    <Task key={idx}
    id={task.id} 
    todoTitle={task.todoTitle}
    todoDescription={task.todoDescription}
    todoDueDate={task.todoDueDate}
    onDelete={() => props.deleteTask(idx)} 
    
    />
    </li>
  ));
  return <><ul>{list}</ul></>;
  
}

export default TaskList;