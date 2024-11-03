import React from "react";
import { TaskItem } from "./types";
import "./index.css"

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }
interface TaskFormState {
    title: string;
    duedate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "", 
          duedate: "" ,
          description: ""
        }
      }

      addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          duedate: this.state.duedate,
          description: this.state.description
        };
        this.props.addTask(newTask);
        this.setState({ title: "", duedate: "", description:"" });
      };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  inputRef = React.createRef<HTMLInputElement>();
  render(){
    return (
      <form className ="grid grid-cols-2 gap-2" onSubmit={this.addTask}>
        <input required className="border border-gray-300 rounded text-gray-900 w-full p-2 m-2 text-sm" placeholder="Title" type="text" id="todoTitle" value={this.state.title} onChange={this.titleChanged}/>
        <input required className="border border-gray-300 rounded text-gray-900 w-full p-2  m-2 text-sm" type="date" id="todoDueDate" value={this.state.duedate} onChange={this.duedateChanged}/>
        <input  className ="border border-gray-300 rounded text-gray-900 w-full p-2 m-2 col-span-2 text-sm" placeholder="Description ..." type="text" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged} />
        <button className="bg-green-600 text-white px-5 py-2 rounded mb-2 m-2 font-medium" type="submit" id="addTaskButton">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;